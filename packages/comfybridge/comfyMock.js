import { ws } from 'msw';

const service = ws.link('ws://localhost:8188/ws');

// mocks of comfy ui for msw in storybook

// this module needs to be able to receive prompts on /prompt POST and hold them in a queue
// then spit out ws events based on delays (mock nodes executing)
// also can receieve interrupts to items in the queue
// finally send back 1 or more mock images (perhaps svgs?) via ws

// mock object_info GET
//   - ckpts, lora, previously uploaded images

const wsMock = service.on('connection', ({ client }) => {
  console.log(
    '@ui-builder/comfybridge mock ws connection established!',
    client.url,
    client,
  );
});

export default { wsMock };
