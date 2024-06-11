import styled from 'styled-components';

export const Input = styled.input.attrs({ type: 'file' })`
  display: none;
`;

export const Img = styled.img`
  width: 200px;
  max-width: 100%;
  margin: 0 auto;
  display: block;
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  border-radius: var(--radius);
  background: var(--input-bg);
  color: var(--input-fg);
  padding: 8px;
  cursor: pointer;
`;
