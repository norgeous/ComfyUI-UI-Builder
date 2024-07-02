/* eslint-disable import/no-extraneous-dependencies */
import { useParameter, useState, useEffect } from '@storybook/preview-api';
import { isScreenshot } from 'storycap';
import {
  DisableAnimations,
  GlobalStyle,
  Theme1Style,
} from '@/components/GlobalStyles';
import Providers from '@/Providers';

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

const ProjectDecorator = (Story, ...other) => {
  console.log({ Story, other });
  const { storycapVariantData } = useStorycapCurrentVariant();

  return (
    <>
      <GlobalStyle />
      {isScreenshot() && <DisableAnimations />}
      <Theme1Style forceDark={storycapVariantData?.forceDark} />
      <Providers>
        <Story />
      </Providers>
    </>
  );
};

export default ProjectDecorator;
