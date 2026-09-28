import type { Preview, Decorator } from '@storybook/react-vite';

// brandsync-tokens (package.json) is the canonical, versioned source of the --bs-* design tokens
// (colors, spacing, typography, dark-theme overrides via [data-theme="dark"]) that every bs-*
// component's shadow-DOM CSS is written against -- pinned here so this app controls its own token
// version, not just whatever @brandsync/wc happens to bundle.
//
// We don't `import 'brandsync-tokens/tokens.css'` directly, though: that package's shipped CSS
// currently starts with a `// ...` line comment, which is invalid CSS (JS/Sass-style, not `/* */`)
// -- harmless for dev (esbuild's non-minifying transform tolerates it), but a production
// `build-storybook` fails outright, since its minifier (lightningcss) parses CSS strictly and
// throws "Invalid empty selector" on that very first line.
//
// @brandsync/wc/dist/brandsync-wc/brandsync-wc.css re-bundles the exact same token values without
// that broken header, plus two things brandsync-tokens itself does NOT define: the document root
// font-family and bs-logo's dark-mode asset-visibility custom properties. So it's both the fix for
// the above and still required regardless -- skipping it is the #1 cause of a bs-* component
// rendering with no visible border/background and near-zero size, with no console error.
import '@brandsync/wc/dist/brandsync-wc/brandsync-wc.css';

// brandsync-tokens defines --bs-typography-font-family-* as "Roboto" and @brandsync/wc's CSS
// applies that to the document root, but neither actually loads the Roboto font file -- that's
// the consuming app's job (see brandsync-web-components' own README.md). Without this, every
// bs-* component silently falls back to the browser's default serif/sans-serif font, with no
// console error.
//
// Loaded as `rel="preload"` + swapped to `rel="stylesheet"` on load, NOT a plain
// `rel="stylesheet"` -- a plain stylesheet link is render-blocking, and this specific Google
// Fonts request has been observed to hang indefinitely from within Storybook's Docs page in this
// dev environment. `preload` never blocks paint regardless of whether the request ever resolves.
const robotoLink = document.createElement('link');
robotoLink.rel = 'preload';
robotoLink.as = 'style';
robotoLink.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;600;700;900&display=swap';
robotoLink.onload = () => {
  robotoLink.rel = 'stylesheet';
};
document.head.appendChild(robotoLink);

const withThemeAttribute: Decorator = (story, context) => {
  const theme = context.globals.theme ?? 'light';
  document.documentElement.setAttribute('data-theme', theme);
  document.body.style.background = 'var(--bs-surface-base)';
  return story();
};

const preview: Preview = {
  // Generates a Docs page for every story automatically (props table + whatever component/prop
  // descriptions each story's meta/argTypes provide), instead of requiring `tags: ['autodocs']`
  // to be repeated in every one of the 44 story files.
  tags: ['autodocs'],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'brandsync-tokens color theme',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  decorators: [withThemeAttribute],
};

export default preview;
