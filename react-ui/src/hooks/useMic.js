import { useCallback, useEffect, useState } from 'react';
import MicrophoneStream from 'microphone-stream';

import AudioStreamer from '@/utils/AudioStreamer';
import audioBucket from '@/utils/audioBucket';

const useMic = ({ isMuted, setIsMuted, recognizer, loading }) => {
  const [micStream, setMicStream] = useState();
  const [audioStreamer, setAudioStreamer] = useState();

  const startRecognitionStream = useCallback(async () => {
    if (recognizer) {
      if (!micStream) {
        let mediaStream = null;
        try {
          mediaStream = await navigator.mediaDevices.getUserMedia({
            video: false,
            audio: {
              echoCancellation: true,
              noiseSuppression: true,
            },
          });

          const newMicStream = new MicrophoneStream({
            objectMode: true,
            bufferSize: 1024,
          });

          newMicStream.setStream(mediaStream); // connect mic and media steam

          setMicStream(newMicStream);
          setIsMuted(false);
        } catch (err) {
          console.error(err); // eslint-disable-line no-console
        }
      }

      const newAudioStreamer = new AudioStreamer(recognizer, {
        objectMode: true,
      });
      setAudioStreamer(newAudioStreamer);
    }
  }, [recognizer]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    startRecognitionStream();
  }, [recognizer]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setIsMuted(true);
  }, [loading]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!isMuted) {
      // open
      micStream?.unpipe(audioBucket);
      micStream?.pipe(audioStreamer);
    } else {
      // muted
      micStream?.unpipe(audioStreamer);
      micStream?.pipe(audioBucket);
    }
  }, [isMuted]); // eslint-disable-line react-hooks/exhaustive-deps

  return { isMuted, micStream, audioStreamer };
};

export default useMic;
