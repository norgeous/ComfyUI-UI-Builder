import { useState, useEffect } from 'react';
import { createModel } from 'vosk-browser';

const useVoskModel = path => {
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState();

  useEffect(() => {
    if (model) return () => model?.terminate();
    (async () => {
      setLoading(true);
      const newModel = await createModel(path);
      setModel(newModel);
      setLoading(false);
    })();
    return () => model?.terminate();
  }, [path]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    loading,
    model,
  };
};

export default useVoskModel;
