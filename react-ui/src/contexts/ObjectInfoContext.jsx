import { createContext } from 'react';
import PropTypes from 'prop-types';
import useComfyApi from '../hooks/useComfyApi';

export const ObjectInfoContext = createContext({});

const ObjectInfoProvider = ({ children }) => {
  const {
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
        objectInfoLoading,
        objectInfoError,
        objectInfo,
      }}
    >
      {children}
    </ObjectInfoContext.Provider>
  );
};

ObjectInfoProvider.defaultProps = {
  children: null,
};

ObjectInfoProvider.propTypes = {
  children: PropTypes.node,
};

export default ObjectInfoProvider;
