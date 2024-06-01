import styled from 'styled-components';

const InputHeaderButton = styled.button`
  cursor: pointer;
  display: block;
  border: none;
  color: inherit;
  background: transparent;
  font-size: 0.75rem; // 12px
  padding: 0;
  opacity: 0.5; // TODO: dont use opacity it affects the outline opacity also
  &:focus-visible {
    outline: 2px solid var(--input-outline);
    outline-offset: 2px;
    border-radius: var(--radius);
  }
`;

export default InputHeaderButton;
