import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsBreadcrumb, BsBreadcrumbOverflow, BsBreadcrumbs } from '@brandsync/react';

const overflowItems = [
  { label: 'Products', href: '/products' },
  { label: 'Category', href: '/products/category' },
];

const meta: Meta<typeof BsBreadcrumbs> = {
  title: 'Components/BsBreadcrumbs',
  component: BsBreadcrumbs,
  parameters: {
    docs: {
      description: {
        component:
          'A breadcrumb trail container: a real `<nav>` landmark wrapping an `<ol>`, meant to be populated ' +
          'with slotted `<bs-breadcrumb>` (and, where the consumer wants a collapsed-items disclosure, ' +
          '`<bs-breadcrumb-overflow>`) children. This component is intentionally thin — it owns only the ' +
          '`<nav>` landmark and list semantics; there is no automatic collapsing, the consumer decides what\'s ' +
          'visible and manually places a `<bs-breadcrumb-overflow>` wherever needed.\n\n' +
          '**When to use:** showing a user\'s current location within a hierarchical page structure, with a ' +
          'path back to its ancestors.\n\n' +
          '**When not to use:** primary in-app navigation — use `bs-navigation-drawer`/`bs-navigation-header` ' +
          'instead; a flat set of unrelated pages with no hierarchy — breadcrumbs imply ancestry, not just ' +
          'history.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Accessible name for the `<nav>` landmark, via `aria-label`.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description:
        'Size variant, propagated as a JS property to every slotted `bs-breadcrumb`/`bs-breadcrumb-overflow` child — this container has no visual sizing of its own, so propagation is the only way setting `size` here reaches every crumb. Re-propagated on `size` changes and whenever the slotted children change.',
    },
  },
  args: {
    label: 'Breadcrumb',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof BsBreadcrumbs>;

// A short trail needs no overflow at all -- bs-breadcrumb-overflow is only placed by the consumer
// when there are actually hidden crumbs to disclose.
export const Default: Story = {
  render: args => (
    <BsBreadcrumbs {...args}>
      <BsBreadcrumb href="/">Home</BsBreadcrumb>
      <BsBreadcrumb href="/settings">Settings</BsBreadcrumb>
      <BsBreadcrumb current>Profile</BsBreadcrumb>
    </BsBreadcrumbs>
  ),
};

// A longer trail where the consumer has chosen to hide the middle crumbs behind a manually placed
// BsBreadcrumbOverflow, reachable via its ellipsis disclosure.
export const WithOverflow: Story = {
  name: 'With overflow',
  render: args => (
    <BsBreadcrumbs {...args}>
      <BsBreadcrumb href="/">Home</BsBreadcrumb>
      <BsBreadcrumbOverflow items={overflowItems} />
      <BsBreadcrumb href="/settings/profile">Profile</BsBreadcrumb>
      <BsBreadcrumb current>Edit</BsBreadcrumb>
    </BsBreadcrumbs>
  ),
};

// size="sm" set once on the container, propagated to every slotted crumb (and the overflow
// disclosure) so it doesn't need to be repeated on each child.
export const Small: Story = {
  args: { size: 'sm' },
  render: args => (
    <BsBreadcrumbs {...args}>
      <BsBreadcrumb href="/">Home</BsBreadcrumb>
      <BsBreadcrumb href="/settings">Settings</BsBreadcrumb>
      <BsBreadcrumb current>Profile</BsBreadcrumb>
    </BsBreadcrumbs>
  ),
};

// A crumb with neither `current` nor `href` -- not the current page, but also not navigable (e.g.
// an archived section heading). Renders as plain, non-interactive text.
export const NonLinkCrumb: Story = {
  name: 'Non-link crumb',
  render: args => (
    <BsBreadcrumbs {...args}>
      <BsBreadcrumb href="/">Home</BsBreadcrumb>
      <BsBreadcrumb>Archived section</BsBreadcrumb>
      <BsBreadcrumb current>Report</BsBreadcrumb>
    </BsBreadcrumbs>
  ),
};
