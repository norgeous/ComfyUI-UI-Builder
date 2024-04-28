const getFormInitialState = formConfig => {
  const formInitialState =
    formConfig?.reduce(
      (acc, { id, defaultValue, defaultValueIndex, options }) => ({
        ...acc,
        [id]: defaultValue ?? options?.[defaultValueIndex]?.value,
      }),
      {},
    ) || {};

  return formInitialState;
};

export default getFormInitialState;
