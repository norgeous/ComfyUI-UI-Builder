import { createContext } from 'react';
import PropTypes from 'prop-types';
import useComfyApi from '../hooks/useComfyApi';

export const ObjectInfoContext = createContext({});

const ObjectInfoProvider = ({ children = null }) => {
  const {
    executeFetch: objectInfoExecuteFetch,
    loading: objectInfoLoading,
    error: objectInfoError,
    data: objectInfo,
  } = useComfyApi({
    fetchUrl: '/object_info',
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
