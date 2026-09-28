import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsLogo } from '@brandsync/react';

const meta: Meta<typeof BsLogo> = {
  title: 'Components/BsLogo',
  component: BsLogo,
  parameters: {
    docs: {
      description: {
        component:
          'The BrandSync brand mark, as its own standalone component — shared by `BsNavigationHeader` and ' +
          '`BsNavigationDrawer`.\n\n' +
          '**When to use:** anywhere the BrandSync logo/icon needs to render — a navigation header, a nav ' +
          'drawer, etc.\n\n' +
          '**When not to use:** the Genie AI chat panel\'s own brand mark — that\'s a different logo ' +
          '(`BsChatbotHeader`\'s own inline Genie asset), not this one.\n\n' +
          '`variant="custom"` is an escape hatch for a consuming app that needs to show a different ' +
          'product\'s logo in the same slot (e.g. a white-labeled deployment, or a logo fetched at runtime), ' +
          'via `src`/`alt`, instead of the built-in BrandSync assets. This component deliberately does not ' +
          'fetch that image itself — network calls, loading/error states, and caching are the consuming ' +
          'app\'s responsibility.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['full', 'mark', 'custom'],
      description:
        'How much of the logo to render. `full` is the icon + "EG BrandSync" wordmark; `mark` is just the ' +
        'icon, no wordmark; `custom` renders a consumer-supplied image via `src`/`alt` instead of a ' +
        'built-in BrandSync asset.',
    },
    background: {
      control: 'select',
      options: ['auto', 'light', 'dark'],
      description:
        'Which pre-built asset to use for `variant="full"` — a genuinely separate, differently-drawn ' +
        'dark-background asset, not a CSS currentColor swap of identical paths. `"auto"` (default) renders ' +
        'both assets and lets CSS pick one based on the ambient theme, so the logo just follows dark mode ' +
        'with no wiring needed. Set `"light"`/`"dark"` explicitly to pin one regardless of the ambient ' +
        'theme. Has no effect on `variant="mark"` — there\'s no separate dark version of the icon-only mark.',
    },
    src: {
      control: 'text',
      description:
        '`variant="custom"` only: the image URL to render (e.g. a URL your app already fetched from a logo ' +
        'API). Ignored for `full`/`mark`.',
    },
    alt: {
      control: 'text',
      description:
        '`variant="custom"` only: accessible alt text for the image — a product logo is meaningful content ' +
        '(whose brand is this?), not decorative, so set this to something real (e.g. the product/company ' +
        'name). Falls back to `alt=""` (decorative) when unset. Ignored for `full`/`mark` (those already ' +
        'carry their own fixed `aria-label="BrandSync"`).',
    },
  },
  args: {
    variant: 'full',
    background: 'auto',
  },
};

export default meta;
type Story = StoryObj<typeof BsLogo>;

export const Full: Story = {};

export const Mark: Story = {
  args: { variant: 'mark' },
};

export const FullDark: Story = {
  name: 'Full (dark, explicit)',
  args: { background: 'dark' },
  render: args => (
    <div style={{ background: 'var(--bs-surface-inverse, #1a1a1a)', padding: 24, display: 'inline-flex' }}>
      <BsLogo {...args} />
    </div>
  ),
};

export const Custom: Story = {
  name: 'Custom (consumer-supplied image)',
  args: {
    variant: 'custom',
    src: 'https://placehold.co/160x44/0062c1/white?text=Acme+Co',
    alt: 'Acme Co',
  },
};
