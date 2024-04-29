const isObject = thing =>
  typeof thing === 'object' && !Array.isArray(thing) && thing !== null;

const flattenFormState = formState =>
  Object.fromEntries(
    Object.entries(formState).reduce((acc, [key, value]) => {
      if (isObject(value)) return [...acc, ...Object.entries(value)]; // if value object, spread it and discard the key
      return [...acc, [key, value]]; // else do nothing and return the unmodified
    }, []),
  );

const executeAdapter = ({ comfyUiData, formState, adapterConfig }) => {
  if (!adapterConfig) return {};

  const flatFormState = flattenFormState(formState);

  const operations = {
    // append formState string value to previous
    get: (previous, target) =>
      [previous, flatFormState[target]].filter(v => v).join(' '),

    // append raw string value to previous
    raw: (previous, text) => [previous, text].filter(v => v).join(' '),

    // set a numeric value, ignores previous
    num: (_, text) => Number(text),

    // check if the targets are defined in formState
    // if it fails, skip following steps and return the previous value
    if: (previous, target) => {
      if (flatFormState[target] || flatFormState[target] === 0) return previous;
      return undefined;
    },

    // clear the previous value
    clear: () => undefined,

    // multiply formState value with previous value
    multiply: (previous, target) =>
      Number(previous) * Number(flatFormState[target]),

    // round a number
    round: previous => Math.round(previous),

    // add formState value to previous value
    add: (previous, target) => Number(previous) + Number(flatFormState[target]),

    // find the actual ckpt name (needed as some users have sub folder in checkpoints folder)
    findInCkptNames: previous => {
      if (!comfyUiData.objectInfo) return undefined;
      return comfyUiData.objectInfo.CheckpointLoaderSimple.input.required.ckpt_name[0].find(
        ckpt => ckpt.toLowerCase().includes(previous.toLowerCase()),
      );
    },
    // find the lora
    findInLoraNames: previous => {
      if (!comfyUiData.objectInfo) return undefined;
      return comfyUiData.objectInfo.LoraLoader.input.required.lora_name[0].find(
        lora => lora.toLowerCase().includes(previous.toLowerCase()),
      );
    },
  };

  const processStep = (previous, step) => {
    const [op, target] = step.split(':');
    const value = operations[op](previous, target);
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
        const [op, target] = step.split(':');
        if (op === 'if') {
          const value = operations[op](previous, target);

          // ignore all steps in this array that follow a failed if condition
          if (!value) ignoreNext = true;

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

  return adapted;
};

export default executeAdapter;
