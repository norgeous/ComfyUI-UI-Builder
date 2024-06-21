import styled, { css } from 'styled-components';

export const RangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.33333333px; /* to make it the same height as a text input */
`;

export const RangeInner = styled.div`
  height: 14px;
  padding-top: 6px;
`;

const track = css`
  width: 100%;
  height: 8px;
  cursor: pointer;
  border: 1px solid var(--bg4);
  border-radius: 100px;
`;

const thumb = css`
  border: none;
  border: 2px solid #fff;
  box-sizing: border-box;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: var(--accent);
  cursor: pointer;
`;

const progress = css`
  background: transparent;
  height: 8px;
`;

export const Input = styled.input.attrs({ type: 'range' })`
  display: block;
  width: 100%;
  height: 8px;
  min-width: 100%;
  box-sizing: border-box;
  accent-color: var(--accent);
  margin: 0;
  border-radius: 6px;
  background: transparent;
  background-image: linear-gradient(90deg, var(--accent), var(--accent));
  background-repeat: no-repeat;
  background-size: ${({ value, max }) => `${100 * (value / max)}%`} 100%;

  &::-moz-range-track {
    ${track}
  }
  &::-moz-range-progress {
    ${progress}
  }
  &::-moz-range-thumb {
    ${thumb}
  }

  -webkit-appearance: none;
  &::-webkit-slider-runnable-track {
    ${track}
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: -6px;
    ${thumb}
  }
`;

export const Sublabels = styled.div`
  padding: ${({ $isPips }) => ($isPips ? '0 10px' : 0)};
  display: flex;
  justify-content: space-between;
  font-size: 12px;
`;

export const Sublabel = styled.div`
  cursor: pointer;
  display: inline-flex;
  place-items: center;
  gap: 4px;
  overflow: hidden;
`;

export const SublabelText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Pip = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  width: 0;
`;
