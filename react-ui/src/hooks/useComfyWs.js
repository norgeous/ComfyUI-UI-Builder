import { useState, useEffect } from 'react';

const useComfyWs = (clientId) => {
  const [isWsConnected, setIsWsConnected] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0); // fraction, between 0 and 1
  const [output, setOutput] = useState();

  useEffect(() => {
    const socket = new WebSocket(`/ws?clientId=${clientId}`);

    const socketMessageActions = {
      progress: (data) => {
        setIsGenerating(true);
        setProgress(data.data.value / data.data.max);
      },
      execution_cached: () => {},
      execution_start: () => {},
      executing: () => {},
      executed: (data) => {
        setIsGenerating(false);
        setProgress(0);
        setOutput(data.data.output);
      },
      execution_interrupted: () => {
        setIsGenerating(false);
        setProgress(0);
        console.log('Execution Interrupted'); // eslint-disable-line no-console
      },
      status: (data) => {
        setIsGenerating(data.data.status.exec_info.queue_remaining > 0);
      },
    };

    socket.addEventListener('open', () => setIsWsConnected(true));
    socket.addEventListener('close', () => setIsWsConnected(false));

    socket.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      socketMessageActions[data.type]?.(data);
    });
  }, [clientId]);

  return {
    isWsConnected,
    isGenerating,
    progress,
    output,
  };
};

export default useComfyWs;
