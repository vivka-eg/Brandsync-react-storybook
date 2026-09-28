import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsButton, BsIconButton, BsNavigationHeader } from '@brandsync/react';

const SearchIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M11 11L14.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const BellIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M3 12.5H13L11.5 10.5V6.5C11.5 4.29086 9.98528 2.5 8 2.5C6.01472 2.5 4.5 4.29086 4.5 6.5V10.5L3 12.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M6.5 13.5C6.5 14.3284 7.17157 15 8 15C8.82843 15 9.5 14.3284 9.5 13.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const LeftSlotButtons = () => (
  <div slot="left" style={{ display: 'contents' }}>
    <BsButton variant="subtle" size="sm">
      Products
    </BsButton>
    <BsButton variant="subtle" size="sm">
      Solutions
    </BsButton>
    <BsButton variant="subtle" size="sm">
      Pricing
    </BsButton>
  </div>
);

const RightSlotActions = () => (
  <div slot="right" style={{ display: 'contents' }}>
    <BsIconButton size="sm" variant="subtle" ariaLabel="Search">
      <SearchIcon />
    </BsIconButton>
    <BsIconButton size="sm" variant="subtle" ariaLabel="Notifications">
      <BellIcon />
    </BsIconButton>
    <BsButton variant="primary" size="sm">
      Sign in
    </BsButton>
  </div>
);

const meta: Meta<typeof BsNavigationHeader> = {
  title: 'UI Shell/BsNavigationHeader',
  component: BsNavigationHeader,
  parameters: {
    docs: {
      description: {
        component:
          'The top-level navigation bar for a page: the BrandSync logo plus two consumer-provided slots for ' +
          'menu/action content (e.g. `bs-button`/`bs-icon-button` elements).\n\n' +
          '**When to use:** the persistent top bar of an application, above the page content.\n\n' +
          '**When not to use:** the header of a Genie AI chat panel — use `bs-chatbot-header` instead, which ' +
          "is purpose-built for that narrower layout and its own fixed action buttons.\n\n" +
          '`alignment` controls both whether the logo renders and how the two slots are laid out: `default` — ' +
          'logo on the left, `left` slot content immediately after it, `right` slot content pushed to the far ' +
          'right; `center` — logo and `right` slot both grow equally, which centers the `left` slot content in ' +
          'the middle of the bar; `with-navigation-drawer` — no logo at all (assumes a nav-drawer toggle is ' +
          "the leftmost thing on the page instead), `left` slot content starts at the bar's own left edge.",
      },
    },
  },
  argTypes: {
    alignment: {
      control: 'select',
      options: ['default', 'center', 'with-navigation-drawer'],
      description:
        "Controls whether the logo renders and how the `left`/`right` slots are laid out — see the " +
        "component description above for the three variants' exact behavior.",
    },
    logoBackground: {
      control: 'select',
      options: ['auto', 'light', 'dark'],
      description:
        "Forwarded straight to the internal `bs-logo`'s own `background` prop. Defaults to `\"auto\"`, which " +
        'follows the ambient `[data-theme="dark"]` state automatically. Set `"light"`/`"dark"` explicitly ' +
        "only if you've overridden the header's background color yourself without setting " +
        '`[data-theme="dark"]`, and need to pin the logo regardless of theme.',
    },
    skipToContentHref: {
      control: 'text',
      description:
        'Fragment/URL to jump to when the "Skip to main content" link is activated (e.g. `#main-content`, ' +
        "matching an id on your page's main landmark). Unset by default — the link is opt-in rather than " +
        "pointing at a guessed default id, since a skip link to a target that doesn't exist on the consumer's " +
        'page is worse than no skip link at all. Set this to the same id your page\'s `<main>` (or equivalent) ' +
        'already has to enable it.',
    },
  },
  args: {
    alignment: 'default',
    logoBackground: 'auto',
  },
};

export default meta;
type Story = StoryObj<typeof BsNavigationHeader>;

export const Default: Story = {
  render: args => (
    <BsNavigationHeader {...args}>
      <LeftSlotButtons />
      <RightSlotActions />
    </BsNavigationHeader>
  ),
};

export const Centered: Story = {
  args: { alignment: 'center' },
  render: args => (
    <BsNavigationHeader {...args}>
      <LeftSlotButtons />
      <RightSlotActions />
    </BsNavigationHeader>
  ),
};

export const WithNavigationDrawer: Story = {
  name: 'With navigation drawer (no logo)',
  args: { alignment: 'with-navigation-drawer' },
  render: args => (
    <BsNavigationHeader {...args}>
      <LeftSlotButtons />
      <RightSlotActions />
    </BsNavigationHeader>
  ),
};

export const WithSkipLink: Story = {
  name: 'With skip link',
  args: { skipToContentHref: '#main-content' },
  render: args => (
    <div>
      <BsNavigationHeader {...args}>
        <LeftSlotButtons />
        <RightSlotActions />
      </BsNavigationHeader>
      <main id="main-content" tabIndex={-1} style={{ padding: 24, fontFamily: 'sans-serif' }}>
        <h1 style={{ margin: 0 }}>Main content</h1>
        <p>This is the landmark the skip link jumps to.</p>
      </main>
    </div>
  ),
};
