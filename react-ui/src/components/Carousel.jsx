/* eslint-disable react/prop-types */
import styled from 'styled-components';

// const ImagesContainer = styled.section`
//   width: 100%;
//   height: 100%;
// `;

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;  scroll-snap-align: center;
  margin-bottom: 10px;
`;

const Carousel = ({ images }) => {
  const count = images.length || 5;
  const cols = Math.ceil(Math.sqrt(count));
  const rows = Math.ceil(count / cols);

  return (
    <>
      {images.map(({ filename, subfolder }) => (
        <Img
          key={filename}
          src={`/view?filename=${filename}&type=output&subfolder=${subfolder}`}
          alt=""
        />
      ))}
      <Img rows={rows} src="/view?filename=Dungeon_01426_.png" />
      <Img rows={rows} src="/view?filename=Dungeon_01427_.png" />
      <Img rows={rows} src="/view?filename=Dungeon_01428_.png" />
      <Img rows={rows} src="/view?filename=Dungeon_01429_.png" />
      <Img rows={rows} src="/view?filename=Dungeon_01430_.png" />
      <Img rows={rows} src="/view?filename=Dungeon_01431_.png" />
      <Img rows={rows} src="/view?filename=Dungeon_01432_.png" />
      <Img rows={rows} src="/view?filename=Dungeon_01433_.png" />
      <Img rows={rows} src="/view?filename=Dungeon_01434_.png" />
    </>
  );
};

export default Carousel;
