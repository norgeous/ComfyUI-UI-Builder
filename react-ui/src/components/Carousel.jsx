/* eslint-disable react/prop-types */
import styled from 'styled-components';

const ImagesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(${({ cols }) => cols}, 1fr);
  gap: 10px;
  max-height: 100%;
  aspect-ratio: ${({ cols, rows }) => `${cols} / ${rows}`};
  place-items: center;
`;

const Img = styled.img`
  display: block;
  max-height: inherit;
`;

const Carousel = ({ images }) => {
  const cols = Math.ceil(Math.sqrt(images.length));
  const rows = Math.ceil(images.length / cols);

  return (
    <ImagesContainer cols={cols} rows={rows}>
      {images.map(({ filename, subfolder }) => (
        <Img
          key={filename}
          src={`http://127.0.0.1:8188/view?filename=${filename}&type=output&subfolder=${subfolder}`}
          alt=""
        />
      ))}
    </ImagesContainer>
  );
};

export default Carousel;
