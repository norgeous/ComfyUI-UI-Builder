const comfyUiWsMock = ({ client }) => {
  console.log(
    '@ui-builder/comfybridge mock ws connection established!',
    client.url,
  );
};

export default comfyUiWsMock;
