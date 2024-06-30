import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Light = styled.span`
  width: 12px;
  height: 12px;
  border: 1px solid var(--fg0);
  border-radius: 50%; // circle
  transition: background-position 250ms ease-in-out;
  background: linear-gradient(
    -180deg,
    grey,
    black,
    deepskyblue,
    blue,
    chartreuse,
    green,
    crimson,
    darkred
  );
  background-size: 100% 700%;
  background-repeat: no-repeat;
  background-position: ${({ status }) =>
    ({
      DEFAULT: '0% 0%',
      CONNECTING: '0% 33.33%',
      CONNECTED: '0% 66.66%',
      DISCONNECTED: '0% 100%',
    })[status]};
`;
