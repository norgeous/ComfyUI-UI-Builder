import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaCircleQuestion } from 'react-icons/fa6';

const Label = styled.label`
  display: block;
  margin: 0;
  display: inline-flex;
  place-items: center;
  gap: 4px;
`;

const Input = styled.input.attrs({ type: 'checkbox' })`
  accent-color: #707;
  margin: 0;
`;

const Checkbox = ({ name, value, onChange, options, ...props }) => {
  const { label } = options.find(option => option[name] === value) || {};

  const handleChange = event => {
    const { label: _, ...newState } = options.find(
      option => option[name] === Boolean(event.currentTarget.checked),
    );
    onChange(newState);
  };

  return (
    <Label className="uk-form-label">
      <Input
        {...props} // eslint-disable-line react/jsx-props-no-spreading
        // className="uk-checkbox"
        checked={value || false}
        onChange={handleChange}
      />{' '}
      {label} <FaCircleQuestion size={16} />
    </Label>
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
