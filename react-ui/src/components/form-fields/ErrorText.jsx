import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaTriangleExclamation } from 'react-icons/fa6';

const Box = styled.div`
  background: #ff000077;
  font-size: 0.75rem; // 12px
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 6px 8px;
  border-radius: 4px;
`;

const WarningIcon = styled(FaTriangleExclamation)`
  display: block;
  flex-shrink: 0;
`;

const ErrorText = ({ children }) => (
  <Box>
    <WarningIcon /> {children}
  </Box>
);

ErrorText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorText;
