import { useEffect, useState } from 'react';
import comfybridge from '../index';

const useComfyBridge = () => {
  const [bridge, setBridge] = useState();
  const [data, setData] = useState({
    ws: {},
    objectInfo: {},
    queue: [],
  });
  const updateData = newData =>
    setData(oldData => ({
      ...oldData,
      ...newData,
    }));

  // on mount, try to find the open websocket
  // TODO: if this fails to connect, perhaps display a message about ComfyUI --listen setting
  useEffect(() => {
    const newBridge = comfybridge({ onChange: updateData });
    newBridge.connect();
    setBridge(newBridge);
    return () => newBridge.destroy();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { bridge, data };
};

export default useComfyBridge;
