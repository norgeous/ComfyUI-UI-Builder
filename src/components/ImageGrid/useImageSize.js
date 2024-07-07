import { useEffect, useState } from 'react';

const useImageSize = image => {
  const [size, setSize] = useState([512, 512]);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => setSize([img.naturalWidth, img.naturalHeight]);
    img.src = image;
  }, [image]);

  return size;
};

export default useImageSize;
