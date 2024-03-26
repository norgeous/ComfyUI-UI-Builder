/* eslint-disable react/prop-types */
import styled from 'styled-components';

const ImagesContainer = styled.section`
  padding: 20px;
  display: grid;
  grid-template-rows: repeat(${({ size }) => size}, 1fr);
  grid-template-columns: repeat(${({ size }) => size}, 1fr);
  gap: 20px;
`;

const Carousel = ({ images }) => {
  return (
    <ImagesContainer size={Math.ceil(Math.sqrt(images.length))}>
      {images.map(({ filename, subfolder }) => (
        <img
          key={filename}
          style={{ display: 'block', aspectRatio: 1, width: '100%', maxWidth: 1024 }}
          src={`http://127.0.0.1:8188/view?filename=${filename}&type=output&subfolder=${subfolder}`}
          alt=""
        />
      ))}
    </ImagesContainer>
  );
};

export default Carousel;
