import component from './Accordion';

export default {
  title: 'Layout/Accordion',
  component,
};

export const Accordion = {
  args: {
    items: [
      { group: 'group1', component: 'component1' },
      { group: 'group1', component: 'component2' },
      { group: 'group2', component: 'component1' },
      { group: 'group2', component: 'component2' },
    ],
  },
};
