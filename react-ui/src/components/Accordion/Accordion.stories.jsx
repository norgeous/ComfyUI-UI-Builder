import component from './Accordion';

export default {
  title: 'Layout/Accordion',
  component,
};

export const Multi = {
  args: {
    sections: [
      { title: 'Accordion Multi Title 1', children: 'Accordion Contents 1' },
      { title: 'Accordion Multi Title 2', children: 'Accordion Contents 2' },
    ],
  },
};
