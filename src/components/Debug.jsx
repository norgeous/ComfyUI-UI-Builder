import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';
import { BugIcon } from '@/components/Icons/Icons';

const Button = styled.button`
  display: block;
  padding: 0;
  background: transparent;
  border: none;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

const Pre = styled.pre`
  position: absolute;
  inset: 0;
  white-space: pre-wrap;
  background: #000e;
  color: green;
  padding: 40px;
  margin: 0;
  border: 0;
  z-index: 10;
  overflow: scroll;
`;

const Debug = ({ label, data = undefined }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <>
      <Button onClick={toggle} title={label}>
        <BugIcon />
      </Button>
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
