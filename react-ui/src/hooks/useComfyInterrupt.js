import useComfyApi from './useComfyApi';

const useComfyInterrupt = () => useComfyApi({
  fetchUrl: 'http://127.0.0.1:8188/interrupt',
  options: {
    method: 'POST',
  },
  enabled: false,
});

export default useComfyInterrupt;
