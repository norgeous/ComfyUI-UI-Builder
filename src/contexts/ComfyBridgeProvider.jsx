import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import comfyBridge from '@/utils/comfyBridge';
import ComfyBridgeContext from './ComfyBridgeContext';

const bridge = comfyBridge();

const ComfyBridgeProvider = ({ children = null }) => {
  const [data, setData] = useState({});
  // const onChange = newData => setData(oldData => ({ ...oldData, ...newData }));

  // on mount, try to find the open websocket
  // TODO: if this fails to connect, perhaps display a message about ComfyUI --listen setting
  useEffect(() => {
    console.log('do i fire once?');
    bridge.connect({ onChange: setData });
    return () => bridge.destroy();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // once the websocket has been discovered, ask for the object info
  // TODO: if this fails to connect, perhaps display a message about ComfyUI --enable-cors-header setting
  // useEffect(() => {
  //   if (data.comfyUrl) {
  //     bridge.getObjectInfo({ comfyUrl: data.comfyUrl, onChange });
  //   }
  // }, [data.comfyUrl]); // eslint-disable-line react-hooks/exhaustive-deps

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
