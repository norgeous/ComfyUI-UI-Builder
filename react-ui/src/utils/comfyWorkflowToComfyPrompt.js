const getLinkLookup = comfyWorkflow => {
  const linkLookup = comfyWorkflow.nodes.reduce((acc, { id, mode, inputs, outputs }) => ({
    ...acc,
    ...outputs?.reduce((acc2, { links, name }, index) => ({
      ...acc2,
      ...links.reduce((acc3, link) => ({
        ...acc3,
        [link]: {
          link: [String(id), index],
          bypassTo: mode === 4 && inputs?.find(({type}) => type === name).link,
        },
      }), {}),
    }), {}),
  }), {});

  return linkLookup;
};

const getLink = (linkLookup, linkId) => {
  const { link, bypassTo } = linkLookup[linkId];
  if (bypassTo) return getLink(linkLookup, bypassTo); // cursed
  return link;
};

const getKeys = (objectInfo, type) => {
  const keys = Object.keys(objectInfo?.[type]?.input?.required || {});

  // ksampler fix
  const indexOfSeed = keys.indexOf('seed');
  if (type === 'KSampler' && indexOfSeed !== -1) keys.splice(indexOfSeed + 1, 0, 'control_after_generate');

  return keys;
};

const comfyWorkflowToComfyPrompt = ({
  comfyWorkflow,
  objectInfo,
}) => {
  const linkLookup = getLinkLookup(structuredClone(comfyWorkflow));

  const comfyPrompt = structuredClone(comfyWorkflow).nodes.reduce((acc, { id, type, mode, inputs, widgets_values }) => {
    if (mode === 4) return acc; // bypass nodes

    const keys = getKeys(objectInfo, type);

    const newInputs = keys.reduce((acc2, key) => {
      const linkId = inputs?.find(({ name }) => name === key)?.link; // linkId or undefined
      const value = linkId ? getLink(linkLookup, linkId) : widgets_values.shift();
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

const insertIntoComfyWorkFlow = (workflow, objectInfo, destination, value) => {
  const [nodeName, fieldName] = destination.split(' > ');


  const newWorkflowNodes = structuredClone(workflow).nodes.map((node) => {
    const { type, title, inputs, widgets_values } = node;

    if ([type, title].includes(nodeName)) {
      const keys = getKeys(objectInfo, type);
      
      const linkedInputNames = inputs?.map(({ name }) => name) || [];

      // keys minus linked inputs
      const widgetValueKeys = keys.filter(key => !linkedInputNames.includes(key));

      const index = widgetValueKeys.findIndex(key => key === fieldName);
      widgets_values[index] = value; // override widgets_values value
    }

    return node;
  });

  return {
    ...workflow,
    nodes: newWorkflowNodes,
  };
};

export { insertIntoComfyWorkFlow };
