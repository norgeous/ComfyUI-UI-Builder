import styled, { css } from 'styled-components';

export const Outer = styled.div`
  height: 100%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Container = styled.div`
  display: grid;
  gap: ${({ $gapSizePx }) => $gapSizePx}px;
  place-items: center;
  justify-content: center;
  ${({ $open, $columnCount }) =>
    $open !== undefined
      ? css`
          scroll-snap-type: both mandatory;
          position: fixed;
          z-index: 1;
          inset: 0;
          background: #000e;
          height: 100%;
          overflow-y: auto;
        `
      : css`
          grid-template-columns: repeat(${$columnCount}, auto);
          max-height: 100%;
        `}
`;

export const Img = styled.img`
  cursor: pointer;
  display: block;
  max-width: 100%;
  ${({ $open }) =>
    $open !== undefined
      ? css`
          scroll-snap-stop: normal;
          scroll-snap-align: center;
          max-height: 100svh;
          height: 100svh;
          object-fit: scale-down;
        `
      : css`
          max-height: 100%;
          min-height: 0;
        `}
`;
