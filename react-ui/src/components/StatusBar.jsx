import styled from 'styled-components';
import useAppContext from '../hooks/useAppContext';
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
  const {
    isGenerating,
    progress,
    formState,
    baseWorkflow,
    adaptedComfyWorkflow,
    bodyData,
  } = useAppContext();

  return (
    <Bar>
      {isGenerating && 'GENERATING! '}
      {Math.round(progress * 100)}
      %
      <Debug label="formState" data={formState} />
      <Debug label="baseWorkflow" data={baseWorkflow} />
      <Debug label="adaptedComfyWorkflow" data={adaptedComfyWorkflow} />
      <Debug label="bodyData" data={bodyData} />
    </Bar>
  );
};

export default StatusBar;
