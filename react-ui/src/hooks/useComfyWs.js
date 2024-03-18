import { useState, useEffect } from 'react';

const useComfyWs = (clientId) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0); // fraction, between 0 and 1
  const [output, setOutput] = useState();

  useEffect(() => {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const serverAddress = `${window.location.hostname}:${window.location.port}`;
    const socket = new WebSocket(`${protocol}//${serverAddress}/ws?clientId=${clientId}`);

    const socketMessageActions = {
      progress: (data) => {
        setIsGenerating(true);
        setProgress(data.data.value / data.data.max);
      },
      executed: (data) => {
        setIsGenerating(false);
        setProgress(1);
        setOutput(data.data.output);
      },
      execution_interrupted: () => {
        setIsGenerating(false);
        setProgress(0);
        console.log('Execution Interrupted');
      },
      status: (data) => {
        setIsGenerating(data.data.status.exec_info.queue_remaining > 0);
      },
    };

    socket.addEventListener('open', () => console.log('Connected to the ComfyUI websocket'));

    socket.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      socketMessageActions[data.type]?.(data);
    });
  }, [clientId]);

  return { isGenerating, progress, output };
};

export default useComfyWs;
