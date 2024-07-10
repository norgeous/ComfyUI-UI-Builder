import simpleFetch from '../utils/simpleFetch';

const interrupt = ({ state, updateState }) => {
  simpleFetch({
    url: `${state.ws.comfyUrl}/interrupt`,
    options: {
      method: 'POST',
    },
    adapter: res => res.json(),
    onChange: newState => {
      updateState('interrupt', newState);
    },
  });
};

export default interrupt;
