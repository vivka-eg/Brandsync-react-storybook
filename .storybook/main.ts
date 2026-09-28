import type { StorybookConfig } from '@storybook/react-vite';

// Unlike the main brandsync-web-components repo (which demos local source via
// @storybook/web-components-vite), this Storybook exists specifically to prove out @brandsync/react
// as installed from the public npm registry -- every story imports components from
// '@brandsync/react' as a real dependency, never from local source.
const config: StorybookConfig = {
  stories: ['../src/stories/**/*.stories.tsx', '../src/stories/**/*.mdx'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  // Serves public/ at the site root (e.g. public/brand-logo.svg -> /brand-logo.svg), so
  // .storybook/manager.ts's brandImage can reference it as a plain absolute path in both
  // `storybook dev` and `build-storybook`.
  staticDirs: ['../public'],
};

export default config;
