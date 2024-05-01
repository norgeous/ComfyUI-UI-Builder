import { useContext, useState } from 'react';
import styled, { css } from 'styled-components';
import WsContext from '@/contexts/WsContext';

const Container = styled.div`
  height: 100%;
  overflow-y: auto;
  scroll-snap-type: both mandatory;
  ${({ open }) =>
    open &&
    css`
      position: fixed;
      inset: 0;
      background: #000e;
    `}
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
  display: grid;
  place-items: center;
`;

const Img = styled.img`
  display: block;
  padding: 20px;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
`;

const Carousel = () => {
  const [open, setOpen] = useState(false);
  const { output } = useContext(WsContext);
  const images = output?.images || [];

  if (!images.length) return null;

  return (
    <Container open={open} onClick={() => setOpen(o => !o)}>
      {images.map(({ filename }) => (
        <Div key={filename}>
          <Img alt="" src={`/view?type=output&filename=${filename}`} />
        </Div>
      ))}
    </Container>
  );
};

export default Carousel;
