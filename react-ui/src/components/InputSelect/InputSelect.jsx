import { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputHeader from '../InputHeader';
import ErrorText from '../ErrorText';
import deepEqual from '../../utils/deepEqual';

const Select = styled.select`
  display: block;
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

const InputSelect = ({
  id,
  label,
  info,
  isLoading,
  defaultValue,
  options,
  value,
  onChange,
  error,
}) => {
  const ref = useRef();
  const index = options.findIndex(
    option => option.value === value || deepEqual(option.value, value),
  );

  const handleReset = () => {
    ref.current.focus();
    onChange(defaultValue);
  };

  const showReset = value !== defaultValue && !deepEqual(value, defaultValue);

  return (
    <>
      <InputHeader
        id={id}
        label={label}
        info={info}
        isLoading={isLoading}
        showReset={showReset}
        handleReset={handleReset}
      />
      <Select
        id={id}
        ref={ref}
        value={index}
        onChange={event => onChange(options[event.target.value].value)}
      >
        {options.map(({ label: optionLabel }, i) => (
          <option key={optionLabel} value={String(i)}>
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
  label: undefined,
  info: undefined,
  isLoading: false,
  options: [],
  defaultValue: undefined,
  value: undefined,
  onChange: () => {},
  error: undefined,
};

InputSelect.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    }),
  ),
  defaultValue: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  onChange: PropTypes.func,
};

export default InputSelect;
