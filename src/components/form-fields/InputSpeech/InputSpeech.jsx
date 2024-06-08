import { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa6';
import SpeechContext from '@/contexts/SpeechContext';
import Spinner from '@/components/Spinner/Spinner';
import HeaderButton from '@/components/header-components/HeaderButton';
import InputWrapper from '../InputWrapper';
import InputHeader from '../InputHeader/InputHeader';
import ErrorText from '../ErrorText';

const MicOpen = styled(FaMicrophone)`
  display: block;
  font-size: 12px;
`;

const MicMuted = styled(FaMicrophoneSlash)`
  display: block;
  font-size: 12px;
`;

const Textarea = styled.textarea`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid var(--input-border);
  background: var(--input-bg);
  color: var(--input-fg);
  border-radius: var(--radius);
  min-height: 80px;
  line-height: 21px;
  padding: 4px 8px;
  resize: vertical;
  &:focus-visible {
    outline: 2px solid var(--input-outline);
    outline-offset: 2px;
  }
`;

const InputTextarea = ({
  id = undefined,
  label = undefined,
  info = undefined,
  value = undefined,
  onChange = () => {},
  children = null,
}) => {
  const { targetId, unmutedId, setUnmutedId, loading, error, vosk, tail } =
    useContext(SpeechContext);

  const isTarget = targetId === id;
  const isUnmuted = unmutedId === id;

  useEffect(() => {
    if (isTarget) onChange(tail);
  }, [tail]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <InputWrapper>
      <InputHeader id={id} label={label} info={info}>
        {!vosk && !loading && (
          <HeaderButton
            label="Enable Speech Capture"
            onClick={() => setUnmutedId(id)}
          >
            <MicOpen />
          </HeaderButton>
        )}
        {!vosk && loading && isTarget && <Spinner />}
        {!vosk && loading && !isTarget && (
          <HeaderButton label="loading elsewhere">
            <MicOpen />
          </HeaderButton>
        )}
        {vosk && (
          <HeaderButton
            label={isUnmuted ? 'Unmuted' : 'Muted'}
            onClick={() => setUnmutedId(isUnmuted ? undefined : id)}
          >
            {isUnmuted ? <MicOpen /> : <MicMuted />}
          </HeaderButton>
        )}
        {children}
      </InputHeader>
      {error && isTarget && <ErrorText>{error}</ErrorText>}
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
