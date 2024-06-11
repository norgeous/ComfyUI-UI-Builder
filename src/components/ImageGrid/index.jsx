import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Img, Outer } from './styled';

const gapSizePx = 10;

const Item = ({ scrollTo = false, onClick = () => {}, ...props }) => {
  const ref = useRef();

  useEffect(() => {
    if (scrollTo) ref.current.scrollIntoView();
  }, [scrollTo]);

  const handleClick = event => {
    event.stopPropagation();
    onClick();
  };
  return (
    <Img
      ref={ref}
      crossOrigin="anonymous"
      {...props} // eslint-disable-line react/jsx-props-no-spreading
      onClick={handleClick}
    />
  );
};

Item.propTypes = {
  scrollTo: PropTypes.bool,
  onClick: PropTypes.func,
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
    window.addEventListener('resize', calculateColumnCount);
    return () => {
      window.removeEventListener('resize', calculateColumnCount);
    };
  }, [ref, imgDim, images]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => setImgDim({}), [images]);

  const [isFullscreen, setIsFullscreen] = useState(false);
  useEffect(() => {
    if (open !== undefined) {
      ref.current.requestFullscreen?.().then(() => {
        setTimeout(() => setIsFullscreen(true), 100); // this is to give some time for fullscreen to settle
      });
    } else
      window.document
        .exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch(() => {});
  }, [open]);

  if (!images.length) return null;

  return (
    <Outer ref={ref}>
      <Container
        $gapSizePx={gapSizePx}
        $columnCount={columnCount}
        $open={open}
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
