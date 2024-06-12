import styled, { css } from 'styled-components';

export const RangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.33333333px; /* to make it the same height as a text input */
`;

const track = css`
  width: 100%;
  height: 8px;
  cursor: pointer;
  background: var(--input-bg);
  border: 1px solid var(--input-outline);
  border-radius: 100px;
`;

const thumb = css`
  border: none;
  border: 2px solid #fff;
  box-sizing: border-box;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background: var(--input-outline);
  cursor: pointer;
`;

const progress = css`
  background: var(--input-outline);
  height: 8px;
`;

export const Input = styled.input.attrs({ type: 'range' })`
  display: block;
  width: 100%;
  height: 20px;
  min-width: 100%;
  box-sizing: border-box;
  accent-color: var(--input-outline);
  margin: 0;
  background: transparent;
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
