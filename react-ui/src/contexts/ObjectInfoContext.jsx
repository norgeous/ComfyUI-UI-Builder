import { createContext } from 'react';
import PropTypes from 'prop-types';
import useObjectInfo from '../hooks/useObjectInfo';

export const ObjectInfoContext = createContext({});

const ObjectInfoProvider = ({ children }) => {
  const {
    loading,
    error,
    objectInfo,
  } = useObjectInfo();

  return (
    <ObjectInfoContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        loading,
        error,
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
