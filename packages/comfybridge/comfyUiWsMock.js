// mocks of comfy ui for msw in storybook

const comfyUiWsMock = ({ client }) => {
  console.log(
    '@ui-builder/comfybridge mock ws connection established!',
    client.url,
  );
};

export default comfyUiWsMock;
