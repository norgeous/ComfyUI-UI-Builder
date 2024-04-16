import { useContext } from 'react';
import styled from 'styled-components';
import { ConfigsContext } from '../contexts/ConfigsContext';
import Select from './form-fields/Select';

const Header = styled.header`
  padding: 10px;
`;

const UiSelector = () => {
  const { config, configs, setConfig } = useContext(ConfigsContext);

  const handleChange = ({ ui }) => {
    const newConfig = configs.find(({ configData: { name } }) => name === ui);
    setConfig(newConfig);
  };

  const options = configs.map(({ configData: { emoji, name, version } }) => ({
    label: `${emoji} ${name} ${version}`,
    ui: name,
  }));

  return (
    <Header className="uk-text-center uk-margin-remove-vertical text-light">
      <Select
        name="ui"
        options={options}
        value={config.configData?.name}
        onChange={handleChange}
      />
    </Header>
  );
};

export default UiSelector;
