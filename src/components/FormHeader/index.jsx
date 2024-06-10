import { useContext } from 'react';
import styled from 'styled-components';
import ConfigsContext from '@/contexts/ConfigsContext';
import Select from '@/components/InputSelect';

const Header = styled.header`
  background: var(--surface-bg);
`;

const Description = styled.header`
  padding: 0 8px 8px;
  font-size: 12px;
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
    value: name,
  }));

  const value = config.configData.name;

  return (
    <Header>
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
    </Header>
  );
};

export default UiSelector;
