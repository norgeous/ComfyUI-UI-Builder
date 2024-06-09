import styled, { css, keyframes } from 'styled-components';
import {
  FaChevronUp,
  FaTriangleExclamation,
  FaPause,
  FaPlay,
  FaSkull,
  FaSpinner,
  FaArrowRotateLeft,
  FaArrowLeft,
  FaArrowRight,
  FaDiceSix,
  FaShuffle,
  FaMicrophone,
  FaMicrophoneSlash,
  FaArrowDown,
  FaArrowUp,
  FaCircleQuestion,
} from 'react-icons/fa6';

const spin = keyframes`
  from {transform:rotate(0deg);}
  to {transform:rotate(360deg);}
`;

const baseIconCss = css`
  display: block;
  flex-shrink: 0;
`;

export const ArrowDownIcon = styled(FaArrowDown)(baseIconCss);
export const ArrowLeftIcon = styled(FaArrowLeft)(baseIconCss);
export const ArrowRightIcon = styled(FaArrowRight)(baseIconCss);
export const ArrowUpIcon = styled(FaArrowUp)(baseIconCss);
export const ChevronIcon = styled(styled(FaChevronUp)(baseIconCss))`
  transition: transform 350ms;
  transform: ${({ $isOpen }) => ($isOpen ? 'none' : 'rotate(180deg)')};
`;
export const InterruptIcon = styled(FaSkull)(baseIconCss);
export const MicMutedIcon = styled(FaMicrophoneSlash)(baseIconCss);
export const MicUnmutedIcon = styled(FaMicrophone)(baseIconCss);
export const PauseIcon = styled(FaPause)(baseIconCss);
export const PlayIcon = styled(FaPlay)(baseIconCss);
export const InfoIcon = styled(FaCircleQuestion)(baseIconCss);
export const RandomiseIcon = styled(FaDiceSix)(baseIconCss);
export const ResetIcon = styled(FaArrowRotateLeft)(baseIconCss);
export const ShuffleIcon = styled(FaShuffle)(baseIconCss);
export const SpinnerIcon = styled(styled(FaSpinner)(baseIconCss))`
  animation: ${spin} 800ms infinite linear;
`;
export const WarningIcon = styled(FaTriangleExclamation)(baseIconCss);
