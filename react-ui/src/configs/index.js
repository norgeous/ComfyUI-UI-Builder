import getFormInitialState from '../utils/getFormInitialState';

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

  const configs = directoryNames.reduce((acc, directoryName) => {
    const baseWorkflow = fileContents.find(
      ({ fileName }) =>
        fileName.includes(directoryName) && fileName.includes('workflow.json'),
    ).jsonData;

    const configData = fileContents.find(
      ({ fileName }) =>
        fileName.includes(directoryName) && fileName.includes('ui.json'),
    ).jsonData;

    const formInitialState = getFormInitialState(configData.formConfig);

    return [
      ...acc,
      {
        directoryName,
        baseWorkflow,
        configData,
        formInitialState,
      },
    ];
  }, []);

  return configs;
};

// const configs = await getConfigs();

export default getConfigs;
