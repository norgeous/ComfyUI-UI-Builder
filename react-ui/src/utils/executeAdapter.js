import { insertIntoComfyWorkFlow } from "./comfyWorkflowToComfyPrompt";

const executeAdapter = ({
  comfyUiData,
  formState,
  baseWorkflow,
  adapterConfig,
}) => {
  // wait for comfy ui data
  if (!comfyUiData.objectInfo) return;

  const operations = {
    // append formState string value to previous
    get: (previous, targets) => [previous, formState[targets[0]]].filter(v => v).join(' '),

    // append raw string value to previous
    raw: (previous, text) => [previous, text[0]].filter(v => v).join(' '),

    // check if the targets are defined in formState, if it fails, skip following steps and return the previous value
    if: (previous, targets) => {
      if (targets.every(target => formState[target] || formState[target] === 0)) return previous;
      else console.log('if condition FAILED for', targets)
    },

    // check if the previous value equals value in formState
    ifEquals: (previous, targets) => {},

    // clear the previous value
    clear: () => undefined,

    // multiply formState value with previous value
    multiply: (previous, targets) => Number(previous) * Number(formState[targets[0]]),

    // round a number
    round: (previous) => Math.round(previous),

    // add formState value to previous value
    add: (previous, targets) => Number(previous) + Number(formState[targets[0]]),

    // find the actual ckpt name (needed as some users have sub folder in checkpoints folder)
    findInCkptNames: (previous) => comfyUiData.objectInfo['CheckpointLoaderSimple'].input.required.ckpt_name[0].find(ckpt => ckpt.includes(previous)),

    //
    findInLoraNames: (previous, targets) => {},
  };
  
  const processStep = (previous, step) => {
    const [op, params] = step.split(':');
    const value = operations[op](previous, params?.split(','));
    return value;
  };
  
  const processSteps = (previous, steps) => {
    if (Array.isArray(steps)) {
      // process conditionals first / adapt steps with conditionals
      // if condition fails remove itself and the steps that follow it
      let ignoreNext = false;
      const adaptedSteps = steps.reduce((acc, step) => {
        if (Array.isArray(step)) return [...acc, step]; // return unmodifed step
        if (ignoreNext) return acc;
        // console.log({step})
        const [op, params] = step.split(':');
        const conditionals = ['if', 'ifEquals'];
        if (conditionals.includes(op)) {
          const value = operations[op](previous, params?.split(','));
          if (!value) ignoreNext = true; // ignore all steps in this array that follow a failed if condition
          console.log('checked', {op, params, value, ignoreNext, previous})
          return acc;
        }
        return [...acc, step]; // else return unmodifed step
      }, []);


      // get final values and join
      const value = adaptedSteps.reduce(processSteps, previous); // cursed
      return value;
    }

    return processStep(previous, steps);
  };

  const adapted = adapterConfig.map(({ destination, actions }) => ({
    destination,
    value: processSteps(undefined, actions),
  }));


  const adaptedWorkflow = adapted.reduce((acc, { destination, value }) => {
    return insertIntoComfyWorkFlow(acc, comfyUiData.objectInfo, destination, value);
  }, structuredClone(baseWorkflow));

  return adaptedWorkflow;
};

export default executeAdapter;
