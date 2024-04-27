import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputHeader from '../InputHeader';
import ErrorText from '../ErrorText';

const Label = styled.label`
  display: block;
  margin: 0;
  display: inline-flex;
  place-items: center;
  gap: 4px;
  margin-bottom: 6px;
`;

const Input = styled.input.attrs({ type: 'checkbox' })`
  accent-color: var(--input-outline);
  margin: 0;
`;

const Checkbox = ({
  id,
  info,
  isLoading,
  defaultOptionIndex,
  value,
  onChange,
  options,
  error,
  ...props
}) => {
  const defaultValue = Boolean(defaultOptionIndex);
  const index =
    typeof value === 'boolean' ? Number(value) : Number(defaultValue);
  const label = options[index];
  const handleChange = newValue => onChange(newValue);

  const handleReset = () => {
    handleChange(defaultValue);
  };

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
          onChange={event => handleChange(event.currentTarget.checked)}
        />{' '}
        {label}
      </Label>
      {error && <ErrorText>{error}</ErrorText>}
    </>
  );
};

Checkbox.defaultProps = {
  name: undefined,
  options: [],
  value: undefined,
  onChange: () => {},
};

Checkbox.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ),
  value: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Checkbox;
