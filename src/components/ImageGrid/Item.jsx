import { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import SettingsContext from '@/contexts/SettingsContext';
import { Img } from './styled';

const Item = ({ scrollTo = false, onClick = () => {}, ...props }) => {
  const {
    settings: { scaleUp, pixelSmooth },
  } = useContext(SettingsContext);

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
      {...props} // eslint-disable-line react/jsx-props-no-spreading
      ref={ref}
      $scaleUp={scaleUp}
      $pixelSmooth={pixelSmooth}
      crossOrigin="anonymous"
      onClick={handleClick}
    />
  );
};

Item.propTypes = {
  scrollTo: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Item;
