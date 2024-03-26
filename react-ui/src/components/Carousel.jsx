/* eslint-disable react/prop-types */
import styled from 'styled-components';

const ImagesContainer = styled.section`
  flex: 1 0;
  display: grid;
  overflow-y: auto;
  padding: 20px;
`;

const Carousel = ({ images }) => {
  return (
    <ImagesContainer>
      {images.map(({ filename, subfolder }) => (
        <img
        key={filename}
        style={{ aspectRatio: 1, width: '100%', maxWidth: 1024 }}
        src={`http://127.0.0.1:8188/view?filename=${filename}&type=output&subfolder=${subfolder}`}
        alt=""
        />
      ))}
    </ImagesContainer>
  );
};

export default Carousel;
