# Brandsync React Storybook

A Storybook showcase for [`@brandsync/react`](https://www.npmjs.com/package/@brandsync/react),
consuming it as a **real published npm package**, not local source. This exists specifically to
prove out the published package's own usage as a React consumer would experience it -- separate
from [brandsync-web-components](https://github.com/vivka-eg/Brandsync-web-components), whose own
Storybook demos local web-component source directly via `@storybook/web-components-vite`.

## Why a separate repo

Every component here is imported the same way a real consumer would:

```tsx
import { BsButton } from '@brandsync/react';
```

No relative imports into another repo's `src/`, no local `dist/` -- if a change lands here, it's
because the *published* package's own behavior changed, not because of anything specific to this
repo's own source.

## Adding a story for another component

1. Add a `src/stories/<ComponentName>.stories.tsx` file, following the existing files' pattern
   (`Meta`/`StoryObj` from `@storybook/react-vite`, importing the component from `@brandsync/react`).
2. `@brandsync/react`'s own exported prop types (via its generated `.d.ts`) give you full
   autocomplete/type-checking for each component's props -- no need to hand-copy prop lists from the
   source repo.

## Local development

```
npm install
npm run storybook
```

## Deployment

Pushing to `main` triggers `.github/workflows/storybook.yml`, which builds and deploys this
Storybook to GitHub Pages.
