# @ui-builder/comfybridge

JS module for communicating with ComfyUI APIs and WS with MSW mocks

## How to use

### Ordinary javascript

```js
import comfybridge from '@ui-builder/comfybridge';

const bridge = comfybridge();

// find the and connect to the comfyui web socket
// this should also populate the bridge.state.objectInfo
bridge.connect();

// start generation
bridge.prompt({ promptData });

// interrupt the current task in the queue
bridge.interrupt();

// delete a queued task
bridge.qDelete({ promptId });
```

### React

You wrap your app with the provider

```js
import ComfyBridgeProvider from '@ui-builder/comfybridge/react/ComfyBridgeProvider';

const Main = () => (
  <ComfyBridgeProvider>
    <YourApp />
  </ComfyBridgeProvider>
);

export default Main;
```

Then use the context hook to get the bridge or state

```js
import { useContext } from 'react';
import ComfyBridgeContext from '@ui-builder/comfybridge/react/ComfyBridgeContext';

const MyComponent = () => {
  const comfyBridge = useContext(ComfyBridgeContext);

  // do something with the comfyBridge.data
};
```

### Mock

The comfyMock is an array of MSW handlers for:

- comfyui websocket
- GET /object_info (to get the comfyui node info)
- POST /prompt (to start mock generation)
- POST /interrupt (to interrupt current item)
- POST /queue (to delete queued tasks)
- GET /view (to view mock images)

it does have state! after receiving the prompt it puts a mock task into the queue which fires mock events into the mock WS every 200 ms

```js
import comfyMock from '@ui-builder/comfybridge/comfyMock';
```
