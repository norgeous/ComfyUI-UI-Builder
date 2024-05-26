import { useCallback, useEffect, useState } from 'react';
import MicrophoneStream from 'microphone-stream';

import AudioStreamer from '@/utils/AudioStreamer';
import audioBucket from '@/utils/audioBucket';

let micStream;
let audioStreamer;

const useMic = ({ recognizer, loading }) => {
  const [muted, setMuted] = useState(true);

  const startRecognitionStream = useCallback(async () => {
    if (recognizer) {
      setMuted(true);

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

          micStream.setStream(mediaStream);
        } catch (err) {
          console.error(err); // eslint-disable-line no-console
        }
      } else {
        // muted
        micStream.unpipe(audioStreamer);
        micStream.pipe(audioBucket);
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
    setMuted(true);
  }, [loading]);

  useEffect(() => {
    if (!muted) {
      // open
      micStream?.unpipe(audioBucket);
      micStream?.pipe(audioStreamer);
    } else {
      // muted
      micStream?.unpipe(audioStreamer);
      micStream?.pipe(audioBucket);
    }
  }, [muted]);

  const toggleMic = () => setMuted(!muted);

  return { muted, toggleMic };
};

export default useMic;
