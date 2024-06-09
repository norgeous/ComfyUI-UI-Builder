import ConfigsContext from '@/contexts/ConfigsContext';
import { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';

export const Theme1Style = createGlobalStyle`
  :root {
    --hue1: ${({ hue }) => hue ?? 270};
    --saturation1: 50%;
    --radius: 4px;
  }
`;

export const Theme = () => {
  const { config } = useContext(ConfigsContext);

  return <Theme1Style hue={config.configData.theme?.hue} />;
};

export const GlobalStyle = createGlobalStyle`
  :root {
    --fg: #111;
    --lightness-bg0: 95%;
    --lightness-bg1: 90%;
    --lightness-bg2: 85%;
    --lightness-bg3: 80%;

    @media (prefers-color-scheme: dark) {
      --fg: #eee;
      --lightness-bg0: 5%;
      --lightness-bg1: 10%;
      --lightness-bg2: 15%;
      --lightness-bg3: 20%;
    }

    --primary: hsl(var(--hue1) var(--saturation1) 50%);  
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
