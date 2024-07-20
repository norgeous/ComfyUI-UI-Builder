import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import InputRefContext from '@/contexts/InputRefContext';
import SpeechContext from '@/contexts/SpeechContext';
import ErrorText from '@/components/ErrorText';
import {
  SpinnerIcon,
  MicMutedIcon,
  MicUnmutedIcon,
  LimitIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from '@/components/Icons';
import HeaderButton from '@/components/HeaderButton';
import InputContext from '@/contexts/InputContext';

const WeightControls = () => (
  <>
    <HeaderButton label="Prompt weight up (CTRL + UP)" onClick={() => {}}>
      <ArrowUpIcon />
    </HeaderButton>
    <HeaderButton label="Prompt weight down (CTRL + DOWN)" onClick={() => {}}>
      <ArrowDownIcon />
    </HeaderButton>
  </>
);

const splice = (a, z, s1, s2) => `${s1.slice(0, a)}${s2}${s1.slice(z)}`;

const SpeechControls = () => {
  const { id, value, onChange } = useContext(InputContext);
  const ref = useContext(InputRefContext);

  const {
    targetId,
    unmutedId,
    setUnmutedId,
    loading,
    error,
    vosk,
    partial,
    // tail,
  } = useContext(SpeechContext);

  const isTarget = targetId === id;
  const isUnmuted = unmutedId === id;

  useEffect(() => {
    if (isTarget) {
      console.log(partial);
      const [lastWord] = partial.split(' ').toReversed();
      const start = ref.current.selectionStart;
      const end = ref.current.selectionEnd;
      const toAppend = ` ${lastWord}`;
      const newValue = splice(start, end, value, toAppend).trim();
      onChange(newValue);
      setTimeout(() => {
        ref.current.selectionStart = end + toAppend.length;
        ref.current.selectionEnd = end + toAppend.length;
      }, 0);
    }
  }, [partial]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {!vosk && !loading && (
        <HeaderButton
          label="Enable Speech Capture"
          onClick={() => setUnmutedId(id)}
        >
          <MicUnmutedIcon />
        </HeaderButton>
      )}
      {!vosk && loading && isTarget && <SpinnerIcon />}
      {!vosk && loading && !isTarget && (
        <HeaderButton label="loading elsewhere">
          <MicUnmutedIcon />
        </HeaderButton>
      )}
      {vosk && (
        <HeaderButton
          label={isUnmuted ? 'Capturing...' : 'Muted'}
          value={isUnmuted}
          onClick={() => setUnmutedId(isUnmuted ? undefined : id)}
        >
          {isUnmuted ? <MicUnmutedIcon /> : <MicMutedIcon />}
        </HeaderButton>
      )}
      {error && isTarget && <ErrorText>{error}</ErrorText>}
    </>
  );
};

const LimitControls = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <HeaderButton
      label="Limit text length to 20 words"
      onClick={() => setEnabled(!enabled)}
      value={enabled}
    >
      <LimitIcon />
    </HeaderButton>
  );
};

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
