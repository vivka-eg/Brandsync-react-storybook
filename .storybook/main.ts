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
  // Serves public/ at the manager/preview's own document root (e.g. public/brand-logo.svg ->
  // ./brand-logo.svg), in both `storybook dev` and `build-storybook`. Referenced with relative
  // paths everywhere, not absolute ones -- this site deploys to GitHub Pages as a *project* page
  // (a subpath, not the domain root), where an absolute root path 404s.
  staticDirs: ['../public'],
  // Overrides Storybook's own default favicon with favicon.svg (BrandSync mark + a small React
  // badge) -- browsers use the last matching <link rel="icon">, so appending ours after the
  // existing head content is enough to replace it without needing to strip the original tag out.
  //
  // The `?v=1` query string is load-bearing, not cosmetic: browsers cache favicons far more
  // aggressively than normal page assets (independent of the page's own cache headers, and often
  // surviving a hard reload or even an incognito window), so anyone who already loaded this site
  // before this file existed can keep seeing Storybook's old default indefinitely otherwise. A
  // querystring makes it a new URL the browser has never cached. Bump it if the icon ever changes
  // again.
  managerHead: head => `
    ${head}
    <link rel="icon" href="./favicon.svg?v=1" type="image/svg+xml" />
  `,
};

export default config;
