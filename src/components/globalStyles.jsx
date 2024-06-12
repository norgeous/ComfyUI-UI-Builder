import ConfigsContext from '@/contexts/ConfigsContext';
import { useContext } from 'react';
import { createGlobalStyle, css } from 'styled-components';
import Color from 'colorjs.io';

const inventFG = color => {
  const c = new Color(color);
  const b = new Color('black');
  const w = new Color('white');
  const contrastPB = c.contrast(b, 'WCAG21');
  const contrastPW = c.contrast(w, 'WCAG21');

  return contrastPB > contrastPW ? 'black' : 'white';
};

const inventBG = color => {
  const c = new Color(color);
  const b = new Color('black');
  const w = new Color('white');
  const contrastPB = c.contrast(b, 'WCAG21');
  const contrastPW = c.contrast(w, 'WCAG21');

  return contrastPB > contrastPW ? 'black' : 'white';
};

// 1. is the secondary (bg) colour dark or light...

export const Theme1Style = createGlobalStyle`
  :root {
    ${({ radius = '4px', primary = 'pink', secondary = 'purple' }) => css`
      --radius: ${radius};
      --primary: ${primary};
      --primary-fg: ${inventFG(primary)};
      --fg: ${inventFG(secondary)};
      --bg0: ${secondary};
      --bg1: ${inventBG(secondary, 1)};
      --bg2: ${inventBG(secondary, 2)};
      --bg3: ${inventBG(secondary, 3)};
    `};
  }
`;

export const Theme = () => {
  const { config } = useContext(ConfigsContext);

  return (
    <Theme1Style
      radius={config.configData.theme?.radius}
      primary={config.configData.theme?.primary}
      secondary={config.configData.theme?.secondary}
    />
  );
};

const darkOverrides = css`
  --fg: #eee;
  --lightness-bg0: 5%;
  --lightness-bg1: 10%;
  --lightness-bg2: 15%;
  --lightness-bg3: 20%;
`;

export const GlobalStyle = createGlobalStyle`
  :root {
    --fg: #111;
    --lightness-bg0: 95%;
    --lightness-bg1: 90%;
    --lightness-bg2: 85%;
    --lightness-bg3: 80%;

    @media (prefers-color-scheme: dark) {
      ${darkOverrides}
    }

    ${({ forceDark }) => forceDark && darkOverrides}

    /* --primary: hsl(var(--hue1) var(--saturation1) 50%); */
    --input-outline: var(--primary);
    --input-border: var(--primary);

    --back-bg: hsl(var(--hue1) var(--saturation1) var(--lightness-bg0));
    --page-bg: hsl(var(--hue1) var(--saturation1) var(--lightness-bg1));
    --surface-bg: hsl(var(--hue1) var(--saturation1) var(--lightness-bg2));
    --header-bg: hsl(var(--hue1) var(--saturation1) var(--lightness-bg3));
    --input-bg: hsl(var(--hue1) var(--saturation1) var(--lightness-bg3));
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: var(--page-bg);
    color: var(--fg);
    height: 100svh;

    color-scheme: light;
    @media (prefers-color-scheme: dark) {
      color-scheme: dark;
    }
  }

  #storybook-root {
    height: 100%;
  }

  .muted {
    opacity: 0.4;
  }

  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.5);
    border-radius: 20px;
    border: transparent;
  }
`;
