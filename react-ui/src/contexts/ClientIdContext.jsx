import { createContext } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from '../utils/uuidv4';

const clientId = uuidv4(); // generated every time the page refreshes

export const ClientIdContext = createContext(clientId);

const ClientIdProvider = ({ children }) => (
  <ClientIdContext.Provider value={clientId}>
    {children}
  </ClientIdContext.Provider>
);

ClientIdProvider.defaultProps = { children: null };

ClientIdProvider.propTypes = { children: PropTypes.node };

export default ClientIdProvider;
