import { Writable } from 'vite-compatible-readable-stream';

const audioBucket = new Writable({
  write(chunk, encoding, callback) {
    callback();
  },
  objectMode: true,
  decodeStrings: false,
});

export default audioBucket;
