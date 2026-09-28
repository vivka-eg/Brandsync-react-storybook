import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsInput, BsNavigationDrawer, BsNavigationDrawerItem } from '@brandsync/react';

const BookIcon = () => (
  <svg slot="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M4 4.5C4 3.67157 4.67157 3 5.5 3H18.5C19.3284 3 20 3.67157 20 4.5V19.5C20 20.3284 19.3284 21 18.5 21H5.5C4.67157 21 4 20.3284 4 19.5V4.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path d="M8 3V21" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const GridIcon = () => (
  <svg slot="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="3.5" y="3.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="13.5" y="3.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="3.5" y="13.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="13.5" y="13.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const AccessibilityIcon = () => (
  <svg slot="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="8" r="1.25" fill="currentColor" />
    <path d="M6.5 10.5H17.5M12 10.5V17M9.5 17L11 13M14.5 17L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const meta: Meta<typeof BsNavigationDrawer> = {
  title: 'UI Shell/BsNavigationDrawer',
  component: BsNavigationDrawer,
  parameters: {
    docs: {
      description: {
        component:
          'A left-side persistent navigation sidebar: the BrandSync logo, a "Main Menu" title with a collapse ' +
          'toggle, a reserved slot for a search field, and a scrollable list of nav items.\n\n' +
          '**When to use:** the primary in-app navigation, shown alongside `bs-navigation-header` (typically ' +
          "that header's `with-navigation-drawer` alignment, which omits its own logo since this component " +
          "already renders one — or the reverse pairing, this drawer's own `showLogo={false}` alongside a " +
          'header that keeps its logo instead).\n\n' +
          '**When not to use:** the top navigation bar itself — use `bs-navigation-header` instead.\n\n' +
          'This component renders a real `<nav>` landmark, labeled via `aria-label={heading}` so the landmark ' +
          'still has a name even when collapsed. `collapsed` narrows the drawer to a 96px icon-only rail: the ' +
          'title text disappears, the logo swaps to its icon-only mark, the `search` slot is replaced by a ' +
          'compact search-trigger button, and every top-level `bs-navigation-drawer-item` switches from ' +
          'icon-beside-label to icon-above-caption.',
      },
    },
  },
  argTypes: {
    heading: {
      control: 'text',
      description:
        "Heading text shown next to the collapse toggle, and used as the `<nav>` landmark's `aria-label` (so " +
        'the landmark keeps a name even when `collapsed` hides the visible text).',
    },
    collapsible: {
      control: 'boolean',
      description:
        'Whether this drawer can be collapsed at all. `false` renders no collapse toggle/chevron — a "fixed" ' +
        "side nav that's always fully expanded. `collapsed` is ignored while this is `false`.",
    },
    collapsed: {
      control: 'boolean',
      description:
        'Narrows the drawer to a 96px icon-only rail. Mutable and reflected — clicking the collapse toggle ' +
        "toggles this directly, and this component keeps every direct-child `bs-navigation-drawer-item`'s own " +
        '`collapsed` prop synced to match.',
    },
    logoBackground: {
      control: 'select',
      options: ['auto', 'light', 'dark'],
      description:
        "Forwarded straight to both internal `bs-logo` elements' own `background` prop. Defaults to `\"auto\"`, " +
        'which follows the ambient `[data-theme="dark"]` state automatically. Set `"light"`/`"dark"` ' +
        "explicitly only if you've overridden the drawer's background color yourself without setting " +
        '`[data-theme="dark"]`, and need to pin the logo regardless of theme.',
    },
    showLogo: {
      control: 'boolean',
      description:
        'Whether to render the BrandSync logo at all. Defaults to `true`. This drawer is normally the one ' +
        'that owns the logo when paired with a `bs-navigation-header` (that header\'s own ' +
        '`with-navigation-drawer` alignment omits its logo for exactly this reason) — but the reverse pairing ' +
        'works too, via this prop set to `false`.',
    },
  },
  args: {
    heading: 'Main Menu',
    collapsible: true,
    collapsed: false,
    logoBackground: 'auto',
    showLogo: true,
  },
};

