import styled from 'styled-components';
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa6';
import Spinner from '@/components/Spinner';

const MicOpen = styled(FaMicrophone)`
  display: block;
  font-size: 14px;
`;

const MicMuted = styled(FaMicrophoneSlash)`
  display: block;
  font-size: 14px;
`;

const Microphone = ({ loading, muted, toggleMic }) => {
  const iconLookup = () => {
    if (loading) return <Spinner />;
    if (muted) return <MicMuted />;
    return <MicOpen />;
  };

  return (
    <button type="button" disabled={loading} onMouseUp={toggleMic}>
      {iconLookup()}
    </button>
  );
};

export default Microphone;
