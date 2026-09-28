import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsBadge } from '@brandsync/react';

const meta: Meta<typeof BsBadge> = {
  title: 'Components/BsBadge',
  component: BsBadge,
  parameters: {
    docs: {
      description: {
        component:
          'A small status or category pill, usually paired with a label or list item.\n\n' +
          '**When to use:** communicating a short, fixed status (e.g. "Active", "On leave") or category label.\n\n' +
          '**When not to use:** as an interactive/clickable element — a badge is a label, not a control ' +
          '(use a button or chip component if it needs to be clickable), or for long text — badges are sized ' +
          'for one or two words.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'info', 'error', 'neutral', 'inverse'],
      description: 'Maps directly to the brandsync-tokens `--bs-badge-bg-*` / `--bs-badge-text-*` sets.',
    },
  },
  args: {
    variant: 'primary',
  },
};

export default meta;
type Story = StoryObj<typeof BsBadge>;

export const Primary: Story = {
  render: args => <BsBadge {...args}>New</BsBadge>,
};

export const AllVariants: Story = {
  name: 'All variants',
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <BsBadge variant="default">Default</BsBadge>
      <BsBadge variant="primary">Primary</BsBadge>
      <BsBadge variant="success">Active</BsBadge>
      <BsBadge variant="warning">Pending</BsBadge>
      <BsBadge variant="info">Info</BsBadge>
      <BsBadge variant="error">Failed</BsBadge>
      <BsBadge variant="neutral">Archived</BsBadge>
    </div>
  ),
};
