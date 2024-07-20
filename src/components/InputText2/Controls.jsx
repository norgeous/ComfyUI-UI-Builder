import PropTypes from 'prop-types';
import WeightControls from './controls/WeightControls';
import SpeechControls from './controls/SpeechControls';
import LimitControls from './controls/LimitControls';

const Controls = ({ controlOptions = [] }) => {
  const showWeightControls = controlOptions.includes('weight');
  const showSpeechControls = controlOptions.includes('speech');
  const showLimitControls = controlOptions.includes('limit');

  return (
    <>
      {showWeightControls && <WeightControls />}
      {showSpeechControls && <SpeechControls />}
      {showLimitControls && <LimitControls />}
    </>
  );
};

Controls.propTypes = {
  controlOptions: PropTypes.arrayOf(
    PropTypes.oneOf(['weight', 'speech', 'limit']),
  ),
};

export default Controls;
