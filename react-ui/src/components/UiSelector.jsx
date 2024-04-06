import useAppContext from '../hooks/useAppContext';

const UiSelector = () => {
  const { config } = useAppContext();

  return (
    <h4 className="uk-text-center uk-margin-remove-vertical text-light">
      {config.configData.emoji}
      {' '}
      {config.configData.name}
      {' '}
      <small><sup>{config.configData.version}</sup></small>
    </h4>
  )
};

export default UiSelector;
