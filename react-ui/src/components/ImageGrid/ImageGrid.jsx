import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

const Outer = styled.div`
  height: 100%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  /* height: 100%; */
  scroll-snap-type: both mandatory;
  ${({ open }) =>
    open &&
    css`
      position: fixed;
      inset: 0;
      background: #000e;
    `}
  display: grid;
  grid-template-columns: repeat(${({ columnCount }) => columnCount}, auto);
  gap: 10px;
  place-items: center;
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
  display: grid;
  place-items: center;
  /* padding: 20px; */
`;

const Img = styled.img`
  display: block;
  max-width: 100%;
  max-height: ${({ maxHeight }) => maxHeight};
  cursor: pointer;
`;

const ImageGrid = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [columnCount, setColumnCount] = useState(1);
  const ref = useRef();

  useEffect(() => {
    const t = setInterval(() => {
      const isOverflowing = ref.current.scrollHeight > ref.current.clientHeight;
      if (isOverflowing) setColumnCount(cc => cc + 1);
      else clearInterval(t);
    }, 10);
    return () => clearInterval(t);
  }, [ref, columnCount]);

  useEffect(() => {
    const handleResize = () => setColumnCount(1);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!images.length) return null;

  return (
    <Outer ref={ref}>
      <Container
        columnCount={columnCount}
        open={open}
        onClick={() => setOpen(false)}
      >
        {images.map(image => (
          // <Div key={image}>
          <Img
            key={image}
            alt=""
            src={image}
            onClick={() => setOpen(o => !o)}
            maxHeight={`${ref.current?.clientHeight}px` || '100%'}
          />
          // </Div>
        ))}
      </Container>
    </Outer>
  );
};

export default ImageGrid;
