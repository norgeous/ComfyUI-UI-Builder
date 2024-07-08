import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Page = styled.div`
  height: 100svh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Content = styled.div`
  overflow: hidden;
  flex-grow: 1;
  display: grid;

  // portrait first
  grid-template-rows: auto minmax(auto, 360px);

  // landscape overrides
  @media (min-aspect-ratio: 1/1) {
    grid-template-rows: none;
    grid-template-columns: minmax(auto, 460px) auto;
    & > :first-child {
      order: 2; // change the order on landscape, so that sidebar is first
    }
  }
`;
