import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputHeader from '../InputHeader';
import ErrorText from '../ErrorText';
import deepEqual from '../../utils/deepEqual';

const Label = styled.label`
  display: block;
  width: 100%;
  margin: 0;
  display: inline-flex;
  place-items: center;
  gap: 4px;
  margin-bottom: 6px;
  padding: 9px 0;
  cursor: pointer;
  font-size: 0.875rem;
`;

const Input = styled.input.attrs({ type: 'checkbox' })`
  accent-color: var(--input-outline);
  margin: 0;
`;

const Checkbox = ({
  label = undefined,
  info = undefined,
  isLoading = false,
  defaultValueIndex = undefined,
  value = undefined,
  onChange = () => {},
  options = [],
  error = undefined,
  ...props
}) => {
  const index = options.findIndex(
    option => option.value === value || deepEqual(option.value, value),
  );

  const { label: checkboxLabel } = options[index];

  const handleReset = () => onChange(options[defaultValueIndex].value);

  const showReset = index !== defaultValueIndex;

  return (
    <>
      <InputHeader
        label={label}
        info={info}
        isLoading={isLoading}
        showReset={showReset}
        handleReset={handleReset}
      />
      <Label>
        <Input
          {...props} // eslint-disable-line react/jsx-props-no-spreading
          checked={Boolean(index)}
          onChange={event =>
            onChange(options[Number(event.currentTarget.checked)].value)
          }
        />{' '}
        {checkboxLabel}
      </Label>
      {error && <ErrorText>{error}</ErrorText>}
    </>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  info: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    }),
  ),
  defaultValueIndex: PropTypes.number,
  value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  onChange: PropTypes.func,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default Checkbox;
