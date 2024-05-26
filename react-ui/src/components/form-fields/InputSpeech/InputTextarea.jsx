import PropTypes from 'prop-types';
import styled from 'styled-components';
import deepEqual from '@/utils/deepEqual';
import useSpeech from '@/hooks/useSpeech';
import { useEffect } from 'react';
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
  &:focus {
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
  defaultValue = undefined,
  value = undefined,
  onChange = () => {},
  error = undefined,
  ...props
}) => {
  const { loading, tail } = useSpeech();
  const handleReset = () => onChange(defaultValue);

  const showReset = value !== defaultValue && !deepEqual(value, defaultValue);

  useEffect(() => onChange(tail), [tail]);

  return (
    <InputWrapper>
      <InputHeader
        id={id}
        label={label}
        info={info}
        showReset={showReset}
        handleReset={handleReset}
        isLoading={loading}
      />
      <Textarea
        {...props} // eslint-disable-line react/jsx-props-no-spreading
        id={id}
        value={value}
        onChange={event => onChange(event.target.value)}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  );
};

InputTextarea.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  onChange: PropTypes.func,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  defaultValue: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
};

export default InputTextarea;
