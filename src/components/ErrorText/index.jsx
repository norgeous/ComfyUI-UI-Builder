import PropTypes from 'prop-types';
import { WarningIcon } from '@/components/Icons';
import { Box } from './styled';

const ErrorText = ({ children }) => (
  <Box>
    <WarningIcon /> {children}
  </Box>
);

ErrorText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorText;
