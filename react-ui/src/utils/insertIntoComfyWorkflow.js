// const insertIntoComfyWorkFlow = (workflow, objectInfo, destination, value) => {
//   const [nodeName, fieldName] = destination.split(' > ');
  
//   const keys = Object.keys(objectInfo[nodeName]?.input?.required || {});

//   // ksampler fix
//   const indexOfSeed = keys.indexOf('seed');
//   if (nodeName === 'KSampler' && indexOfSeed !== -1) keys.splice(indexOfSeed + 1, 0, 'control_after_generate');


// };

// export default insertIntoComfyWorkFlow;
