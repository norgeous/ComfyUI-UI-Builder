import styled from 'styled-components';
import useAppContext from '../hooks/useAppContext';
import Select from './form-fields/Select';

const Header = styled.header`
  padding: 10px;
`;

const UiSelector = () => {
  const {
    config,
    configs,
    setConfig,
  } = useAppContext();

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
        options={options}
        name="ui"
        value={config.configData.name}
        onChange={handleChange}
      />
    </Header>
  );
};

export default UiSelector;
