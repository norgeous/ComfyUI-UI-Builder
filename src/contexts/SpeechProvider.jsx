import PropTypes from 'prop-types';
import useVosk from '@/hooks/useVosk';
import SpeechContext from './SpeechContext';

const SpeechProvider = ({ children = null }) => (
  <SpeechContext.Provider value={useVosk()}>{children}</SpeechContext.Provider>
);

SpeechProvider.propTypes = {
  children: PropTypes.node,
};

export default SpeechProvider;
