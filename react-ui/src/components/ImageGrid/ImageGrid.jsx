import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
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

const Img = styled.img`
  display: block;
  max-width: 100%;
  max-height: ${({ maxHeight }) => maxHeight};
  cursor: pointer;
`;

const ImageGrid = ({ images = [] }) => {
  const [imgDim, setImgDim] = useState({});
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
  }, [ref, columnCount, imgDim]);

  useEffect(() => {
    const handleResize = () => setColumnCount(1);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onLoad = event => {
    const { src, naturalWidth, naturalHeight } = event.target;
    setImgDim(old => ({
      ...old,
      [src]: [naturalWidth, naturalHeight],
    }));
  };

  useEffect(() => {
    const { offsetWidth, offsetHeight } = ref.current;
    console.log(imgDim, { offsetWidth, offsetHeight });

    // wait until all images have loaded
    // then given container width and height and aspect of each image (from w/h)
    // calculate the number of columns needed

    // to do that, we can emulate the grid layout calc
    // - for each row / column add 10 gap
    // - with increasing column count, layout items like grid would
    // - that is until grid height becomes less than outer height
  }, [ref, imgDim]);

  if (!images.length) return null;

  return (
    <Outer ref={ref}>
      <Container
        columnCount={columnCount}
        open={open}
        onClick={() => setOpen(false)}
      >
        {images.map(image => (
          <Img
            key={image}
            alt=""
            src={image}
            onClick={() => setOpen(o => !o)}
            maxHeight={`${ref.current?.clientHeight}px` || '100%'}
            onLoad={onLoad}
          />
        ))}
      </Container>
    </Outer>
  );
};

ImageGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default ImageGrid;
