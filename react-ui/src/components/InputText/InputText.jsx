import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputHeader from '../InputHeader';
import ErrorText from '../ErrorText';

const Input = styled.input`
  display: block;
  box-sizing: border-box;
  margin-top: 4px;
  width: 100%;
  border: 1px solid var(--input-border);
  background: var(--input-bg);
  color: var(--input-fg);
  padding: 8px 4px;
  border-radius: var(--radius);
  &:focus {
    outline: 2px solid var(--input-outline);
    outline-offset: 2px;
  }
`;

const InputText = ({
  id,
  label,
  info,
  defaultValue,
  options,
  value,
  onChange,
  error,
}) => {
  const ref = useRef();
  const [iValue, setiValue] = useState(value || defaultValue);

  const handleChange = newValue => {
    setiValue(newValue);
    onChange({ [id]: newValue });
  };

  const handleReset = () => {
    ref.current.focus();
    setiValue(defaultValue);
    handleChange(defaultValue);
  };

  const showReset = value || iValue !== defaultValue;

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
        value={value || iValue}
        onChange={event => handleChange(event.target.value)}
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
InputText.defaultProps = {
  id: undefined,
  defaultValue: undefined,
  label: undefined,
  info: undefined,
  options: [],
  value: undefined,
  onChange: () => {},
  error: undefined,
};

InputText.propTypes = {
  id: PropTypes.string,
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.number,
  onChange: PropTypes.func,
};
export default InputText;
