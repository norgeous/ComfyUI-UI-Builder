import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputHeader from '../InputHeader';
import ErrorText from '../ErrorText';
import deepEqual from '../../utils/deepEqual';

const Textarea = styled.textarea`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid var(--input-border);
  background: var(--input-bg);
  color: var(--input-fg);
  border-radius: var(--radius);
  margin-top: 6px;
  margin-bottom: 6px;
  &:focus {
    outline: 2px solid var(--input-outline);
    outline-offset: 2px;
  }
  min-width: 100%;
  max-width: 100%;
  height: 80px;
  min-height: 80px;
  line-height: 21px;
  padding: 4px 8px;
`;

const InputTextarea = ({
  id,
  name,
  label,
  info,
  defaultValue,
  value,
  onChange,
  error,
  ...props
}) => {
  const handleReset = () => onChange(defaultValue);

  const showReset = value !== defaultValue && !deepEqual(value, defaultValue);

  return (
    <>
      <InputHeader
        id={id}
        label={label}
        info={info}
        showReset={showReset}
        handleReset={handleReset}
      />
      <Textarea
        {...props} // eslint-disable-line react/jsx-props-no-spreading
        id={id}
        value={value}
        onChange={event => onChange(event.target.value)}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </>
  );
};

InputTextarea.defaultProps = {
  name: undefined,
  label: undefined,
  info: undefined,
  onChange: () => {},
};

InputTextarea.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputTextarea;
