import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

// The manager UI (sidebar/toolbar) is a separate bundle from the preview iframe our stories
// render in, so it can't render a live <BsLogo />/React component here -- brandImage needs a
// plain static image. brand-logo.svg (served via main.ts's staticDirs) pairs the real BrandSync
// mark (extracted from @brandsync/wc's own bs-logo source) with React's own atom logo, to make it
// obvious at a glance that this is the @brandsync/react library, not the web-components one.
//
// Deliberately a relative path, not '/brand-logo.svg' -- this site is deployed to GitHub Pages as
// a *project* page (github.com/vivka-eg/Brandsync-react -> vivka-eg.github.io/Brandsync-react/,
// not the domain root), so an absolute root path 404s there even though it resolves fine on
// localhost. A relative path resolves against the manager's own document location instead, which
// is correct in both places (and any other subpath this ever gets served from).
addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Brandsync React',
    brandUrl: 'https://github.com/vivka-eg/Brandsync-react',
    brandImage: './brand-logo.svg',
    brandTarget: '_self',
  }),
});
