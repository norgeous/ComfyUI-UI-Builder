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
    get: (previous, targets) => [previous, formState[targets[0]]].filter(v => v).join(' '),
    raw: (previous, text) => [previous, text[0]].filter(v => v).join(' '),
    if: (previous, targets) => {
      if (targets.every(target => formState[target] || formState[target] === 0)) return previous;
      // else console.log('if condition FAILED for', targets)
    },
    ifEquals: (previous, targets) => {},
    num: (previous, targets) => {},
    multiply: (previous, targets) => {},
    round: (previous, targets) => {},
    add: (previous, targets) => {},
    findInCkptNames: (previous, targets) => {},
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
      // if condition fails remove the steps that follow it
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
