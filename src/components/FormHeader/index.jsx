import { useContext } from 'react';
import ConfigsContext from '@/contexts/ConfigsContext';
import Layout from '@/components/Layout';
import Select from '@/components/InputSelect';
import { Description } from './styled';

const UiSelector = () => {
  const { config, configs, setConfig } = useContext(ConfigsContext);

  const handleChange = newValue => {
    const newConfig = configs.find(
      ({ configData: { name } }) => name === newValue,
    );
    setConfig(newConfig);
  };

  const options = configs.map(({ configData: { emoji, name, version } }) => ({
    label: `${emoji} ${name} ${version}`,
    value: name,
  }));

  const value = config.configData.name;

  return (
    <Layout as="header" column bgfg={2}>
      <Select
        id="ui"
        label="UI Builder"
        options={options}
        defaultValueIndex={0}
        value={value}
        onChange={handleChange}
      />
      <Description className="muted">
        {config.configData.description}
      </Description>
    </Layout>
  );
};

export default UiSelector;
