import simpleFetch from '../utils/simpleFetch';

const qDelete = ({ state, updateState, promptId }) => {
  simpleFetch({
    url: `${state.ws.comfyUrl}/queue`,
    options: {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        delete: [promptId],
      }),
    },
    adapter: res => res.json(),
    onChange: newState => {
      updateState('qDelete', newState);
    },
  });
};

export default qDelete;
