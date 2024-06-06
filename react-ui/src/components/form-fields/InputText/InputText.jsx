import PropTypes from 'prop-types';
import styled from 'styled-components';
import Reset from '@/components/header-components/Reset';
import InputWrapper from '../InputWrapper';
import InputHeader from '../InputHeader/InputHeader';
import ErrorText from '../ErrorText';

const Input = styled.input.attrs({ type: 'text' })`
  display: block;
  width: 100%;
  min-width: 100%;
  box-sizing: border-box;
  border: 1px solid var(--input-border);
  background: var(--input-bg);
  color: var(--input-fg);
  border-radius: var(--radius);
  padding: 8px 4px;
  &:focus-visible {
    outline: 2px solid var(--input-outline);
    outline-offset: 2px;
  }
`;

const InputText = ({
  id = undefined,
  label = undefined,
  info = undefined,
  defaultValue = undefined,
  options = [],
  value = undefined,
  onChange = () => {},
  error = undefined,
  children = null,
}) => {
  const showReset = value !== defaultValue;

  return (
    <InputWrapper>
      <InputHeader id={id} label={label} info={info}>
        {children}
        {showReset && <Reset onClick={() => onChange(defaultValue)} />}
      </InputHeader>
      <Input
        id={id}
        value={value}
        onChange={event => onChange(event.target.value)}
        list={options.length ? `${id}-list` : undefined}
      />
      {options.length && (
        <datalist id={`${id}-list`}>
          {options.map(option => (
            <option key={option} aria-label={option} value={option} />
          ))}
        </datalist>
      )}
      {error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  );
};

InputText.propTypes = {
  id: PropTypes.string,
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.string,
  /** auto completions array of strings */
  options: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.node,
};

export default InputText;
