import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import comfyBridge from '@/utils/comfyBridge';
import ComfyBridgeContext from './ComfyBridgeContext';

const bridge = comfyBridge();

const ComfyBridgeProvider = ({ children = null }) => {
  const [data, setData] = useState({});
  const onChange = newData => setData(oldData => ({ ...oldData, ...newData }));

  useEffect(() => {
    bridge.connectWs({ onChange });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (data.comfyUrl) {
      bridge.getObjectInfo({ comfyUrl: data.comfyUrl, onChange });
    }
  }, [data.comfyUrl]); // eslint-disable-line react-hooks/exhaustive-deps

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
