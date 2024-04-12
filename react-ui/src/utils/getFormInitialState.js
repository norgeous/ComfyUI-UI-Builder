const getFormInitialState = (formConfig) => {
  const formInitialState = formConfig
    .reduce((acc, { initialState, initialOptionIndex, options }) => {
      const { label, ...optionFragment } = options?.[initialOptionIndex] || {};
      return ({
        ...acc,
        ...initialState,
        ...optionFragment,
      });
    }, {});

  return formInitialState;
};

export default getFormInitialState;
