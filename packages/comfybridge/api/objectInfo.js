import simpleFetch from '../utils/simpleFetch';

// Get all the object info (comfy ui node info)
const getObjectInfo = ({ state, onChange }) => {
  simpleFetch({
    url: `${state.ws.comfyUrl}/object_info`,
    onChange,
    adapter: res => res.json(),
  });
};

export default getObjectInfo;
