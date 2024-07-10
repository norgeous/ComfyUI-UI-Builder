import simpleFetch from '../utils/simpleFetch';

const interrupt = ({ state, onChange }) => {
  simpleFetch({
    url: `${state.ws.comfyUrl}/interrupt`,
    options: {
      method: 'POST',
    },
    onChange,
    adapter: res => res.json(),
  });
};

export default interrupt;
