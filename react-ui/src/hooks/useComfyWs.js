import { useState, useEffect } from 'react';

const useComfyWs = clientId => {
  const [isWsConnected, setIsWsConnected] = useState(false);
  const [lastWsMessage, setLastWsMessage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0); // fraction, between 0 and 1
  const [output, setOutput] = useState();

  useEffect(() => {
    const socket = new WebSocket(`/ws?clientId=${clientId}`);

    const socketMessageActions = {
      execution_cached: () => {
        setLastWsMessage('EXECUTION_CACHED');
      },
      execution_start: () => {
        setLastWsMessage('EXECUTION_START');
      },
      executing: data => {
        if (data.data.node) {
          setLastWsMessage(`EXECUTING node ${data.data.node}`);
        }
      },
      executed: data => {
        setLastWsMessage('EXECUTED');
        setIsGenerating(false);
        setProgress(0);
        setOutput(data.data.output);
      },
      execution_interrupted: () => {
        setLastWsMessage('EXECUTION_INTERRUPTED');
        setIsGenerating(false);
        setProgress(0);
      },
      progress: data => {
        setIsGenerating(true);
        setProgress(data.data.value / data.data.max);
      },
      status: data => {
        setIsGenerating(data.data.status.exec_info.queue_remaining > 0);
      },
    };

    socket.addEventListener('open', () => setIsWsConnected(true));
    socket.addEventListener('close', () => setIsWsConnected(false));

    socket.addEventListener('message', event => {
      const data = JSON.parse(event.data);
      socketMessageActions[data.type]?.(data);
    });
  }, [clientId]);

  return {
    isWsConnected,
    lastWsMessage,
    isGenerating,
    progress,
    output,
  };
};

export default useComfyWs;
