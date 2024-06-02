import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa6';
import Tooltip from '@/components/Tooltip';
import InputHeaderButton from '../form-fields/InputHeaderButton/InputHeaderButton';

const MicOpen = styled(FaMicrophone)`
  display: block;
  font-size: 12px;
`;

const MicMuted = styled(FaMicrophoneSlash)`
  display: block;
  font-size: 12px;
`;

const Microphone = ({
  isLoading = false,
  isMuted = true,
  onClick = () => {},
}) => (
  <Tooltip text="Capture speech">
    <InputHeaderButton disabled={isLoading} onClick={onClick}>
      {isMuted ? <MicMuted /> : <MicOpen />}
    </InputHeaderButton>
  </Tooltip>
);

Microphone.propTypes = {
  isLoading: PropTypes.bool,
  isMuted: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Microphone;
