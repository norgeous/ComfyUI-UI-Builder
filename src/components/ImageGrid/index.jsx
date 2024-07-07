import { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import screenfull from 'screenfull';
import { Button, Container, Outer } from './styled';
import Item from './Item';
import { MaximiseIcon, MinimiseIcon } from '../Icons';
import calculateColumnCount from './calc';
import useImageSize from './useImageSize';

const gapSizePx = 8;

const ImageGrid = ({ images = [] }) => {
  const [scaleUp, setScaleUp] = useState(true);
  const [open, setOpen] = useState();
  const [columnCount, setColumnCount] = useState(1);
  const ref = useRef();
  const { width, height } = ref.current?.getBoundingClientRect() || {};
  const [w, h] = useImageSize(images[0]); // size of first image in batch
  const calculate = useCallback(() => {
    if (!ref.current) return;

    const newColumnCount = calculateColumnCount({
      containerWidth: width,
      containerHeight: height,
      naturalImageWidth: w,
      naturalImageHeight: h,
      gapSizePx,
      imageCount: images.length,
    });

    setColumnCount(newColumnCount);
  }, [h, height, images.length, w, width]);

  useEffect(calculate, [calculate]);

  useEffect(() => {
    window.addEventListener('resize', calculate);
    return () => {
      window.removeEventListener('resize', calculate);
    };
  }, [ref, images, calculate]);

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
    <>
      <div style={{ position: 'absolute', background: 'darkred' }}>
        {w}x{h}
      </div>
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
    </>
  );
};

ImageGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default ImageGrid;
