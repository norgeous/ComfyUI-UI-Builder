import { useContext } from 'react';
import styled from 'styled-components';
import ConfigsContext from '@/contexts/ConfigsContext';
import Select from './form-fields/InputSelect/InputSelect';

const Header = styled.header`
  padding: 10px;
`;

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
    ui: name,
  }));

  const value = config.configData.name;

  return (
    <Header>
      <Select
        options={options}
        defaultValueIndex={0}
        value={value}
        onChange={handleChange}
      />
    </Header>
  );
};

export default UiSelector;
