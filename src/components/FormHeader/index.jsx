import { useContext } from 'react';
import ConfigsContext from '@/contexts/ConfigsContext';
import Layout from '@/components/Layout';
import Select from '@/components/InputSelect';
import ResetButton from '@/components/ResetButton';
import { Description } from './styles';

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

  const handleReset = () => {
    handleChange('Basic SDXL');
  };

  const showReset = value !== 'Basic SDXL';

  return (
    <Layout as="header" column bgfg={2}>
      <Select
        id="ui"
        label="UI Builder"
        options={options}
        defaultValueIndex={0}
        value={value}
        onChange={handleChange}
      >
        {showReset && <ResetButton onClick={handleReset} />}
      </Select>
      <Description className="muted">
        {config.configData.description}
      </Description>
    </Layout>
  );
};

export default UiSelector;
