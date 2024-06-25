import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import comfyBridge from '@/utils/comfyBridge';
import ComfyBridgeContext from './ComfyBridgeContext';

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
    const newBridge = comfyBridge({ onChange: updateData });
    newBridge.connect();
    setBridge(newBridge);
    return () => newBridge.destroy();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { bridge, data };
};

const ComfyBridgeProvider = ({ children = null }) => (
  <ComfyBridgeContext.Provider value={useComfyBridge()}>
    {children}
  </ComfyBridgeContext.Provider>
);

ComfyBridgeProvider.propTypes = {
  children: PropTypes.node,
};

export default ComfyBridgeProvider;
