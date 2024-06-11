import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const GridItem = styled.div`
  ${({ colSpan }) =>
    colSpan === 2 &&
    css`
      grid-column: 1 / span 2;
    `}
`;
