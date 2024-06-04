import { createGlobalStyle } from 'styled-components';

export const Theme1Style = createGlobalStyle`
  :root {
    --hue1: 270;
    --saturation1: 50%;
    --radius: 4px;
  }
`;

export const GlobalStyle = createGlobalStyle`
  /* :root {
    --primary: oklch(50% var(--chroma1) var(--hue1));
    --hue2: calc(var(--hue1) + 90);
    
    --bg-base: white;
    --fg-base: black;

    @media (prefers-color-scheme: dark) {
      --bg-base: black;
      --fg-base: white;
    }

    --page-bg: color-mix(in srgb, var(--bg-base) 95%, var(--primary));
    --page-fg: color-mix(in srgb, var(--fg-base) 95%, var(--primary));

    --surface-bg: color-mix(in srgb, var(--bg-base) 85%, var(--primary));
    --surface-fg: color-mix(in srgb, var(--fg-base) 85%, var(--primary));

    --header-bg: color-mix(in srgb, var(--bg-base) 75%, var(--primary));
    --header-fg: color-mix(in srgb, var(--fg-base) 75%, var(--primary));

    --input-outline: var(--primary);
    --input-border: color-mix(in srgb, var(--bg-base) 50%, var(--primary));
    --input-bg: color-mix(in srgb, var(--bg-base) 75%, var(--primary));
    --input-fg: color-mix(in srgb, var(--fg-base) 50%, var(--primary));
  } */

  :root {
    --lightness-bg1: 90%;
    --lightness-bg2: 85%;
    --lightness-bg3: 80%;
    --lightness-fg: 8%;
    --fg: #111;

    @media (prefers-color-scheme: dark) {
      --lightness-bg1: 10%;
      --lightness-bg2: 15%;
      --lightness-bg3: 20%;
      --lightness-fg: 92%;
      --fg: #eee;
    }

    --primary: hsl(var(--hue1) var(--saturation1) 50%);  
    --input-outline: var(--primary);
    --input-border: var(--primary);

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

  #storybook-root{
    height: 100%;
  }

  .muted {
    opacity: 0.4;
  }
`;
