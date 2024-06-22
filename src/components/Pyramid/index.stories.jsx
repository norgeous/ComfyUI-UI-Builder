import styled from 'styled-components';
import component from '.';

export default {
  title: 'Pyramid',
  component,
};

const One = styled.div`
  padding: 10px;
  background: cyan;
`;
const Two = styled.div`
  padding: 10px;
  background: yellow;
`;
const Thr = styled.div`
  padding: 10px;
  background: magenta;
`;
const Fou = styled.div`
  padding: 10px;
  background: black;
`;

export const Pyramid = {
  args: {
    children: [
      <One key={0} />,
      <Two key={1} />,
      <Thr key={2} />,
      <Fou key={3} />,
    ],
  },
};
