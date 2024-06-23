import { useContext } from 'react';
import WsContext from '@/contexts/WsContext';
import useComfyApi from './useComfyApi';

const useComfyInterrupt = () => {
  const { comfyUrl } = useContext(WsContext);
  useComfyApi({
    fetchUrl: `${comfyUrl}/interrupt`,
    options: {
      method: 'POST',
    },
    enabled: false,
  });
};

export default useComfyInterrupt;
