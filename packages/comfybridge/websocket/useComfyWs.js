// import { useState, useEffect } from 'react';
// import getWebSocket from './getWebSocket';

// const urls = [
//   'ws://localhost:8188',
//   `ws://localhost:${window.location.port}`,
//   `ws://${window.location.hostname}:${window.location.port}`,
// ];

// const useComfyWs = clientId => {
//   const [wsStatus, setWsStatus] = useState('DEFAULT');
//   const [comfyUrl, setComfyUrl] = useState();
//   const [lastWsMessage, setLastWsMessage] = useState('');
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [progress, setProgress] = useState(0); // fraction, between 0 and 1
//   const [output, setOutput] = useState();

//   useEffect(() => {
//     const socketMessageActions = {
//       execution_cached: () => {
//         setLastWsMessage('EXECUTION_CACHED');
//       },
//       execution_start: () => {
//         setLastWsMessage('EXECUTION_START');
//       },
//       executing: data => {
//         if (data.data.node) {
//           const nodeType = config.baseWorkflow.nodes.find(
//             ({ id }) => id === Number(data.data.node),
//           ).type;
//           setLastWsMessage(nodeType);
//         }
//       },
//       executed: data => {
//         setLastWsMessage('EXECUTED');
//         setIsGenerating(false);
//         setProgress(0);
//         setOutput(data.data.output);
//       },
//       execution_interrupted: () => {
//         setLastWsMessage('EXECUTION_INTERRUPTED');
//         setIsGenerating(false);
//         setProgress(0);
//       },
//       progress: data => {
//         setIsGenerating(true);
//         setProgress(data.data.value / data.data.max);
//       },
//       status: data => {
//         setIsGenerating(data.data.status.exec_info.queue_remaining > 0);
//       },
//     };
//     (async () => {
//       setWsStatus('CONNECTING');
//       const socket = await getWebSocket({
//         urls: urls.map(url => `${url}/ws?clientId=${clientId}`),
//         onOpen: () => setWsStatus('CONNECTED'),
//       });

//       if (!socket) return;

//       // set the running comfy instance url
//       setComfyUrl(`http://${new URL(socket.url).host}`);

//       socket.addEventListener('close', () => setWsStatus('DISCONNECTED'));
//       socket.addEventListener('error', d => console.error('WSERROR', d)); // eslint-disable-line no-console
//       socket.addEventListener('message', event => {
//         const data = JSON.parse(event.data);
//         socketMessageActions[data.type]?.(data);
//       });
//     })();
//   }, [clientId]); // eslint-disable-line react-hooks/exhaustive-deps

//   return {
//     wsStatus,
//     comfyUrl,
//     lastWsMessage,
//     isGenerating,
//     progress,
//     output,
//   };
// };

// export default useComfyWs;
