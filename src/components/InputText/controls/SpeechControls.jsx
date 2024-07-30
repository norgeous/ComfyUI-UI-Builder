import { useContext, useEffect } from 'react';
import InputRefContext from '@/contexts/InputRefContext';
import SpeechContext from '@/contexts/SpeechContext';
import ErrorText from '@/components/ErrorText';
import { SpinnerIcon, MicMutedIcon, MicUnmutedIcon } from '@/components/Icons';
import HeaderButton from '@/components/HeaderButton';
import InputContext from '@/contexts/InputContext';

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
    lastSpeechEvent,
  } = useContext(SpeechContext);

  const isTarget = targetId === id;
  const isUnmuted = unmutedId === id;

  useEffect(() => {
    if (isTarget) {
      const { selectionStart, selectionEnd } = ref.current;
      const { correctionCount, recentWords } = lastSpeechEvent;
      const toAppend = ` ${recentWords}`;
      const valueArray = value.split(' ');
      const correctedValue = valueArray
        .slice(0, -correctionCount || valueArray.length)
        .join(' ');
      const newValue = splice(
        selectionStart,
        selectionEnd,
        correctedValue,
        toAppend,
      ).trim();
      onChange(newValue);
      setTimeout(() => {
        ref.current.selectionStart = selectionEnd + toAppend.length;
        ref.current.selectionEnd = selectionEnd + toAppend.length;
      }, 0);
    }
  }, [lastSpeechEvent]); // eslint-disable-line react-hooks/exhaustive-deps

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

export default SpeechControls;
