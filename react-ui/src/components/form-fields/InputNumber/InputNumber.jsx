import { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputRefContext from '@/contexts/InputRefContext';
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
  label = undefined,
  value = undefined,
  onChange = () => {},
  error = undefined,
  isLoading = false,
  subComponents = [],
  ...props
}) => {
  const ref = useContext(InputRefContext);

  return (
    <InputWrapper>
      <InputHeader
        id={id}
        label={label}
        isLoading={isLoading}
        subComponents={subComponents}
      />
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
  label: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
  isLoading: PropTypes.bool,
  subComponents: PropTypes.array,
};

export default InputNumber;
