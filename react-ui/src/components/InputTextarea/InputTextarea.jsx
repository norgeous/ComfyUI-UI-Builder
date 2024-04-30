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
  id = undefined,
  label = undefined,
  info = undefined,
  defaultValue = undefined,
  value = undefined,
  onChange = () => {},
  error = undefined,
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

InputTextarea.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  onChange: PropTypes.func,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  defaultValue: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
};

export default InputTextarea;
