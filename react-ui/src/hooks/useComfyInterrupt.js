import useComfyApi from './useComfyApi';

const useComfyInterrupt = () => useComfyApi({
  fetchUrl: '/interrupt',
  options: {
    method: 'POST',
  },
  enabled: false,
});

export default useComfyInterrupt;
