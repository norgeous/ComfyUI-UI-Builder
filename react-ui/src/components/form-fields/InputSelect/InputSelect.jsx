import { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import deepEqual from '@/utils/deepEqual';
import InputWrapper from '../InputWrapper';
import InputHeader from '../InputHeader/InputHeader';
import ErrorText from '../ErrorText';

const Select = styled.select`
  display: block;
  width: 100%;
  min-width: 100%;
  box-sizing: border-box;
  border: 1px solid var(--input-border);
  border-radius: var(--radius);
  background: var(--input-bg);
  color: var(--input-fg);
  padding: 8px 4px;
  &:focus-visible {
    outline: 2px solid var(--input-outline);
    outline-offset: 2px;
  }
`;

const InputSelect = ({
  id = undefined,
  label = undefined,
  info = undefined,
  isLoading = false,
  options = [],
  defaultValueIndex = undefined,
  value = undefined,
  onChange = () => {},
  subComponents = [],
  error = undefined,
}) => {
  const ref = useRef();
  const index = options.findIndex(
    option => option.value === value || deepEqual(option.value, value),
  );

  const handleReset = () => {
    ref.current.focus();
    onChange(options[defaultValueIndex].value);
  };

  const showReset = index !== defaultValueIndex;

  return (
    <InputWrapper>
      <InputHeader
        id={id}
        label={label}
        info={info}
        isLoading={isLoading}
        showReset={showReset}
        handleReset={handleReset}
        subComponents={subComponents}
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
    </InputWrapper>
  );
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
  defaultValueIndex: PropTypes.number,
  value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  onChange: PropTypes.func,
  subComponents: PropTypes.array,
};

export default InputSelect;
