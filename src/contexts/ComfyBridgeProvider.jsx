import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import comfyBridge from '@/utils/comfyBridge';
import ComfyBridgeContext from './ComfyBridgeContext';

const ComfyBridgeProvider = ({ children = null }) => {
  const [data, setData] = useState({});
  const updateData = newData =>
    setData(oldData => ({
      ...oldData,
      ...newData,
    }));

  // on mount, try to find the open websocket
  // TODO: if this fails to connect, perhaps display a message about ComfyUI --listen setting
  useEffect(() => {
    const bridge = comfyBridge({ onChange: updateData });
    bridge.connect();
    return () => bridge.destroy();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ComfyBridgeContext.Provider value={data}>
      {children}
    </ComfyBridgeContext.Provider>
  );
};

ComfyBridgeProvider.propTypes = {
  children: PropTypes.node,
};

export default ComfyBridgeProvider;
