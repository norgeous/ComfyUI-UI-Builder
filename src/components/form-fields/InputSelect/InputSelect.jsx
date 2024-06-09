import { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputRefContext from '@/contexts/InputRefContext';
import deepEqual from '@/utils/deepEqual';
import InputWrapper from '../InputWrapper/InputWrapper';
import InputHeader from '../../InputHeader/InputHeader';

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
  options = [],
  value = undefined,
  onChange = () => {},
  children = null,
}) => {
  const ref = useContext(InputRefContext);

  const index = options.findIndex(
    option => option.value === value || deepEqual(option.value, value),
  );

  return (
    <InputWrapper>
      <InputHeader id={id} label={label} info={info}>
        {children}
      </InputHeader>
      <Select
        ref={ref}
        id={id}
        value={index}
        onChange={event => onChange(options[event.target.value].value)}
      >
        {options.map(({ label: optionLabel }, i) => (
          <option key={optionLabel} value={String(i)}>
            {optionLabel}
          </option>
        ))}
      </Select>
    </InputWrapper>
  );
};

InputSelect.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    }),
  ),
  value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  onChange: PropTypes.func,
  children: PropTypes.node,
};

export default InputSelect;
