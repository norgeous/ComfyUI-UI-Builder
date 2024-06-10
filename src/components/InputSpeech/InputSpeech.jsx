import { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputRefContext from '@/contexts/InputRefContext';
import SpeechContext from '@/contexts/SpeechContext';
import HeaderButton from '@/components/HeaderButton/HeaderButton';
import {
  SpinnerIcon,
  MicMutedIcon,
  MicUnmutedIcon,
} from '@/components/Icons/Icons';
import InputHeader from '@/components/InputHeader/InputHeader';
import ErrorText from '@/components/ErrorText/ErrorText';
import InputWrapper from '@/components/InputWrapper/InputWrapper';

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
  const ref = useContext(InputRefContext);

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
            label={isUnmuted ? 'Unmuted' : 'Muted'}
            onClick={() => setUnmutedId(isUnmuted ? undefined : id)}
          >
            {isUnmuted ? <MicUnmutedIcon /> : <MicMutedIcon />}
          </HeaderButton>
        )}
        {children}
      </InputHeader>
      {error && isTarget && <ErrorText>{error}</ErrorText>}
      <Textarea
        ref={ref}
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
