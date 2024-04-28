import Accordion from './Accordion';

export default {
  title: 'Layout/Accordion',
  component: Accordion,
};

export const Accordion1 = {
  args: {
    items: [
      { group: 'group1', component: 'component1' },
      { group: 'group1', component: 'component2' },
      { group: 'group2', component: 'component1' },
      { group: 'group2', component: 'component2' },
    ],
  },
};
