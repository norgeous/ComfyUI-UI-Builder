import { useContext } from 'react';
import WsContext from '@/contexts/WsContext';
import useComfyApi from './useComfyApi';

const useComfyPrompt = ({ bodyData }) => {
  const { comfyUrl } = useContext(WsContext);
  return useComfyApi({
    fetchUrl: `${comfyUrl}/prompt`,
    options: {
      method: 'POST',
      body: JSON.stringify(bodyData),
    },
    enabled: false,
  });
};

export default useComfyPrompt;
