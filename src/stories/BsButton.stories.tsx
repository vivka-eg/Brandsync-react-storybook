import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsButton } from '@brandsync/react';

const meta: Meta<typeof BsButton> = {
  title: 'Components/BsButton',
  component: BsButton,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'neutral', 'error', 'subtle', 'outlined', 'success', 'warning', 'info'],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof BsButton>;

export const Primary: Story = {
  render: args => <BsButton {...args}>Book room</BsButton>,
};

export const Neutral: Story = {
  args: { variant: 'neutral' },
  render: args => <BsButton {...args}>Cancel</BsButton>,
};

export const Outlined: Story = {
  args: { variant: 'outlined' },
  render: args => <BsButton {...args}>View details</BsButton>,
};

export const Disabled: Story = {
  args: { disabled: true },
  render: args => <BsButton {...args}>Book room</BsButton>,
};

export const AllVariants: Story = {
  name: 'All variants',
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <BsButton variant="primary">Primary</BsButton>
      <BsButton variant="neutral">Neutral</BsButton>
      <BsButton variant="error">Error</BsButton>
      <BsButton variant="subtle">Subtle</BsButton>
      <BsButton variant="outlined">Outlined</BsButton>
      <BsButton variant="success">Success</BsButton>
      <BsButton variant="warning">Warning</BsButton>
      <BsButton variant="info">Info</BsButton>
    </div>
  ),
};
