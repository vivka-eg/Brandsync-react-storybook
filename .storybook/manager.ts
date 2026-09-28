import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

// The manager UI (sidebar/toolbar) is a separate bundle from the preview iframe our stories
// render in, so it can't render a live <BsLogo />/React component here -- brandImage needs a
// plain static image. brand-logo.svg (served via main.ts's staticDirs) pairs the real BrandSync
// mark (extracted from @brandsync/wc's own bs-logo source) with React's own atom logo, to make it
// obvious at a glance that this is the @brandsync/react library, not the web-components one.
addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Brandsync React',
    brandUrl: 'https://github.com/vivka-eg/Brandsync-react',
    brandImage: '/brand-logo.svg',
    brandTarget: '_self',
  }),
});
