import styled, { keyframes } from 'styled-components';
import { FaSpinner } from 'react-icons/fa6';

const spin = keyframes`
  from {transform:rotate(0deg);}
  to {transform:rotate(360deg);}
`;

const Loading = styled.div`
  animation: ${spin} 800ms infinite linear;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = () => (
  <Loading>
    <FaSpinner size={14} />
  </Loading>
);

export default Spinner;
