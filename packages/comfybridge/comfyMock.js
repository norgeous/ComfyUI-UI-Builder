import { ws, http, HttpResponse } from 'msw';

// mocks of comfy ui for msw in storybook

// this module needs to be able to receive prompts on /prompt POST and hold them in a queue
// then spit out ws events based on delays (mock nodes executing)
// also can receieve interrupts to items in the queue
// finally send back 1 or more mock images (perhaps svgs?) via ws
// test ci...

const service = ws.link(`ws://${window.location.host}/ws`);
const wsMock = service.on('connection', ({ client, ...other }) => {});

const mockJobEvents = [
  { type: 'execution_start' },
  { type: 'status', data: { node: 1 } },
  { type: 'executing', data: { node: 1 } },
  { type: 'progress', data: { value: 1, max: 28 } },
  { type: 'progress', data: { value: 2, max: 28 } },
  { type: 'progress', data: { value: 3, max: 28 } },
  { type: 'progress', data: { value: 4, max: 28 } },
  { type: 'progress', data: { value: 5, max: 28 } },
  { type: 'progress', data: { value: 6, max: 28 } },
  { type: 'progress', data: { value: 7, max: 28 } },
  { type: 'progress', data: { value: 8, max: 28 } },
  { type: 'progress', data: { value: 9, max: 28 } },
  { type: 'progress', data: { value: 10, max: 28 } },
  { type: 'progress', data: { value: 11, max: 28 } },
  { type: 'progress', data: { value: 12, max: 28 } },
  { type: 'progress', data: { value: 13, max: 28 } },
  { type: 'progress', data: { value: 14, max: 28 } },
  { type: 'progress', data: { value: 15, max: 28 } },
  { type: 'progress', data: { value: 16, max: 28 } },
  { type: 'progress', data: { value: 17, max: 28 } },
  { type: 'progress', data: { value: 18, max: 28 } },
  { type: 'progress', data: { value: 19, max: 28 } },
  { type: 'progress', data: { value: 20, max: 28 } },
  { type: 'progress', data: { value: 21, max: 28 } },
  { type: 'progress', data: { value: 22, max: 28 } },
  { type: 'progress', data: { value: 23, max: 28 } },
  { type: 'progress', data: { value: 24, max: 28 } },
  { type: 'progress', data: { value: 25, max: 28 } },
  { type: 'progress', data: { value: 26, max: 28 } },
  { type: 'progress', data: { value: 27, max: 28 } },
  { type: 'progress', data: { value: 28, max: 28 } },
  { type: 'executed', data: { output: { images: ['0001.png'] } } },
  // { type: 'execution_cached' },
  // { type: 'execution_interrupted' },
];

const mockQueue = [];

// queue eater
setInterval(() => {
  if (!mockQueue.length) return;
  const nextItem = mockQueue.shift();
  service.broadcast(JSON.stringify(nextItem));
}, 200);

const objectInfoMock = http.get(`${window.location.origin}/object_info`, () =>
  HttpResponse.json({
    CheckpointLoaderSimple: {
      input: {
        required: {
          ckpt_name: [
            [
              'mock-model-one-XL.safetensors',
              'mock-two.SDXL.ckpt',
              'my-checkpoint.SD15.safetensors',
              'SDXL/my-checkpoint.SDXL.safetensors',
            ],
          ],
        },
      },
    },
    LoraLoader: {
      input: {
        required: {
          lora_name: [
            [
              'mock-lora-1.safetensors',
              'mock-lora-2.safetensors',
              'mock-lora-3.safetensors',
            ],
          ],
        },
      },
    },
    LoadImage: {
      input: {
        required: {
          image: [
            [
              'image1.jpg',
              'image2.jpg',
              'image3.jpg',
              'image4.jpg',
              'image5.jpg',
            ],
          ],
        },
      },
    },
  }),
);

const promptMock = http.post(
  `${window.location.origin}/prompt`,
  async ({ request }) => {
    const { client_id } = JSON.parse(await request.text()); // eslint-disable-line camelcase
    mockQueue.push(...mockJobEvents.map(mje => ({ client_id, ...mje }))); // eslint-disable-line camelcase

    return HttpResponse.json({
      id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
      firstName: 'John',
      lastName: 'Maverick',
    });
  },
);

const interruptMock = http.get(`${window.location.origin}/interrupt`, () =>
  // find job id in the queue and cancel the interval?
  HttpResponse.json({
    id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
    firstName: 'John',
    lastName: 'Maverick',
  }),
);

const imageMock = http.get(`${window.location.origin}/view`, ({ request }) => {
  const url = new URL(request.url);
  const width = url.searchParams.get('width') || 512;
  const height = url.searchParams.get('height') || 512;
  const fontSize = Math.min(width, height) / 2;
  const svg = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 ${width} ${height}"
      width="${width}"
      height="${height}"
    >
      <rect width="${width}" height="${height}" fill="whitesmoke" />
      <text
        x="${width / 2}"
        y="${height / 2}"
        font-size="${fontSize}"
        dy=".36em"
        text-anchor="middle"
        font-family="Tahoma, Helvetica, sans-serif"
        fonmt-weight="bold"
        fill="grey"
      >
        ${url.searchParams.get('filename')}
      </text>
    </svg>
  `;

  return HttpResponse.xml(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
    },
  });
});

export default [wsMock, objectInfoMock, promptMock, interruptMock, imageMock];