export default meta;
type Story = StoryObj<typeof BsNavigationDrawer>;

export const Default: Story = {
  render: args => (
    <div style={{ height: '100vh', display: 'flex' }}>
      <BsNavigationDrawer {...args} onBsCollapse={collapsed => console.log('bsCollapse', collapsed)}>
        <BsInput slot="search" type="search" placeholder="Search" />
        <BsNavigationDrawerItem selected>Introduction</BsNavigationDrawerItem>
        <BsNavigationDrawerItem>Accessibility</BsNavigationDrawerItem>
        <BsNavigationDrawerItem expandable expanded>
          Foundation
          <BsNavigationDrawerItem slot="children" nested>
            Colors
          </BsNavigationDrawerItem>
          <BsNavigationDrawerItem slot="children" nested>
            Typography
          </BsNavigationDrawerItem>
          <BsNavigationDrawerItem slot="children" nested>
            Spacing
          </BsNavigationDrawerItem>
        </BsNavigationDrawerItem>
        <BsNavigationDrawerItem expandable>
          Components
          <BsNavigationDrawerItem slot="children" nested>
            Button
          </BsNavigationDrawerItem>
          <BsNavigationDrawerItem slot="children" nested>
            Checkbox
          </BsNavigationDrawerItem>
          <BsNavigationDrawerItem slot="children" nested>
            Switch
          </BsNavigationDrawerItem>
        </BsNavigationDrawerItem>
      </BsNavigationDrawer>
    </div>
  ),
};

export const WithIcons: Story = {
  name: 'With icons',
  render: args => (
    <div style={{ height: '100vh', display: 'flex' }}>
      <BsNavigationDrawer {...args}>
        <BsInput slot="search" type="search" placeholder="Search" />
        <BsNavigationDrawerItem selected>
          <AccessibilityIcon />
          Introduction
        </BsNavigationDrawerItem>
        <BsNavigationDrawerItem>
          <BookIcon />
          Accessibility
        </BsNavigationDrawerItem>
        <BsNavigationDrawerItem expandable expanded>
          <GridIcon />
          Foundation
          <BsNavigationDrawerItem slot="children" nested>
            Colors
          </BsNavigationDrawerItem>
          <BsNavigationDrawerItem slot="children" nested>
            Typography
          </BsNavigationDrawerItem>
        </BsNavigationDrawerItem>
      </BsNavigationDrawer>
    </div>
  ),
};

export const Collapsed: Story = {
  name: 'Side Nav Rail (collapsed)',
  args: { collapsed: true },
  render: args => (
    <div style={{ height: '100vh', display: 'flex' }}>
      <BsNavigationDrawer {...args}>
        <BsInput slot="search" type="search" placeholder="Search" />
        <BsNavigationDrawerItem selected>
          <AccessibilityIcon />
          Introduction
        </BsNavigationDrawerItem>
        <BsNavigationDrawerItem>
          <BookIcon />
          Accessibility
        </BsNavigationDrawerItem>
        <BsNavigationDrawerItem expandable>
          <GridIcon />
          Foundation
        </BsNavigationDrawerItem>
      </BsNavigationDrawer>
    </div>
  ),
};

export const WithoutSearch: Story = {
  name: 'Without a search slot',
  render: args => (
    <div style={{ height: '100vh', display: 'flex' }}>
      <BsNavigationDrawer {...args}>
        <BsNavigationDrawerItem selected>Introduction</BsNavigationDrawerItem>
        <BsNavigationDrawerItem>Accessibility</BsNavigationDrawerItem>
        <BsNavigationDrawerItem>Settings</BsNavigationDrawerItem>
      </BsNavigationDrawer>
    </div>
  ),
};
