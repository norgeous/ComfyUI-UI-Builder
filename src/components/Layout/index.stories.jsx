import component from '.';

export default {
  title: 'Layout',
  component,
};

export const Layout = {
  args: {
    pad: true,
    column: true,
    children: (
      <>
        <div>item1</div>
        <div>item2</div>
        <div>item3</div>
      </>
    ),
  },
};
