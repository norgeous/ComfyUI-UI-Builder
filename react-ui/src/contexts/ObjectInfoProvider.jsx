import { useContext } from 'react';
import PropTypes from 'prop-types';
import ObjectInfoContext from './ObjectInfoContext';
import useComfyApi from '../hooks/useComfyApi';
import WsContext from './WsContext';

const ObjectInfoProvider = ({ children = null }) => {
  const { comfyUrl } = useContext(WsContext);

  const {
    executeFetch: objectInfoExecuteFetch,
    loading: objectInfoLoading,
    error: objectInfoError,
    data: objectInfo,
  } = useComfyApi({
    fetchUrl: `${comfyUrl}/object_info`,
    enabled: Boolean(comfyUrl),
  });

  return (
    <ObjectInfoContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        objectInfoExecuteFetch,
        objectInfoLoading,
        objectInfoError,
        objectInfo,
      }}
    >
      {children}
    </ObjectInfoContext.Provider>
  );
};

ObjectInfoProvider.propTypes = {
  children: PropTypes.node,
};

export default ObjectInfoProvider;
