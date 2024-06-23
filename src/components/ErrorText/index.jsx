import PropTypes from 'prop-types';
import { DismissIcon, WarningIcon } from '@/components/Icons';
import { useState } from 'react';
import { Box, DismissButton } from './styled';

const ErrorText = ({ children }) => {
  const [hiddenByUser, setHiddenByUser] = useState(false);
  if (hiddenByUser) return null;
  return (
    <Box>
      <WarningIcon /> {children}
      <DismissButton
        onClick={() => setHiddenByUser(true)}
        aria-label="Dismiss error message"
      >
        <DismissIcon />
      </DismissButton>
    </Box>
  );
};

ErrorText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorText;
