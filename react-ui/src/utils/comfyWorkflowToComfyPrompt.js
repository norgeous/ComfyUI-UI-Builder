const comfyWorkflowToComfyPrompt = ({
  comfyWorkflow,
  objectInfo,
}) => {
  const linkLookup = comfyWorkflow.nodes.reduce((acc, { id, mode, inputs, outputs }) => ({
    ...acc,
    ...outputs?.reduce((acc2, { links, name }, index) => ({
      ...acc2,
      ...links.reduce((acc3, link) => ({
        ...acc3,
        [link]: {
          link: [String(id), index],
          bypassTo: mode === 4 && inputs.find(({type}) => type === name).link,
        },
      }), {}),
    }), {}),
  }), {});

  const getLink = (linkId) => {
    const { link, bypassTo } = linkLookup[linkId];
    if (bypassTo) return getLink(bypassTo); // cursed
    return link;
  };

  const comfyPrompt = structuredClone(comfyWorkflow).nodes.reduce((acc, { id, type, mode, inputs, widgets_values }) => {
    if (mode === 4) return acc; // bypass nodes

    const keys = Object.keys(objectInfo[type]?.input?.required || {});

    // ksampler fix
    const indexOfSeed = keys.indexOf('seed');
    if (type === 'KSampler' && indexOfSeed !== -1) keys.splice(indexOfSeed + 1, 0, 'control_after_generate');

    const newInputs = keys.reduce((acc2, key) => {
      const linkId = inputs?.find(({ name }) => name === key)?.link; // linkId or undefined
      const value = linkId ? getLink(linkId) : widgets_values.shift();
      return({ ...acc2, [key]: value });
    }, {});

    return {
      ...acc,
      [id]: {
        class_type: type,
        inputs: newInputs,
      },
    };
  }, {});

  return comfyPrompt;
};

export default comfyWorkflowToComfyPrompt;
