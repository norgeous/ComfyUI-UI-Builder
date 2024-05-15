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
  max-height: 100%;
`;

const Img = styled.img`
  cursor: pointer;
  display: block;
  max-width: 100%;
  max-height: 100%;
  min-height: 0;
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
      [src]: {
        w: naturalWidth,
        h: naturalHeight,
        a: naturalHeight / naturalWidth,
      },
    }));
  };

  const calculateColumnCount = () => {
    // wait until all images have loaded
    if (images.length !== Object.keys(imgDim).length) return;

    if (!ref.current) return;

    const { width, height } = ref.current.getBoundingClientRect();

    const imgDims = Object.values(imgDim);

    const newColumnCount =
      imgDims
        .map(({ w, h, a }, i) => {
          const gapSizePx = 10;

          const cc = i + 1;
          const rowCount = Math.ceil(imgDims.length / cc);

          const hGaps = gapSizePx * (cc - 1);
          const vGaps = gapSizePx * (rowCount - 1);

          // the maximal size of each cell in the grid, given the current layout
          const cellWidthMax = (width - hGaps) / cc;
          const cellHeightMax = (height - vGaps) / rowCount;

          const aspect2 = 1 / a; // inverse aspect

          const imgWidth = Math.min(w, cellWidthMax, cellHeightMax / a);
          const imgHeight = Math.min(h, cellHeightMax, cellWidthMax / aspect2);
          const imgArea = imgWidth * imgHeight;

          return imgArea;
        })
        .reduce((iMax, x, i, arr) => (x > arr[iMax] ? i : iMax), 0) + 1; // find index of largest area and add 1

    setColumnCount(newColumnCount);
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

  useEffect(() => setImgDim({}), [images]);

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
            onLoad={onLoad}
          />
        ))}
      </Container>
      {/* {open ? 'T' : 'F'} */}
    </Outer>
  );
};

ImageGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default ImageGrid;
