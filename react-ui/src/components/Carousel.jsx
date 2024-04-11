import { useContext } from 'react';
import styled from 'styled-components';
import { WsContext } from '../contexts/WsContext';

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

const Carousel = () => {
  const { output } = useContext(WsContext);
  const images = output?.images || [];

  return (
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
};

export default Carousel;
