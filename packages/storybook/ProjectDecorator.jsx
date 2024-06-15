/* eslint-disable import/no-extraneous-dependencies */
import Providers from '@/Providers';
import { GlobalStyle, Theme1Style } from '@/components/globalStyles';

import { useParameter, useState, useEffect } from '@storybook/preview-api';
import { isScreenshot } from 'storycap';

const useStorycapCurrentVariant = () => {
  const screenshot = useParameter('screenshot');
  const [storycapVariant, setStorycapVariant] = useState();
  const [storycapVariantData, setStorycapVariantData] = useState();

  useEffect(() => {
    const asyncFn = async () => {
      if (!isScreenshot()) return;
      const currentVariantKey = await window.getCurrentVariantKey(); // magic
      const variant = currentVariantKey.keys[0];
      setStorycapVariant(variant);
      setStorycapVariantData(screenshot.variants[variant]);
    };
    asyncFn();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { storycapVariant, storycapVariantData };
};

const ProjectDecorator = Story => {
  const { storycapVariantData } = useStorycapCurrentVariant();

  return (
    <>
      <GlobalStyle />
      <Theme1Style forceDark={storycapVariantData?.forceDark} />
      <Providers>
        <Story />
      </Providers>
    </>
  );
};

export default ProjectDecorator;
