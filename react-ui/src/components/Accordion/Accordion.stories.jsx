import component from './Accordion';

export default {
  title: 'Layout/Accordion',
  component,
};

export const Accordion = {
  args: {
    items: [
      { group: 'group1', component: <p>component1</p> },
      { group: 'group1', component: <p>component2</p> },
      { group: 'group1', component: <p>component3</p> },
      { group: 'group1', component: <p>component4</p> },
      { group: 'group1', component: <p>component5</p> },
      { group: 'group2', component: <p>component1</p> },
      { group: 'group2', component: <p>component2</p> },
      { group: 'group2', component: <p>component3</p> },
      { group: 'group2', component: <p>component4</p> },
      { group: 'group2', component: <p>component5</p> },
    ],
  },
};
