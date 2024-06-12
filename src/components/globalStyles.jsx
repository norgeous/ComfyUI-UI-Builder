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

const setOKLCHLightness = (color, lightness) => {
  const c = new Color(color);
  c.oklch.l = lightness;
  return c.toString({ format: 'hex' });
};

export const Theme1Style = createGlobalStyle`
  :root {
    ${({ radius = '4px', scheme = 'darkorchid blueviolet' }) => {
      const parts = scheme.split(' ');
      const [bg, accent] = [parts[0], parts[1] || parts[0]];

      const bgsLight = [
        setOKLCHLightness(bg, 0.9),
        setOKLCHLightness(bg, 0.8),
        setOKLCHLightness(bg, 0.7),
        setOKLCHLightness(bg, 0.5),
      ];

      const bgsDark = [
        setOKLCHLightness(bg, 0.1),
        setOKLCHLightness(bg, 0.2),
        setOKLCHLightness(bg, 0.3),
        setOKLCHLightness(bg, 0.5),
      ];

      const light = css`
        --bg0: ${bgsLight[0]};
        --bg1: ${bgsLight[1]};
        --bg2: ${bgsLight[2]};
        --bg3: ${bgsLight[3]};
        --fg0: ${inventFG(bgsLight[0])};
        --fg1: ${inventFG(bgsLight[1])};
        --fg2: ${inventFG(bgsLight[2])};
        --fg3: ${inventFG(bgsLight[3])};
      `;

      const dark = css`
        --bg0: ${bgsDark[0]};
        --bg1: ${bgsDark[1]};
        --bg2: ${bgsDark[2]};
        --bg3: ${bgsDark[3]};
        --fg0: ${inventFG(bgsDark[0])};
        --fg1: ${inventFG(bgsDark[1])};
        --fg2: ${inventFG(bgsDark[2])};
        --fg3: ${inventFG(bgsDark[3])};
      `;

      return css`
        --radius: ${radius};
        --accent: ${accent};
        --accent-fg: ${inventFG(accent)};

        ${light}

        @media (prefers-color-scheme: dark) {
          ${dark}
        }

        ${({ forceDark }) => forceDark && dark}
      `;
    }};
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

// const darkOverrides = css`
//   --fg: #eee;
//   --lightness-bg0: 5%;
//   --lightness-bg1: 10%;
//   --lightness-bg2: 15%;
//   --lightness-bg3: 20%;
// `;

/* :root {
    --fg: #111;
    --lightness-bg0: 95%;
    --lightness-bg1: 90%;
    --lightness-bg2: 85%;
    --lightness-bg3: 80%;

    @media (prefers-color-scheme: dark) {
      ${darkOverrides}
    }

    ${({ forceDark }) => forceDark && darkOverrides}

    --primary: hsl(var(--hue1) var(--saturation1) 50%);
    --input-outline: var(--primary);
    --input-border: var(--primary);

    --back-bg: hsl(var(--hue1) var(--saturation1) var(--lightness-bg0));
    --page-bg: hsl(var(--hue1) var(--saturation1) var(--lightness-bg1));
    --surface-bg: hsl(var(--hue1) var(--saturation1) var(--lightness-bg2));
    --header-bg: hsl(var(--hue1) var(--saturation1) var(--lightness-bg3));
    --input-bg: hsl(var(--hue1) var(--saturation1) var(--lightness-bg3));
  } */

export const GlobalStyle = createGlobalStyle`
  body {
    background: var(--bg0);
    color: var(--fg0);

    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
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
