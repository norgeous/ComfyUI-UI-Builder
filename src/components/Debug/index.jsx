import PropTypes from 'prop-types';
import { useState } from 'react';
import Tooltip from '@/components/Tooltip';
import { BugIcon } from '@/components/Icons';
import { Button, Pre } from './styled';

const Debug = ({ label, data = undefined }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <>
      <Tooltip text={label}>
        <Button onClick={toggle}>
          <BugIcon />
        </Button>
      </Tooltip>
      {open && (
        <Pre onClick={toggle}>
          {label}
          {'\n'}
          {JSON.stringify(data, null, 2)}
        </Pre>
      )}
    </>
  );
};

Debug.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.any, // eslint-disable-line react/forbid-prop-types
};

export default Debug;
