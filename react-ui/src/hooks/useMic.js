import { useCallback, useEffect, useState } from 'react';
import MicrophoneStream from 'microphone-stream';

import AudioStreamer from '@/utils/AudioStreamer';
import audioBucket from '@/utils/audioBucket';

let micStream;
let audioStreamer;

const useMic = ({ recognizer, loading }) => {
  const [isMuted, setIsMuted] = useState(true);

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

          micStream = new MicrophoneStream({
            objectMode: true,
            bufferSize: 1024,
          });

          micStream.setStream(mediaStream); // connect mic and media steam

          setIsMuted(false);
        } catch (err) {
          console.error(err); // eslint-disable-line no-console
        }
      } else {
        setIsMuted(true);
      }

      audioStreamer = new AudioStreamer(recognizer, {
        objectMode: true,
      });
    }
  }, [recognizer]);

  useEffect(() => {
    startRecognitionStream();
  }, [recognizer]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setIsMuted(true);
  }, [loading]);

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
  }, [isMuted]);

  const toggleMic = () => setIsMuted(!isMuted);

  return { isMuted, toggleMic };
};

export default useMic;
