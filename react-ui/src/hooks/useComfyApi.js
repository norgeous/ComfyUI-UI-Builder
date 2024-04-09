import { useState, useEffect, useCallback } from 'react';

const useComfyApi = ({
  fetchUrl,
  options,
  enabled = true,
  adapter = (res) => res,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState();

  const executeFetch = useCallback(() => {
    if (fetchUrl) {
      setLoading(true);
      setError();
      fetch(fetchUrl, {
        method: 'GET',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        ...options,
      })
        .then(async (res) => {
          setLoading(false);

          const resType = res.headers.get('content-type').split(';')[0];

          if (res.status !== 200 && resType === 'text/plain') {
            setError(await res.text());
            return;
          }

          const json = await res.json();
          if (res.status !== 200) setError(json.node_errors['1'].errors[0].details);
          return json;
        })
        .then((res) => setData(adapter(res)))
        .catch((err) => {
          console.error('error in useComfyApi chain');
          console.error(err);
          setLoading(false);
          setError(err.message);
        });
    }
  }, [fetchUrl, options, adapter]);

  useEffect(() => {
    if (enabled) executeFetch();
  }, [enabled]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    executeFetch,
    loading,
    error,
    data,
  };
};

export default useComfyApi;
