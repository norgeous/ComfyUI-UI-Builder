import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputHeader from '../InputHeader';
import ErrorText from '../ErrorText';

const Select = styled.select`
  display: block;
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

const InputSelect = ({
  id,
  label,
  info,
  defaultOptionIndex,
  options,
  value,
  onChange,
  error,
}) => {
  const ref = useRef();
  const [valueIndex, setValueIndex] = useState(value || defaultOptionIndex);

  const handleChange = newValue => {
    const index = Number(newValue);
    setValueIndex(index);
    const { value: optionValue } = options[index];
    onChange({ index, value: optionValue });
  };

  const handleReset = () => {
    ref.current.focus();
    setValueIndex(defaultOptionIndex);
    handleChange(defaultOptionIndex);
  };

  const showReset = valueIndex !== defaultOptionIndex;

  return (
    <>
      <InputHeader
        id={id}
        label={label}
        info={info}
        showReset={showReset}
        handleReset={handleReset}
      />
      <Select
        id={id}
        ref={ref}
        value={value || valueIndex}
        onChange={event => handleChange(event.target.value)}
      >
        {options.map(({ label: optionLabel }, index) => (
          <option key={optionLabel} value={String(index)}>
            {optionLabel}
          </option>
        ))}
      </Select>
      {error && <ErrorText>{error}</ErrorText>}
    </>
  );
};

InputSelect.defaultProps = {
  id: undefined,
  defaultOptionIndex: 0,
  label: undefined,
  info: undefined,
  options: [],
  value: undefined,
  onChange: () => {},
  error: undefined,
};

InputSelect.propTypes = {
  id: PropTypes.string,
  defaultOptionIndex: PropTypes.number,
  label: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.shape({}),
    }),
  ),
  value: PropTypes.number,
  onChange: PropTypes.func,
};

export default InputSelect;
