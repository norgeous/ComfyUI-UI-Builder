import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  FaArrowRotateLeft,
  FaCircleQuestion,
  FaMicrophone,
  FaMicrophoneSlash,
} from 'react-icons/fa6';
import Spinner from '@/components/Spinner';
import Tooltip from '@/components/Tooltip';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Label = styled.label`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.875rem; // 14px
`;

export const Button = styled.button`
  cursor: pointer;
  display: block;
  border: none;
  color: inherit;
  background: transparent;
  font-size: 0.75rem; // 12px
  padding: 0;
  opacity: 0.5; // TODO: dont use opacity it affects the outline opacity also
  &:focus-visible {
    outline: 2px solid var(--input-outline);
    outline-offset: 2px;
    border-radius: var(--radius);
  }
`;

const QuestionMark = styled(FaCircleQuestion)`
  display: block;
  font-size: 14px;
  opacity: 0.5;
`;

const MicOpen = styled(FaMicrophone)`
  display: block;
  font-size: 14px;
`;

const MicMuted = styled(FaMicrophoneSlash)`
  display: block;
  font-size: 14px;
`;

const ResetIcon = styled(FaArrowRotateLeft)`
  display: block;
  font-size: 14px;
`;

const ResetTooltip = styled(Tooltip)`
  margin-left: auto;
`;

const InputHeader = ({
  id = undefined,
  label = undefined,
  info = undefined,
  isLoading = false,
  showMic = false,
  isMuted = true,
  onClickMic = () => {},
  showReset = false,
  handleReset = () => {},
  children = null,
}) => (
  <Wrap>
    {label && <Label htmlFor={id}>{label}</Label>}
    {info && (
      <Tooltip text={info}>
        <QuestionMark />
      </Tooltip>
    )}
    {showMic && (
      <Button disabled={isLoading} onClick={onClickMic}>
        {isMuted ? <MicMuted /> : <MicOpen />}
      </Button>
    )}
    {isLoading && <Spinner />}
    {children}

    {showReset && (
      <ResetTooltip text="reset">
        <Button onClick={handleReset}>
          <ResetIcon />
        </Button>
      </ResetTooltip>
    )}
  </Wrap>
);

InputHeader.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  info: PropTypes.string,
  isLoading: PropTypes.bool,
  showMic: PropTypes.bool,
  isMuted: PropTypes.bool,
  onClickMic: PropTypes.func,
  showReset: PropTypes.bool,
  handleReset: PropTypes.func,
  children: PropTypes.node,
};

export default InputHeader;
