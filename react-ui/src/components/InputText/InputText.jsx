import { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputHeader from '../InputHeader';
import ErrorText from '../ErrorText';

const Input = styled.input.attrs({ type: 'text' })`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid var(--input-border);
  background: var(--input-bg);
  color: var(--input-fg);
  border-radius: var(--radius);
  padding: 8px 4px;
  margin-top: 6px;
  margin-bottom: 6px;
  &:focus {
    outline: 2px solid var(--input-outline);
    outline-offset: 2px;
  }
`;

const InputText = ({
  id = undefined,
  label = undefined,
  info = undefined,
  defaultValue = undefined,
  options = [],
  value = undefined,
  onChange = () => {},
  error = undefined,
}) => {
  const ref = useRef();

  const handleReset = () => {
    ref.current.focus();
    onChange(defaultValue);
  };

  const showReset = value !== defaultValue;

  return (
    <>
      <InputHeader
        id={id}
        label={label}
        info={info}
        showReset={showReset}
        handleReset={handleReset}
      />
      <Input
        ref={ref}
        id={id}
        value={value}
        onChange={event => onChange(event.target.value)}
        list={`${id}-list`}
      />
      {options && (
        <datalist id={`${id}-list`}>
          {options.map(option => (
            <option key={option} aria-label={option} value={option} />
          ))}
        </datalist>
      )}
      {error && <ErrorText>{error}</ErrorText>}
    </>
  );
};

InputText.propTypes = {
  id: PropTypes.string,
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.string,
  /** auto completions array of strings */
  options: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default InputText;
