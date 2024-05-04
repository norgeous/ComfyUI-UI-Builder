import getWebSocket from '@/utils/websocket';
import { useState, useEffect } from 'react';

const ports = [window.location.port, '8188'];
const getWsUrl = port =>
  [
    { 'http:': 'ws:', 'https:': 'wss:' }[window.location.protocol],
    '//',
    window.location.hostname,
    ':',
    port,
  ].join('');

const useComfyWs = clientId => {
  const [wsStatus, setWsStatus] = useState('DEFAULT');
  const [comfyPort, setComfyPort] = useState(ports[0]);
  const [lastWsMessage, setLastWsMessage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0); // fraction, between 0 and 1
  const [output, setOutput] = useState();

  useEffect(() => {
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

    (async () => {
      setWsStatus('CONNECTING');
      const urls = ports.map(
        port => `${getWsUrl(port)}/ws?clientId=${clientId}`,
      );
      const socket = await getWebSocket({
        urls,
        onOpen: () => setWsStatus('CONNECTED'),
      });
      setComfyPort(new URL(socket.url).port);
      socket.addEventListener('close', () => setWsStatus('DISCONNECTED'));
      socket.addEventListener('error', d => console.error('WSERROR', d)); // eslint-disable-line no-console
      socket.addEventListener('message', event => {
        const data = JSON.parse(event.data);
        socketMessageActions[data.type]?.(data);
      });
    })();
  }, [clientId]);

  return {
    wsStatus,
    comfyPort,
    lastWsMessage,
    isGenerating,
    progress,
    output,
  };
};

export default useComfyWs;
