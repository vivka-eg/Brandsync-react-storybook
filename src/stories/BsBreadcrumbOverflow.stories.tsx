import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsBreadcrumb, BsBreadcrumbOverflow } from '@brandsync/react';

const overflowItems = [
  { label: 'Products', href: '/products' },
  { label: 'Category', href: '/products/category' },
];

const meta: Meta<typeof BsBreadcrumbOverflow> = {
  title: 'Components/BsBreadcrumbOverflow',
  component: BsBreadcrumbOverflow,
  parameters: {
    docs: {
      description: {
        component:
          'A manually-placed collapsed-items disclosure for a `<bs-breadcrumbs>` trail: a leading separator ' +
          'plus an icon-only ellipsis button that reveals a `bs-menu` popup listing every hidden crumb.\n\n' +
          'Unlike an earlier automatic-collapse design, this component does no collapsing logic itself — the ' +
          'consumer decides which crumbs to hide and places this element wherever they want the disclosure. ' +
          'Hidden items with an `href` render as real `<a href>` rows inside the popup (not a button) so ' +
          'client-side routers that intercept anchor clicks keep working; hidden items without an `href` ' +
          'render as plain non-interactive text.\n\n' +
          '**When to use:** inside a `<bs-breadcrumbs>` trail, wherever the consumer wants an interactive ' +
          'disclosure for crumbs they\'ve chosen not to render directly.\n\n' +
          '**When not to use:** as an automatic collapsing mechanism — there is none; the consumer decides ' +
          'what\'s hidden.',
      },
    },
  },
  argTypes: {
    overflowLabel: {
      control: 'text',
      description: 'Accessible name (`aria-label`) for the icon-only ellipsis trigger button.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description:
        'Size variant. Normally set automatically by a parent `<bs-breadcrumbs size="...">` — scales the popup rows\' font-size/line-height only; the separator/ellipsis icons\' pixel sizes are unchanged. Reflected so consumers/CSS can target `bs-breadcrumb-overflow[size="sm"]`.',
    },
  },
  args: {
    items: overflowItems,
    overflowLabel: 'Show hidden breadcrumbs',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof BsBreadcrumbOverflow>;

// Placed manually inside a trail wherever the consumer has chosen to hide crumbs -- there's no
// automatic collapsing, so it's shown here alongside its neighboring crumbs for context.
export const Default: Story = {
  render: args => (
    <nav aria-label="Breadcrumb">
      <ol style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        <BsBreadcrumb href="/">Home</BsBreadcrumb>
        <BsBreadcrumbOverflow {...args} />
        <BsBreadcrumb current>Edit</BsBreadcrumb>
      </ol>
    </nav>
  ),
};

// overflowLabel is the ellipsis button's accessible name (aria-label) -- worth overriding for
// localization or to be more specific about what's hidden.
export const CustomOverflowLabel: Story = {
  name: 'Custom overflow label',
  args: { overflowLabel: 'Show hidden steps' },
  render: args => (
    <nav aria-label="Breadcrumb">
      <ol style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        <BsBreadcrumb href="/">Home</BsBreadcrumb>
        <BsBreadcrumbOverflow {...args} />
        <BsBreadcrumb current>Edit</BsBreadcrumb>
      </ol>
    </nav>
  ),
};

export const Small: Story = {
  args: { size: 'sm' },
  render: args => (
    <nav aria-label="Breadcrumb">
      <ol style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        <BsBreadcrumb href="/" size="sm">
          Home
        </BsBreadcrumb>
        <BsBreadcrumbOverflow {...args} />
        <BsBreadcrumb current size="sm">
          Edit
        </BsBreadcrumb>
      </ol>
    </nav>
  ),
};
