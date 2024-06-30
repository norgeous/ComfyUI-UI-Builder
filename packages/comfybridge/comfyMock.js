import { ws, http, HttpResponse } from 'msw';

// mocks of comfy ui for msw in storybook

// this module needs to be able to receive prompts on /prompt POST and hold them in a queue
// then spit out ws events based on delays (mock nodes executing)
// also can receieve interrupts to items in the queue
// finally send back 1 or more mock images (perhaps svgs?) via ws
// test ci...

const service = ws.link('ws://localhost:8188/ws');
const wsMock = service.on('connection', ({ client }) => {
  console.log(
    '@ui-builder/comfybridge mock ws connection established!',
    client.url,
    client,
  );
});

// mock object_info GET
// TODO: previously uploaded images
const objectInfoMock = http.get('http://localhost:8188/object_info', () =>
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
          ckpt_name: [
            [
              'mock-lora-1.safetensors',
              'mock-lora-2.safetensors',
              'mock-lora-3.safetensors',
            ],
          ],
        },
      },
    },
  }),
);

const promptMock = http.get('http://localhost:8188/prompt', () =>
  HttpResponse.json({
    id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
    firstName: 'John',
    lastName: 'Maverick',
  }),
);

const interruptMock = http.get('http://localhost:8188/interrupt', () =>
  HttpResponse.json({
    id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
    firstName: 'John',
    lastName: 'Maverick',
  }),
);

export default [wsMock, objectInfoMock, promptMock, interruptMock];
