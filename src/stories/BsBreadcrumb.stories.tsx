import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsBreadcrumb } from '@brandsync/react';

const meta: Meta<typeof BsBreadcrumb> = {
  title: 'Components/BsBreadcrumb',
  component: BsBreadcrumb,
  parameters: {
    docs: {
      description: {
        component:
          'A single crumb within a `<bs-breadcrumbs>` trail: a leading separator icon plus either a link, ' +
          'plain text, or the current-page label, depending on `current`/`href`. Follows the W3C ARIA ' +
          'Authoring Practices breadcrumb pattern — the current page is marked `aria-current="page"` and is ' +
          'never a link, even when `href` is also set.\n\n' +
          '**When to use:** as one crumb inside a `<bs-breadcrumbs>` trail.\n\n' +
          '**When not to use:** standalone, outside a `<bs-breadcrumbs>` wrapper — its `<ol>`/`<nav>` context ' +
          'and first-child-aware separator hiding depend on that parent structure.',
      },
    },
  },
  argTypes: {
    href: {
      control: 'text',
      description:
        'Destination for a non-current crumb. Ignored when `current` is true — the current page is never a link, even if `href` is set.',
    },
    current: {
      control: 'boolean',
      description:
        'Whether this crumb is the current page. Renders as plain (non-link) text marked `aria-current="page"`, reflected as an attribute so consumers/CSS can target `bs-breadcrumb[current]`.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description:
        'Size variant. Normally set automatically by a parent `<bs-breadcrumbs size="...">`, which propagates its own `size` to every slotted crumb — can also be set directly on a standalone crumb. `sm` scales down font-size/line-height only; the separator icon\'s pixel size is unchanged. Reflected so consumers/CSS can target `bs-breadcrumb[size="sm"]`.',
    },
  },
  args: {
    href: '/settings',
    current: false,
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof BsBreadcrumb>;

// A single crumb is meant to live inside a <bs-breadcrumbs> trail, which owns the <nav>/<ol>
// list semantics -- wrapping it here keeps the isolated story visually honest.
export const Link: Story = {
  render: args => (
    <nav aria-label="Breadcrumb">
      <ol style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        <BsBreadcrumb {...args}>Settings</BsBreadcrumb>
      </ol>
    </nav>
  ),
};

export const Current: Story = {
  args: { current: true },
  render: args => (
    <nav aria-label="Breadcrumb">
      <ol style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        <BsBreadcrumb {...args}>Profile</BsBreadcrumb>
      </ol>
    </nav>
  ),
};

// Neither current nor href -- e.g. an archived section heading. Renders as plain, non-interactive
// text with the same muted styling as a link.
export const NonLink: Story = {
  name: 'Non-link crumb',
  args: { href: undefined },
  render: args => (
    <nav aria-label="Breadcrumb">
      <ol style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        <BsBreadcrumb {...args}>Archived section</BsBreadcrumb>
      </ol>
    </nav>
  ),
};

export const AllSizes: Story = {
  name: 'All sizes',
  render: () => (
    <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
      {(['sm', 'md'] as const).map(size => (
        <nav aria-label="Breadcrumb" key={size}>
          <ol style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
            <BsBreadcrumb href="/" size={size}>
              Home
            </BsBreadcrumb>
            <BsBreadcrumb current size={size}>
              Settings
            </BsBreadcrumb>
          </ol>
        </nav>
      ))}
    </div>
  ),
};
