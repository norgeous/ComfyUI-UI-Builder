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

  return contrastPB > contrastPW ? '#000000' : '#FFFFFF';
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
        setOKLCHLightness(bg, 0.86),
        setOKLCHLightness(bg, 0.82),
        setOKLCHLightness(bg, 0.78),
        setOKLCHLightness(bg, 0.74),
        setOKLCHLightness(bg, 0.55),
      ];

      const bgsDark = [
        setOKLCHLightness(bg, 0.1),
        setOKLCHLightness(bg, 0.14),
        setOKLCHLightness(bg, 0.18),
        setOKLCHLightness(bg, 0.22),
        setOKLCHLightness(bg, 0.26),
        setOKLCHLightness(bg, 0.45),
      ];

      const light = css`
        --bg0: ${bgsLight[0]};
        --bg1: ${bgsLight[1]};
        --bg2: ${bgsLight[2]};
        --bg3: ${bgsLight[3]};
        --bg4: ${bgsLight[4]};
        --bg5: ${bgsLight[5]};
        --fg0: ${inventFG(bgsLight[0])};
        --fg1: ${inventFG(bgsLight[1])};
        --fg2: ${inventFG(bgsLight[2])};
        --fg3: ${inventFG(bgsLight[3])};
        --fg4: ${inventFG(bgsLight[4])};
        --fg5: ${inventFG(bgsLight[5])};
        --fg-mute: ${inventFG(bgsLight[0])}99; // 60% opacity
      `;

      const dark = css`
        --bg0: ${bgsDark[0]};
        --bg1: ${bgsDark[1]};
        --bg2: ${bgsDark[2]};
        --bg3: ${bgsDark[3]};
        --bg4: ${bgsDark[4]};
        --bg5: ${bgsDark[5]};
        --fg0: ${inventFG(bgsDark[0])};
        --fg1: ${inventFG(bgsDark[1])};
        --fg2: ${inventFG(bgsDark[2])};
        --fg3: ${inventFG(bgsDark[3])};
        --fg4: ${inventFG(bgsDark[4])};
        --fg5: ${inventFG(bgsDark[5])};
        --fg-mute: ${inventFG(bgsDark[0])}99; // 60% opacity
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
      scheme={config.configData.theme?.scheme}
    />
  );
};

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
    color: var(--fg-mute);
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--accent);
    border-radius: 20px;
    border: transparent;
  }
`;

export const DisableAnimations = createGlobalStyle`
  *,
  *::before,
  *::after {
    transition: none !important;
    animation: none !important;
  }
  input {
    caret-color: transparent !important;
  }
`;

// a bit like a mixin
export const bgfg = level => css`
  background: var(${`--bg${level}`});
  color: var(${`--fg${level}`});
`;
