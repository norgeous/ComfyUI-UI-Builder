import { useState } from 'react';
import PropTypes from 'prop-types';
import useVosk from '@/hooks/useVosk';
import SpeechContext from './SpeechContext';

const SpeechProvider = ({ children = null }) => {
  const [enabled, setEnabled] = useState(false);
  const value = useVosk({ enabled, setEnabled });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <SpeechContext.Provider value={{ ...value, setEnabled }}>
      {children}
    </SpeechContext.Provider>
  );
};

SpeechProvider.propTypes = {
  children: PropTypes.node,
};

export default SpeechProvider;
