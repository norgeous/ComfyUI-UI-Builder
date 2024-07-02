import useComfyApi from './queue/useComfyApi';

const useComfyUpload = ({ file, enabled, onComplete }) => {
  const formData = new FormData();
  formData.append('image', file);

  return useComfyApi({
    fetchUrl: '/upload/image',
    options: {
      method: 'POST',
      body: formData,
      headers: undefined,
    },
    enabled,
    onComplete,
  });
};

export default useComfyUpload;
