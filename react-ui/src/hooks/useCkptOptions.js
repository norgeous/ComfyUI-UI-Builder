import { useCallback } from 'react';
import useComfyApi from './useComfyApi';

const useCkptOptions = () => {
  const { loading, error, data } = useComfyApi({
    fetchUrl: 'http://127.0.0.1:8188/object_info/CheckpointLoaderSimple',
    adapter: useCallback((res) => res.CheckpointLoaderSimple.input.required.ckpt_name[0], []),
  });

  const ckptOptions = [
    { label: '-- undefined --', ckpt: '' },
    ...data?.map((ckptName) => ({ label: ckptName, ckpt: ckptName })) || [],
  ];

  return { loading, error, ckptOptions };
};

export default useCkptOptions;
