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
  justify-content: center;
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

  const onLoad = event => {
    const { src, naturalWidth, naturalHeight } = event.target;
    setImgDim(old => ({
      ...old,
      [src]: naturalHeight / naturalWidth,
    }));
  };

  const calculateColumnCount = () => {
    // wait until all images have loaded
    if (images.length !== Object.keys(imgDim).length) return;

    if (!ref.current) return;

    const { width, height } = ref.current.getBoundingClientRect();

    // then given container width and height and aspect of each image (from w/h)
    // calculate the number of columns needed
    // to do that, we can emulate the grid layout calc
    // - for each row / column add 10 gap
    // - with increasing column count, layout items like grid would
    // - that is until grid height becomes less than outer height

    const imgDims = Object.values(imgDim);
    const columnCount2 = imgDims.reduce((cc, a) => {
      if (imgDims.length === 1) return 1;
      const rowCount = Math.ceil(imgDims.length / cc);
      const hGapCount = cc - 1;
      const vGapCount = rowCount - 1;
      const cellWidth = Number(((width - 10 * hGapCount) / cc).toFixed(4));
      const rowHeight = cellWidth * a;
      const gridHeight = rowHeight * rowCount + vGapCount * 10;

      // console.log({
      //   cc,
      //   width,
      //   height,
      //   gridHeight,
      //   rowHeight,
      //   vGapCount,
      //   cellWidth,
      //   a,
      // });

      // add one to column count or not
      if (gridHeight <= height) return cc;
      return cc + 1;
    }, 1);

    // console.log({ columnCount2 });

    setColumnCount(columnCount2);
  };

  // setInterval replacement:
  useEffect(calculateColumnCount, [ref, imgDim, images]);

  useEffect(() => {
    const handleResize = calculateColumnCount;
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref, imgDim, images]);

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
