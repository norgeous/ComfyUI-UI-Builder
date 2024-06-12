import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Textarea = styled.textarea`
  background: var(--bg2);
  color: var(--fg2);
  border: 1px solid var(--bg3);

  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: var(--radius);
  min-height: 80px;
  line-height: 21px;
  padding: 4px 8px;
  resize: vertical;
  &:focus-visible {
    outline: 2px solid var(--input-outline);
    outline-offset: 2px;
  }
`;
