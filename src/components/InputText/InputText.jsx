import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputWrapper from '../InputWrapper/InputWrapper';
import InputHeader from '../InputHeader/InputHeader';

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
  options = [],
  value = undefined,
  onChange = () => {},
  children = null,
}) => (
  <InputWrapper>
    <InputHeader id={id} label={label} info={info}>
      {children}
    </InputHeader>
    <Input
      id={id}
      value={value}
      onChange={event => onChange(event.target.value)}
      list={options.length ? `${id}-list` : undefined}
    />
    {!!options.length && (
      <datalist id={`${id}-list`}>
        {options.map(option => (
          <option key={option} aria-label={option} value={option} />
        ))}
      </datalist>
    )}
  </InputWrapper>
);

InputText.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  /** auto completions array of strings */
  options: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.node,
};

export default InputText;
