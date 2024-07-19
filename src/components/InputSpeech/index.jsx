import { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import InputRefContext from '@/contexts/InputRefContext';
import SpeechContext from '@/contexts/SpeechContext';
import Layout from '@/components/Layout';
import InputHeader from '@/components/InputHeader';
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
import { Textarea } from './styles';

const splice = (a, z, s1, s2) => `${s1.slice(0, a)}${s2}${s1.slice(z)}`;

const InputTextarea = ({
  id = undefined,
  label = undefined,
  info = undefined,
  value = undefined,
  onChange = () => {},
  children = null,
}) => {
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
    <Layout pad column gap="sm">
      <InputHeader id={id} label={label} info={info}>
        <HeaderButton label="Prompt weight up (CTRL+UP)" onClick={() => {}}>
          <ArrowUpIcon />
        </HeaderButton>
        <HeaderButton label="Prompt weight down (CTRL+DOWN)" onClick={() => {}}>
          <ArrowDownIcon />
        </HeaderButton>

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

        <HeaderButton
          label="Limit text length to 20 words"
          onClick={() => {}}
          value={false}
        >
          <LimitIcon />
        </HeaderButton>

        {children}
      </InputHeader>
      {error && isTarget && <ErrorText>{error}</ErrorText>}
      <Textarea
        ref={ref}
        id={id}
        value={value}
        onChange={event => onChange(event.target.value)}
      />
    </Layout>
  );
};

InputTextarea.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  children: PropTypes.node,
};

export default InputTextarea;
