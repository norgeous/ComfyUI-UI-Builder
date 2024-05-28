import { useState } from 'react';
import PropTypes from 'prop-types';
import useVosk from '@/hooks/useVosk2';
import SpeechContext from './SpeechContext';

const SpeechProvider = ({ children = null }) => {
  const [enabled, setEnabled] = useState(false);
  const value = useVosk({ enabled });
  return (
    <SpeechContext.Provider value={{ ...value, setEnabled }}>
      {children}
    </SpeechContext.Provider>
  );
};

SpeechProvider.propTypes = {
  children: PropTypes.node,
};

export default SpeechProvider;
