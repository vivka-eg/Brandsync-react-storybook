import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsButton } from '@brandsync/react';

const meta: Meta<typeof BsButton> = {
  title: 'Components/BsButton',
  component: BsButton,
  parameters: {
    docs: {
      description: {
        component:
          'A clickable action element for the single most important action in a given context.\n\n' +
          '**When to use:** the primary call to action on a screen or within a card/modal (e.g. "Book room", ' +
          '"Confirm"); secondary, lower-emphasis actions alongside it (`variant="neutral"`); `variant="error"` ' +
          'for destructive/irreversible actions (e.g. "Delete account") — per BrandSync guidance, destructive ' +
          'actions should always use the error variant, never `neutral`.\n\n' +
          '**When not to use:** for navigation between pages — use a link/nav component instead; for more than ' +
          'one primary-emphasis action in the same view — pick one, demote the rest to `neutral`; `error` purely ' +
          'for visual emphasis — reserve it for actions that actually delete/revoke/undo something.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'neutral', 'error', 'subtle', 'outlined', 'success', 'warning', 'info'],
      description:
        'Visual style. Maps directly to the brandsync-tokens `--bs-button-*` semantic set. `error` is for destructive/irreversible actions, not a stronger emphasis alternative to `primary`.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Sizing scale.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button and applies the disabled token set.',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Native `<button>` type.',
    },
    ariaLabel: {
      control: 'text',
      description:
        'Accessible name for the button. Required for icon-only usage (no visible label text via the default slot) so screen readers still announce what the button does.',
    },
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
