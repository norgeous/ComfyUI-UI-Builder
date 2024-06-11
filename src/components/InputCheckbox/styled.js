import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  width: 100%;
  margin: 0;
  display: inline-flex;
  place-items: center;
  gap: 4px;
  padding: 9px 0;
  cursor: pointer;
  font-size: 0.875rem;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  display: block;
  accent-color: var(--input-outline);
  margin: 0;
`;
