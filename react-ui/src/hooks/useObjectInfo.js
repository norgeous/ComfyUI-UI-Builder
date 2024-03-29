import useComfyApi from './useComfyApi';

const useObjectInfo = () => {
  const { loading, error, data: objectInfo = {} } = useComfyApi({
    fetchUrl: '/object_info',
  });

  return {
    loading,
    error,
    objectInfo,
  };
};

export default useObjectInfo;
