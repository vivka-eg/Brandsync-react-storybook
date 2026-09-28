import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsBadge } from '@brandsync/react';

const meta: Meta<typeof BsBadge> = {
  title: 'Components/BsBadge',
  component: BsBadge,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'info', 'error', 'neutral', 'inverse'],
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
