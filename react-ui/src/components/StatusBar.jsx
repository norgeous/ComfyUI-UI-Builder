import { useContext } from 'react';
import styled from 'styled-components';

import { WsContext } from '../contexts/WsContext';
import { FormContext } from '../contexts/FormContext';
import { ConfigsContext } from '../contexts/ConfigsContext';
import { ObjectInfoContext } from '../contexts/ObjectInfoContext';
import { AppContext } from '../contexts/AppContext';

import Debug from './Debug';

const Bar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5px;
  background: rgb(34, 42, 48);
  padding: 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow-x: scroll;
`;

const Buggers = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const StatusBar = () => {
  const {
    isWsConnected,
    lastWsMessage,
    isGenerating,
    progress,
  } = useContext(WsContext);
  const { formState } = useContext(FormContext);
  const { config: { baseWorkflow } } = useContext(ConfigsContext);
  const { objectInfoLoading, objectInfoError, objectInfo } = useContext(ObjectInfoContext);
  const { adaptedComfyWorkflow, bodyData } = useContext(AppContext);

  return (
    <Bar>
      <div>
        {isWsConnected ? '🟢' : '🔴'}
        {' '}
        {lastWsMessage}
        {' '}
        {isGenerating && `${Math.round(progress * 100)}%`}
      </div>
      <Buggers>
        <Debug label="formState" data={formState} />
        <Debug label="baseWorkflow" data={baseWorkflow} />
        <Debug label="objectInfo" data={{ objectInfoLoading, objectInfoError, objectInfo }} />
        <Debug label="adaptedComfyWorkflow" data={adaptedComfyWorkflow} />
        <Debug label="bodyData" data={bodyData} />
      </Buggers>
    </Bar>
  );
};

export default StatusBar;
