import PropTypes from 'prop-types';
import ComfyBridgeContext from './ComfyBridgeContext';
import useComfyBridge from './useComfyBridge';

const ComfyBridgeProvider = ({ children = null }) => (
  <ComfyBridgeContext.Provider value={useComfyBridge()}>
    {children}
  </ComfyBridgeContext.Provider>
);

ComfyBridgeProvider.propTypes = {
  children: PropTypes.node,
};

export default ComfyBridgeProvider;
