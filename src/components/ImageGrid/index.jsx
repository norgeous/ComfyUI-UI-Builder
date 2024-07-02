import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import screenfull from 'screenfull';
import { Button, Container, Outer } from './styled';
import Item from './Item';
import { MaximiseIcon, MinimiseIcon } from '../Icons';

const gapSizePx = 8;

const ImageGrid = ({ imageSize = [512, 512], images = [] }) => {
  const [scaleUp, setScaleUp] = useState(false);
  const [open, setOpen] = useState();
  const [columnCount, setColumnCount] = useState(1);
  const ref = useRef();

  const calculateColumnCount = () => {
    if (!ref.current) return;

    const { width, height } = ref.current.getBoundingClientRect();

    const newColumnCount =
      images
        .map((image, i) => {
          const [w, h] = imageSize;
          const a = h / w;
          const cc = i + 1;
          const rowCount = Math.ceil(images.length / cc);

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

  useEffect(calculateColumnCount, [ref, images, imageSize]);

  useEffect(() => {
    window.addEventListener('resize', calculateColumnCount);
    return () => {
      window.removeEventListener('resize', calculateColumnCount);
    };
  }, [ref, images]); // eslint-disable-line react-hooks/exhaustive-deps

  const [isFullscreen, setIsFullscreen] = useState(false);
  useEffect(() => {
    if (!screenfull.isEnabled) return () => {};
    const syncronise = () => {
      setOpen(screenfull.isFullscreen ? open : undefined);
    };

    if (open !== undefined) {
      screenfull.request(ref.current).then(() => {
        setTimeout(() => setIsFullscreen(true), 50); // this is to give some time for fullscreen to settle (on firefox)
      });
      screenfull.on('change', syncronise);
    } else {
      screenfull.exit();
      setIsFullscreen(false);
    }

    return () => {
      if (open !== undefined) screenfull.off('change', syncronise);
    };
  }, [open]);

  if (!images.length) return null;

  return (
    <Outer ref={ref}>
      {isFullscreen && (
        <Button onClick={() => setScaleUp(!scaleUp)}>
          {scaleUp ? <MinimiseIcon /> : <MaximiseIcon />}
        </Button>
      )}
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
            $open={open}
            $scaleUp={scaleUp}
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
