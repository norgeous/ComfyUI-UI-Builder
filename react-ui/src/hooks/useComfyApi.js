import { useState, useEffect, useCallback } from 'react';

const useComfyApi = ({
  fetchUrl,
  options,
  enabled = true,
  adapter = res => res,
  onComplete = () => {},
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
        .then(async res => {
          setLoading(false);

          const resType = res.headers.get('content-type').split(';')[0];

          if (res.status !== 200 && resType === 'text/plain') {
            setError(`${res.status}: ${await res.text()}`);
            return undefined;
          }

          const json = await res.json();
          if (res.status !== 200) {
            setError(
              `${res.status}: ${json.node_errors['1'].errors[0].details}`,
            );
          }
          return json;
        })
        .then(res => adapter(res))
        .then(adaptedData => {
          setData(adaptedData);
          onComplete(adaptedData);
        })
        .catch(err => {
          console.error(err); // eslint-disable-line no-console
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
