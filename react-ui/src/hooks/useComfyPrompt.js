import useComfyApi from './useComfyApi';

const useComfyPrompt = ({ bodyData }) =>
  useComfyApi({
    fetchUrl: '/prompt',
    options: {
      method: 'POST',
      body: JSON.stringify(bodyData),
    },
    enabled: false,
  });

export default useComfyPrompt;
