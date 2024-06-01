const getFormInitialState = formConfig => {
  const formInitialState =
    formConfig?.reduce(
      (
        acc,
        { id, defaultValue, defaultValueIndex, options, subComponents = [] },
      ) => ({
        ...acc,
        [id]: defaultValue ?? options?.[defaultValueIndex]?.value,
        ...subComponents.reduce(
          (subAcc, { id: subId, defaultValue: subDefaultValue }) => ({
            ...subAcc,
            [subId]: subDefaultValue,
          }),
          {},
        ),
      }),
      {},
    ) || {};

  return formInitialState;
};

export default getFormInitialState;
