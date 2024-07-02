import { ws, http, HttpResponse } from 'msw';

// mocks of comfy ui for msw in storybook

// this module needs to be able to receive prompts on /prompt POST and hold them in a queue
// then spit out ws events based on delays (mock nodes executing)
// also can receieve interrupts to items in the queue
// finally send back 1 or more mock images (perhaps svgs?) via ws
// test ci...

const mockJobEvents = [
  { type: 'execution_start' },
  { type: 'executing', data: { node: 1 } },
  { type: 'progress', data: { value: 1, max: 28 } },
  { type: 'executed', data: { output: { images: ['0001.png'] } } },
  { type: '' },
];

const service = ws.link(`ws://${window.location.host}/ws`);
const wsMock = service.on('connection', ({ client, ...other }) => {});

const objectInfoMock = http.get(
  `http://${window.location.host}/object_info`,
  () =>
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

const promptMock = http.post(`http://${window.location.host}/prompt`, () => {
  setInterval(() => {
    service.broadcast(JSON.stringify({ mate: new Date().getTime() }));
  }, 1000);

  return HttpResponse.json({
    id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
    firstName: 'John',
    lastName: 'Maverick',
  });
});

const interruptMock = http.get(`http://${window.location.host}/interrupt`, () =>
  // find job id in the queue and cancel the interval?
  HttpResponse.json({
    id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
    firstName: 'John',
    lastName: 'Maverick',
  }),
);

const imageMock = http.get(
  `http://${window.location.host}/view`,
  ({ request }) => {
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
      <rect width="${width}" height="${height}" fill="lightgrey" />
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
  },
);

export default [wsMock, objectInfoMock, promptMock, interruptMock, imageMock];
