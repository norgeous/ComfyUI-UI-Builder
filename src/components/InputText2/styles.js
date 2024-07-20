import styled from 'styled-components';
import bgfg from '@/components/GlobalStyles/bgfg';

export const Input = styled.input.attrs({ type: 'text' })`
  ${bgfg(4)}
  border: 1px solid var(--bg5);
  display: block;
  width: 100%;
  min-width: 100%;
  box-sizing: border-box;
  border-radius: var(--radius);
  padding: 8px 4px;
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
`;

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
  min-height: 33.333px;
  height: 0;
  line-height: 21px;
  padding: 4px 8px;
  resize: vertical;
`;
