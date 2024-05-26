import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const gapSizePx = 10;

const Outer = styled.div`
  height: 100%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  display: grid;
  gap: ${gapSizePx}px;
  place-items: center;
  justify-content: center;
  ${({ open, columnCount }) =>
    open !== undefined
      ? css`
          scroll-snap-type: both mandatory;
          position: fixed;
          z-index: 1;
          inset: 0;
          background: #000e;
          height: 100%;
          overflow-y: auto;
        `
      : css`
          grid-template-columns: repeat(${columnCount}, auto);
          max-height: 100%;
        `}
`;

const Img = styled.img`
  cursor: pointer;
  display: block;
  max-width: 100%;
  ${({ $open }) =>
    $open !== undefined
      ? css`
          scroll-snap-stop: normal;
          scroll-snap-align: center;
          max-height: 100svh;
          height: 100svh;
          object-fit: scale-down;
        `
      : css`
          max-height: 100%;
          min-height: 0;
        `}
`;

const Item = ({ scrollTo = false, onClick, ...props }) => {
  const ref = useRef();

  useEffect(() => {
    if (scrollTo) ref.current.scrollIntoView();
  }, [scrollTo]);

  const handleClick = event => {
    event.stopPropagation();
    onClick();
  };
  return (
    <Img ref={ref} crossorigin="anonymous" {...props} onClick={handleClick} />
  );
};

const ImageGrid = ({ images = [] }) => {
  const [imgDim, setImgDim] = useState({});
  const [open, setOpen] = useState();
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

  useEffect(calculateColumnCount, [ref, imgDim, images]);

  useEffect(() => {
    const handleResize = calculateColumnCount;
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref, imgDim, images]);

  useEffect(() => setImgDim({}), [images]);

  const [isFullscreen, setIsFullscreen] = useState(false);
  useEffect(() => {
    if (open !== undefined) {
      ref.current.requestFullscreen?.().then(() => {
        setTimeout(() => setIsFullscreen(true), 100); // this is to give some time for fullscreen to settle
      });
    } else window.document.exitFullscreen().then(() => setIsFullscreen(false));
  }, [open]);

  if (!images.length) return null;

  return (
    <Outer ref={ref}>
      <Container
        columnCount={columnCount}
        open={open}
        onClick={() => setOpen(undefined)}
      >
        {images.map((image, i) => (
          <Item
            key={image}
            alt=""
            src={image}
            onClick={() => setOpen(open !== undefined ? undefined : i)}
            onLoad={onLoad}
            $open={open}
            scrollTo={isFullscreen && open === i}
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
