import { Duplex } from 'vite-compatible-readable-stream';

class AudioStreamer extends Duplex {
  constructor(recognizer, options) {
    super(options);
    this.recognizer = recognizer;
  }

  // eslint-disable-next-line no-underscore-dangle
  _write(chunk, encoding, callback) {
    // eslint-disable-next-line no-console
    const buffer = chunk.getChannelData(0);
    if (this.recognizer && buffer.byteLength > 0) {
      this.recognizer.acceptWaveform(chunk);
    }
    callback();
  }
}

export default AudioStreamer;
