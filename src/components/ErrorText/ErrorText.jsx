import PropTypes from 'prop-types';
import styled from 'styled-components';
import { WarningIcon } from '@/components/Icons/Icons';

const Box = styled.div`
  background: #ff000077;
  font-size: 0.75rem; // 12px
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 6px 8px;
  border-radius: 4px;
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
