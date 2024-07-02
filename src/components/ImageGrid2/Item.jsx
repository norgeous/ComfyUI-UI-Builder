import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Img } from './styled';

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
      {...props} // eslint-disable-line react/jsx-props-no-spreading
      ref={ref}
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
