import MicrophoneStream from 'microphone-stream';
import { useCallback, useEffect, useState } from 'react';

import AudioStreamer from './AudioStreamer';
import audioBucket from './audioBucket';

let micStream;
let audioStreamer;

const Microphone = ({ recognizer, loading, ready }) => {
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
          // eslint-disable-next-line no-console
          console.error(err);
        }
      } else {
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
  }, [recognizer]);

  useEffect(() => {
    setMuted(true);
  }, [loading]);

  useEffect(() => {
    if (!muted) {
      micStream?.unpipe(audioBucket);
      micStream?.pipe(audioStreamer);
    } else {
      micStream?.unpipe(audioStreamer);
      micStream?.pipe(audioBucket);
    }
  }, [muted]);

  const toggleMic = () => {
    setMuted(muted => !muted);
  };

  return (
    <button type="button" disabled={!ready || loading} onMouseUp={toggleMic}>
      {muted ? '(muted)' : '(open)'}
      Speak
    </button>
  );
};

export default Microphone;
