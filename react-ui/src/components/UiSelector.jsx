import useAppContext from '../hooks/useAppContext';
import styled from 'styled-components';

const Heading = styled.h4`
  padding: 10px;
`;

const UiSelector = () => {
  const { config } = useAppContext();

  return (
    <Heading className="uk-text-center uk-margin-remove-vertical text-light">
      {config.configData.emoji}
      {' '}
      {config.configData.name}
      {' '}
      <small><sup>{config.configData.version}</sup></small>
    </Heading>
  )
};

export default UiSelector;
