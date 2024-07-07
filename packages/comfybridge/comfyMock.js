import { ws, http, HttpResponse } from 'msw';
import uuidv4 from './utils/uuidv4';

// mocks of comfy ui for msw in storybook

// this module needs to be able to receive prompts on /prompt POST and hold them in a queue
// then spit out ws events based on delays (mock nodes executing)
// also can receieve interrupts to items in the queue
// finally send back 1 or more mock images (perhaps svgs?) via ws
// test ci...

const service = ws.link(`ws://${window.location.host}/ws`);
const wsMock = service.on('connection', () => {});

const getMockJobEvents = ({ promptId }) => [
  { type: 'status', data: { status: { exec_info: { queue_remaining: 1 } } } },
  { type: 'execution_start', data: { prompt_id: promptId } },
  {
    type: 'execution_cached',
    data: { prompt_id: promptId, nodes: ['1', '5', '6', '4'] },
  },
  { type: 'executing', data: { prompt_id: promptId, node: '7' } },
  {
    type: 'progress',
    data: { prompt_id: promptId, node: '7', value: 1, max: 28 },
  },
  {
    type: 'progress',
    data: { prompt_id: promptId, node: '7', value: 2, max: 28 },
  },
  {
    type: 'progress',
    data: { prompt_id: promptId, node: '7', value: 3, max: 28 },
  },
  {
    type: 'progress',
    data: { prompt_id: promptId, node: '7', value: 4, max: 28 },
  },
  {
    type: 'progress',
    data: { prompt_id: promptId, node: '7', value: 5, max: 28 },
  },
  {
    type: 'progress',
    data: { prompt_id: promptId, node: '7', value: 6, max: 28 },
  },
  {
    type: 'progress',
    data: { prompt_id: promptId, node: '7', value: 7, max: 28 },
  },
  {
    type: 'progress',
    data: { prompt_id: promptId, node: '7', value: 8, max: 28 },
  },
  {
    type: 'progress',
    data: { prompt_id: promptId, node: '7', value: 9, max: 28 },
  },
  {
    type: 'progress',
    data: { prompt_id: promptId, node: '7', value: 10, max: 28 },
  },
  {
    type: 'progress',
    data: { prompt_id: promptId, node: '7', value: 11, max: 28 },
  },
  {
    type: 'progress',
    data: { prompt_id: promptId, node: '7', value: 12, max: 28 },
  },
  {
    type: 'progress',
    data: { prompt_id: promptId, node: '7', value: 13, max: 28 },
  },
  {
    type: 'progress',
    data: { prompt_id: promptId, node: '7', value: 14, max: 28 },
  },
  {
    type: 'progress',
    data: { prompt_id: promptId, node: '7', value: 15, max: 28 },
  },
  {
    type: 'progress',
    data: { prompt_id: promptId, node: '7', value: 16, max: 28 },
  },
  {
    type: 'progress',
    data: { prompt_id: promptId, node: '7', value: 17, max: 28 },
  },
  {
    type: 'progress',
    data: { prompt_id: promptId, node: '7', value: 18, max: 28 },
  },
  {
    type: 'progress',
    data: { prompt_id: promptId, node: '7', value: 19, max: 28 },
  },
  {
    type: 'progress',
    data: { prompt_id: promptId, node: '7', value: 20, max: 28 },
  },
  {
    type: 'progress',
    data: { prompt_id: promptId, node: '7', value: 21, max: 28 },
  },
  {
    type: 'progress',
    data: { prompt_id: promptId, node: '7', value: 22, max: 28 },
  },
  {
    type: 'progress',
    data: { prompt_id: promptId, node: '7', value: 23, max: 28 },
  },
  {
    type: 'progress',
    data: { prompt_id: promptId, node: '7', value: 24, max: 28 },
  },
  {
    type: 'progress',
    data: { prompt_id: promptId, node: '7', value: 25, max: 28 },
  },
  {
    type: 'progress',
    data: { prompt_id: promptId, node: '7', value: 26, max: 28 },
  },
  {
    type: 'progress',
    data: { prompt_id: promptId, node: '7', value: 27, max: 28 },
  },
  {
    type: 'progress',
    data: { prompt_id: promptId, node: '7', value: 28, max: 28 },
  },
  { type: 'executing', data: { prompt_id: promptId, node: '8' } },
  { type: 'executing', data: { prompt_id: promptId, node: '13' } },
  {
    type: 'executed',
    data: {
      prompt_id: promptId,
      node: '13',
      output: {
        images: [
          { filename: '01', subfolder: '', type: 'output', subtitle: promptId },
        ],
      },
    },
  },
  { type: 'status', data: { status: { exec_info: { queue_remaining: 0 } } } },
  { type: 'executing', data: { prompt_id: promptId, node: null } },
  // { type: 'execution_interrupted', data:{} },
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
              'mock-image1.jpg',
              'mock-image2.jpg',
              'mock-image3.jpg',
              'mock-image4.jpg',
              'mock-image5.jpg',
            ],
          ],
        },
      },
    },
  }),
);

const promptMock = http.post(`${window.location.origin}/prompt`, () => {
  const promptId = uuidv4();
  const mockJobEvents = getMockJobEvents({ promptId });
  mockQueue.push(...mockJobEvents);

  return HttpResponse.json({
    prompt_id: promptId,
    number: 1,
    node_errors: {},
  });
});

const interruptMock = http.get(`${window.location.origin}/interrupt`, () =>
  // find the currently "executing" prompt id
  // find items matching the prompt id in the websocket event queue
  // replace them with one new item:
  // { type: 'execution_interrupted', data:{ prompt_id: promptId } },
  // {"type": "status", "data": {"status": {"exec_info": {"queue_remaining": 0}}}}
  // {"type": "executing", "data": {"node": null, prompt_id: promptId}}
  HttpResponse(),
);

const imageMock = http.get(`${window.location.origin}/view`, ({ request }) => {
  const url = new URL(request.url);
  const width = url.searchParams.get('width') || 1024;
  const height = url.searchParams.get('height') || 1024;
  const fontSize = Math.min(width, height) / 2;
  const fontSize2 = Math.min(width, height) / 10;
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
        y="${height / 10}"
        dy=".36em"
        text-anchor="middle"
        font-size="${fontSize2}"
        font-family="Tahoma, Helvetica, sans-serif"
        fonmt-weight="bold"
        fill="grey"
      >
        Mock Image
      </text>
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
      <text
        x="${width / 2}"
        y="${(height / 10) * 9}"
        dy=".36em"
        text-anchor="middle"
        font-size="${fontSize2 / 2}"
        font-family="Tahoma, Helvetica, sans-serif"
        fonmt-weight="bold"
        fill="grey"
      >
        ${url.searchParams.get('subtitle') || ''}
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
