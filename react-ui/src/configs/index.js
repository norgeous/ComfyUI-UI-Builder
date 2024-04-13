const files = import.meta.glob('./**/*.json');

const getConfigs = async () => {
  const keys = Object.keys(files);
  const directoryNames = [...new Set(keys.map(key => key.split('/')[1]))];

  const values = Object.values(files);
  const fileContents = await Promise.all(values)
    .then(res => Promise.all(res.map(json => json())))
    .then(res =>
      res.map((jsonData, index) => ({
        fileName: keys[index],
        jsonData,
      })),
    );

  const configs = directoryNames.reduce(
    (acc, directoryName) => [
      ...acc,
      {
        directoryName,
        baseWorkflow: fileContents.find(
          ({ fileName }) =>
            fileName.includes(directoryName) &&
            fileName.includes('workflow.json'),
        ).jsonData,
        configData: fileContents.find(
          ({ fileName }) =>
            fileName.includes(directoryName) &&
            fileName.includes('uiConfig.json'),
        ).jsonData,
      },
    ],
    [],
  );

  return configs;
};

const configs = await getConfigs();

export default configs;
