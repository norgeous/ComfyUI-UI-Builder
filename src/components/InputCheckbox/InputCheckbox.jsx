import PropTypes from 'prop-types';
import styled from 'styled-components';
import deepEqual from '@/utils/deepEqual';
import Checkbox from '@/components/Checkbox/Checkbox';
import InputWrapper from '../InputWrapper/InputWrapper';
import InputHeader from '../InputHeader/InputHeader';

const Label = styled.label`
  display: block;
  width: 100%;
  margin: 0;
  display: inline-flex;
  place-items: center;
  gap: 4px;
  padding: 9px 0;
  cursor: pointer;
  font-size: 0.875rem;
`;

const InputCheckbox = ({
  id = undefined,
  label = undefined,
  info = undefined,
  value = undefined,
  onChange = () => {},
  options = [],
  children = null,
}) => {
  const index = options.findIndex(
    option => option.value === value || deepEqual(option.value, value),
  );

  const { label: checkboxLabel } = options[index];

  return (
    <InputWrapper>
      <InputHeader id={id} label={label} info={info}>
        {children}
      </InputHeader>
      <Label>
        <Checkbox
          checked={Boolean(index)}
          onChange={event =>
            onChange(options[Number(event.currentTarget.checked)].value)
          }
        />{' '}
        {checkboxLabel}
      </Label>
    </InputWrapper>
  );
};

InputCheckbox.propTypes = {
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

export default InputCheckbox;
