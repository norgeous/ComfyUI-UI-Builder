import PropTypes from 'prop-types';
import WeightControls from './controls/WeightControls';
import SpeechControls from './controls/SpeechControls';
import LimitControls from './controls/LimitControls';

const Controls = ({ controlOptions = [] }) => (
  <>
    {controlOptions.includes('weight') && <WeightControls />}
    {controlOptions.includes('speech') && <SpeechControls />}
    {controlOptions.includes('limit') && <LimitControls />}
  </>
);

Controls.propTypes = {
  controlOptions: PropTypes.arrayOf(
    PropTypes.oneOf(['weight', 'speech', 'limit']),
  ),
};

export default Controls;
