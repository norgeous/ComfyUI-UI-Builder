import styled from 'styled-components';
import { bgfg } from '@/components/GlobalStyles';

// eslint-disable-next-line import/prefer-default-export
export const Textarea = styled.textarea`
  ${bgfg(4)}
  border: 1px solid var(--bg5);
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: var(--radius);
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
  min-height: 60px;
  line-height: 21px;
  padding: 4px 8px;
  resize: vertical;
`;
