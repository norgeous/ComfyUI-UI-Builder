import styled, { keyframes } from 'styled-components';
import { FaSpinner } from 'react-icons/fa6';

const spin = keyframes`
  from {transform:rotate(0deg);}
  to {transform:rotate(360deg);}
`;

const SpinnerIcon = styled(FaSpinner)`
  display: block;
  animation: ${spin} 800ms infinite linear;
  flex-shrink: 0;
`;

const Spinner = () => <SpinnerIcon size={14} />;

export default Spinner;
