const simpleFetch = ({
  url,
  options = {},
  onChange = () => {}, // receives an object with optional keys 'loading', 'error' and 'data'
  adapter = res => res,
}) => {
  if (!url) return;
  onChange({ loading: true, error: false });

  fetch(url, {
    method: 'GET',
    cache: 'no-cache',
    ...options,
  })
    .then(async res => {
      onChange({ loading: false });
      if (res.status !== 200) onChange({ error: res.status });
      return res;
    })
    .then(res => adapter(res))
    .then(adaptedData => onChange({ data: adaptedData })) // complete
    .catch(err => {
      console.error(err); // eslint-disable-line no-console
      onChange({ loading: false, error: err.message });
    });
};

export default simpleFetch;
