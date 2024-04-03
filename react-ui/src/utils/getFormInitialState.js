const getFormInitialState = (formConfig) => {
  const formInitialState = formConfig.reduce((acc, { children }) => ({
    ...acc,
    ...children.reduce((acc2, { initialState, initialOptionIndex, options }) => {
      // eslint-disable-next-line no-unused-vars
      const { label, ...optionFragment } = options?.[initialOptionIndex] || {};
      return ({
        ...acc2,
        ...initialState,
        ...optionFragment,
      });
    }, {}),
  }), {});

  return formInitialState;
};

export default getFormInitialState;
