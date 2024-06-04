import PropTypes from 'prop-types';
import styled from 'styled-components';
import deepEqual from '@/utils/deepEqual';
import Checkbox from '@/components/Checkbox/Checkbox';
import InputWrapper from '../InputWrapper';
import InputHeader from '../InputHeader/InputHeader';
import ErrorText from '../ErrorText';

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
  label = undefined,
  isLoading = false,
  value = undefined,
  onChange = () => {},
  options = [],
  error = undefined,
  subComponents = [],
  ...props
}) => {
  const index = options.findIndex(
    option => option.value === value || deepEqual(option.value, value),
  );

  const { label: checkboxLabel } = options[index];

  return (
    <InputWrapper>
      <InputHeader
        label={label}
        isLoading={isLoading}
        subComponents={subComponents}
      />
      <Label>
        <Checkbox
          {...props} // eslint-disable-line react/jsx-props-no-spreading
          checked={Boolean(index)}
          onChange={event =>
            onChange(options[Number(event.currentTarget.checked)].value)
          }
        />{' '}
        {checkboxLabel}
      </Label>
      {error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  );
};

InputCheckbox.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    }),
  ),
  value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  onChange: PropTypes.func,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  subComponents: PropTypes.array,
};

export default InputCheckbox;
