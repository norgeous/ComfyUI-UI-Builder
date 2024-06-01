import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaArrowRotateLeft } from 'react-icons/fa6';
import Spinner from '@/components/Spinner';
import Tooltip from '@/components/Tooltip';
import Microphone from './header-components/Microphone';
import InputHeaderButton from '../InputHeaderButton/InputHeaderButton';
import Info from './header-components/Info';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Label = styled.label`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.875rem; // 12px
`;

const ResetIcon = styled(FaArrowRotateLeft)`
  display: block;
  font-size: 12px;
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
    {info && <Info text={info} />}
    {showMic && (
      <Microphone
        isLoading={isLoading}
        isMuted={isMuted}
        onClick={onClickMic}
      />
    )}
    {children}
    {isLoading && <Spinner />}

    {showReset && (
      <ResetTooltip text="Reset">
        <InputHeaderButton onClick={handleReset}>
          <ResetIcon />
        </InputHeaderButton>
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
