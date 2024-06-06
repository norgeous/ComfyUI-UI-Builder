import { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputRefContext from '@/contexts/InputRefContext';
import deepEqual from '@/utils/deepEqual';
import SpeechContext from '@/contexts/SpeechContext';
import Spinner from '@/components/Spinner';
import Microphone from '@/components/header-components/Microphone';
import InputWrapper from '../InputWrapper';
import InputHeader from '../InputHeader/InputHeader';
import ErrorText from '../ErrorText';

const Textarea = styled.textarea`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid var(--input-border);
  background: var(--input-bg);
  color: var(--input-fg);
  border-radius: var(--radius);
  &:focus-visible {
    outline: 2px solid var(--input-outline);
    outline-offset: 2px;
  }
  min-height: 80px;
  line-height: 21px;
  padding: 4px 8px;
  resize: vertical;
`;

const InputTextarea = ({
  id = undefined,
  label = undefined,
  info = undefined,
  value = undefined,
  onChange = () => {},
  children = null,
}) => {
  const { unmutedId, setUnmutedId, loading, error, vosk, tail } =
    useContext(SpeechContext);

  const isMuted = unmutedId !== id;

  useEffect(() => onChange(tail), [tail]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <InputWrapper>
      <InputHeader id={id} label={label} info={info}>
        {!vosk && !loading && (
          <Microphone
            label="Enable Speech Capture"
            onClick={() => setUnmutedId(id)}
          />
        )}
        {vosk && isMuted && (
          <Microphone
            label={isMuted ? 'Mute' : 'Unmute'}
            isMuted={isMuted}
            onClick={() => setUnmutedId(isMuted ? id : undefined)}
          />
        )}
        {loading && <Spinner />}
        {children}
      </InputHeader>
      {error && <ErrorText>{error}</ErrorText>}
      <Textarea
        id={id}
        value={value}
        onChange={event => onChange(event.target.value)}
      />
    </InputWrapper>
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
