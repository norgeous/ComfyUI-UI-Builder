import { useContext } from 'react';
import styled from 'styled-components';

import { FormContext } from '../contexts/FormContext';
import { ConfigsContext } from '../contexts/ConfigsContext';
import { ObjectInfoContext } from '../contexts/ObjectInfoContext';
import { AppContext } from '../contexts/AppContext';
import useWsContext from '../hooks/useWsContext';
import Debug from './Debug';

const Bar = styled.div`
  padding: 2px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  background: rgb(34, 42, 48);
  padding: 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow-x: scroll;
`;

const StatusBar = () => {
  const { isGenerating, progress } = useWsContext();
  const { formState } = useContext(FormContext);
  const { config: { baseWorkflow } } = useContext(ConfigsContext);
  const { loading, error, objectInfo } = useContext(ObjectInfoContext);
  const { adaptedComfyWorkflow, bodyData } = useContext(AppContext);

  return (
    <Bar>
      {isGenerating && 'GENERATING! '}
      {Math.round(progress * 100)}
      %
      <Debug label="formState" data={formState} />
      <Debug label="baseWorkflow" data={baseWorkflow} />
      <Debug label="objectInfo" data={{ loading, error, objectInfo }} />
      <Debug label="adaptedComfyWorkflow" data={adaptedComfyWorkflow} />
      <Debug label="bodyData" data={bodyData} />
    </Bar>
  );
};

export default StatusBar;
