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

const Button = styled.button`
  cursor: pointer;
  border: none;
  color: inherit;
  background: transparent;
  opacity: 0.5;
  font-size: 0.75rem; // 12px
  padding: 0;
`;

const QuestionMark = styled(FaCircleQuestion)`
  display: block;
`;

const MicOpen = styled(FaMicrophone)`
  display: block;
  font-size: 14px;
`;

const MicMuted = styled(FaMicrophoneSlash)`
  display: block;
  font-size: 14px;
`;

const Reset = styled(Tooltip)`
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
        <QuestionMark size={14} />
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
      <Reset text="reset">
        <Button onClick={handleReset}>
          <FaArrowRotateLeft />
        </Button>
      </Reset>
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
