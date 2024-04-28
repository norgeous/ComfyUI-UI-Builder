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
  info = undefined,
  isLoading = false,
  defaultValue = undefined,
  value = undefined,
  onChange = () => {},
  options = [],
  error = undefined,
  ...props
}) => {
  // const index = Number(value) ?? Number(defaultValue);

  const maybe = options.findIndex(
    option => option.value === value || deepEqual(option.value, value),
  );

  const index = maybe !== -1 ? maybe : 0;

  // console.log({ value, index, options });

  const { label } = options[index];

  const handleReset = () => onChange(defaultValue);

  const showReset = Boolean(index) !== defaultValue;

  return (
    <>
      <InputHeader
        info={info}
        isLoading={isLoading}
        showReset={showReset}
        handleReset={handleReset}
      />
      <Label>
        <Input
          {...props} // eslint-disable-line react/jsx-props-no-spreading
          checked={Boolean(index)}
          onChange={event => onChange(event.currentTarget.checked)}
        />{' '}
        {label}
      </Label>
      {error && <ErrorText>{error}</ErrorText>}
    </>
  );
};

Checkbox.propTypes = {
  info: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    }),
  ),
  defaultValue: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  onChange: PropTypes.func,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default Checkbox;
