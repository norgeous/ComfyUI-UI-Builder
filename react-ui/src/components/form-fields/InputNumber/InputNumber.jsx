import { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputWrapper from '../InputWrapper';
import InputHeader from '../InputHeader/InputHeader';
import ErrorText from '../ErrorText';

const Input = styled.input.attrs({ type: 'number' })`
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

const InputNumber = ({
  id = undefined,
  defaultValue = undefined,
  label = undefined,
  info = undefined,
  value = undefined,
  onChange = () => {},
  error = undefined,
  isLoading = false,
  headerChildren = null,
  ...props
}) => {
  const ref = useRef();

  const handleReset = () => {
    ref.current.focus();
    onChange(defaultValue);
  };

  const showReset = value !== defaultValue;

  return (
    <InputWrapper>
      <InputHeader
        id={id}
        label={label}
        info={info}
        isLoading={isLoading}
        showReset={showReset}
        handleReset={handleReset}
      >
        {headerChildren}
      </InputHeader>
      <Input
        {...props} // eslint-disable-line react/jsx-props-no-spreading
        ref={ref}
        id={id}
        value={value}
        onChange={event => onChange(Number(event.target.value))}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  );
};

InputNumber.propTypes = {
  id: PropTypes.string,
  defaultValue: PropTypes.number,
  label: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
  isLoading: PropTypes.bool,
  headerChildren: PropTypes.node,
};
export default InputNumber;
