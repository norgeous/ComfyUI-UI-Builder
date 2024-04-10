import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
  display: grid;
  place-items: center;
`;

const Img = styled.img`
  display: block;
  padding: 5px;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
`;

const Carousel = ({ images }) => (
  <>
    {images.map(({ filename, subfolder }) => (
      <Div key={filename}>
        <Img
          src={`/view?filename=${filename}&type=output&subfolder=${subfolder}`}
          alt=""
        />
      </Div>
    ))}
  </>
);

Carousel.defaultProps = {
  images: [],
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    filename: PropTypes.string,
    subfolder: PropTypes.string,
  })),
};

export default Carousel;
