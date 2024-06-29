import uuidv4 from './utils/uuidv4';
import simpleFetch from './simpleFetch';

const queueController = ({ comfyUrl, onChange }) => {
  const state = {
    queue: [],
  };

  // update
  const updateById = newData => {
    const existingItem = state.queue.find(({ id }) => id === newData.id);
    const otherItems = state.queue.filter(({ id }) => id !== newData.id);
    state.queue = [
      ...otherItems,
      // update exisitng item
      {
        ...existingItem,
        ...newData,
      },
    ];

    onChange(state.queue);
  };

  // create (prompt)
  const create = ({ promptData }) => {
    const id = uuidv4();

    // TODO: convert the prompt format here!

    simpleFetch({
      url: `${comfyUrl}/prompt`,
      options: {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_id: id,
          prompt: promptData,
        }),
      },
      adapter: res => res.json(),
      onChange: newData => updateById({ id, onRemove: () => {}, ...newData }),
    });

    // state.queue = [...state.queue, newData]; // append to queue
    // onChange(state.queue);
  };

  const interruptById = () => {};

  // remove
  const removeById = newData => {
    const newQueue = state.queue.filter(({ id }) => id !== newData.id);
    state.queue = newQueue;
    onChange(state.queue);
  };

  return {
    queue: state.queue,
    create,
    interruptById,
    removeById,
  };
};

export default queueController;
