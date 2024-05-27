import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  FaCircleQuestion,
  FaMicrophone,
  FaMicrophoneSlash,
} from 'react-icons/fa6';
import Spinner from '@/components/Spinner';

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

const Reset = styled(Button)`
  margin-left: auto;
`;

const TooltipText = styled.span`
  display: none;
  font-size: 0.75rem; // 12px
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  border: 1px solid grey;
  position: absolute;
  z-index: 1;
  width: max-content;
  max-width: 160px;
  top: 100%;
  left: 50%;
  margin-top: 5px;
  transform: translate(-50%);
  white-space: preserve-breaks;
  &::after {
    content: ' ';
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent grey transparent;
  }
`;

const Tooltip = styled.div`
  position: relative;
  &:hover ${TooltipText} {
    display: inline-block;
  }
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
}) => (
  <Wrap>
    {label && <Label htmlFor={id}>{label}</Label>}
    {info && (
      <Tooltip>
        <QuestionMark size={14} />
        <TooltipText>{info}</TooltipText>
      </Tooltip>
    )}
    {showMic && (
      <Button disabled={isLoading} onClick={onClickMic}>
        {isMuted ? <MicMuted /> : <MicOpen />}
      </Button>
    )}
    {isLoading && <Spinner />}
    {showReset && <Reset onClick={handleReset}>reset</Reset>}
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
};

export default InputHeader;
