import type { Preview, Decorator } from '@storybook/react-vite';

// The single most important line in this file -- per brandsync-web-components' own CLAUDE.md:
// every bs-* component's shadow-DOM CSS is written entirely against --bs-* custom properties, and
// never injects them itself. Skipping this import is the #1 cause of a bs-* component rendering
// with no visible border/background and near-zero size, with no console error.
import '@brandsync/wc/dist/brandsync-wc/brandsync-wc.css';

const withThemeAttribute: Decorator = (story, context) => {
  const theme = context.globals.theme ?? 'light';
  document.documentElement.setAttribute('data-theme', theme);
  document.body.style.background = 'var(--bs-surface-base)';
  return story();
};

const preview: Preview = {
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
