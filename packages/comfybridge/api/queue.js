import simpleFetch from '../utils/simpleFetch';

const queueDelete = ({ state, promptId, onChange }) => {
  simpleFetch({
    url: `${state.ws.comfyUrl}/queue`,
    options: {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        delete: [promptId],
      }),
    },
    onChange,
    adapter: res => res.json(),
  });
};

export default queueDelete;
