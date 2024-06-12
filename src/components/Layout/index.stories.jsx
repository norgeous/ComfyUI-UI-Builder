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
        <center>
          item2
          <br />
          2nd line
        </center>
        <div>item3</div>
      </>
    ),
  },
};
