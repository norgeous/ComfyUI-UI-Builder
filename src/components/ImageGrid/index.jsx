import { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import screenfull from 'screenfull';
import { Container, Outer } from './styles';
import Item from './Item';
import calculateColumnCount from './calc';
import useImageSize from './useImageSize';

const gapSizePx = 8;

const ImageGrid = ({ images = [] }) => {
  const [open, setOpen] = useState();
  const [columnCount, setColumnCount] = useState(1);
  const ref = useRef();
  const [naturalImageWidth, naturalImageHeight] = useImageSize(images[0]); // size of first image in batch

  const calculate = useCallback(() => {
    if (!ref.current) return;

    const { width: containerWidth, height: containerHeight } =
      ref.current.getBoundingClientRect();

    const newColumnCount = calculateColumnCount({
      containerWidth,
      containerHeight,
      naturalImageWidth,
      naturalImageHeight,
      gapSizePx,
      imageCount: images.length,
    });

    setColumnCount(newColumnCount);
  }, [images, naturalImageHeight, naturalImageWidth]);

  useEffect(calculate, [calculate]);

  useEffect(() => {
    window.addEventListener('resize', calculate);
    return () => {
      window.removeEventListener('resize', calculate);
    };
  }, [calculate]);

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
