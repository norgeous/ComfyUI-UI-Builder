import { createGlobalStyle } from 'styled-components';

export const Theme1Style = createGlobalStyle`
  :root {
    --primary: #088;
    --radius: 4px;
  }
`;

export const GlobalStyle = createGlobalStyle`
  :root {
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
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: var(--page-bg);
    color: var(--page-fg);
    height: 100svh;

    color-scheme: light;
    @media (prefers-color-scheme: dark) {
      color-scheme: dark;
    }
  }

  #storybook-root{
    height: 100%;
  }
`;
