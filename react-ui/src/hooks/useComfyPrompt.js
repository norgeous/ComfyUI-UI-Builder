import useComfyApi from './useComfyApi';

const useComfyPrompt = ({ bodyData }) => useComfyApi({
  fetchUrl: 'http://127.0.0.1:8188/prompt',
  options: {
    method: 'POST',
    body: JSON.stringify(bodyData),
  },
  enabled: false,
});

export default useComfyPrompt;
