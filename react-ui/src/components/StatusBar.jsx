import { useState } from 'react';
import styled from 'styled-components';
import useAppContext from '../hooks/useAppContext';

const Bar = styled.div`
  padding: 2px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  background: rgb(34, 42, 48);
  padding: 5px;
`;

const Pre = styled.pre`
  white-space: pre-wrap;
  position: absolute;
  background: #000e;
  color: green;
  inset: 0;
  padding: 40px;
  margin: 0;
  border: 0;
  z-index: 10;
`;

// eslint-disable-next-line react/prop-types
const Debug = ({ label, data }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <>
      <button onClick={toggle}>🐞 {label}</button>
      {open && (
        <Pre onClick={toggle}>
          {JSON.stringify(data, null, 2)}
        </Pre>
      )}
    </>
  );
};

const StatusBar = () => {
  const {
    isGenerating,
    progress,
    formState,
    bodyData,
  } = useAppContext();

  return (
    <Bar>
      {isGenerating && 'GENERATING!'}
      {Math.round(progress * 100)}%
      <Debug label="formState" data={formState} />
      <Debug label="bodyData" data={bodyData} />
    </Bar>
  );
};

export default StatusBar;
