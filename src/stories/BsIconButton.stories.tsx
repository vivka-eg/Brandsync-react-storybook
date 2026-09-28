import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsIconButton } from '@brandsync/react';

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M13 4L6 11L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const meta: Meta<typeof BsIconButton> = {
  title: 'Components/BsIconButton',
  component: BsIconButton,
  parameters: {
    docs: {
      description: {
        component:
          'A clickable, icon-only action element — the icon-only sibling of `BsButton`, sharing the same ' +
          '8 visual variants and color language, but ALWAYS rendering just a single icon, never a label.\n\n' +
          '**When to use:** a compact action where the icon alone is unambiguous (e.g. a close/dismiss ' +
          'control, a toolbar action) and adding a text label would take up more space than the context ' +
          'allows; the same variant guidance as `BsButton` applies — `primary` for the single most important ' +
          'action, `neutral`/`subtle`/`outlined` for lower-emphasis alternatives, `error` reserved for ' +
          'destructive/irreversible actions (never `neutral`, per BrandSync guidance), `success`/`warning`/' +
          '`info` only when the action\'s own outcome is predictable and clearly communicated.\n\n' +
          '**When not to use:** when the action isn\'t self-evident from the icon alone — use `BsButton` ' +
          'with a visible label instead, don\'t rely on a tooltip to compensate for an unclear icon; for ' +
          'navigation between pages — use a link/nav component instead.\n\n' +
          'Because this component is always icon-only, `ariaLabel` is required for every real usage (not ' +
          'just conditionally, unlike `BsButton`) — there\'s no visible label text to fall back on for an ' +
          'accessible name.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'neutral', 'error', 'subtle', 'outlined', 'success', 'warning', 'info'],
      description:
        'Visual style. Maps to the same semantic token families as `BsButton`\'s `variant`. `error` is for ' +
        'destructive/irreversible actions per BrandSync guidance, not a stronger emphasis alternative to `primary`.',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description:
        'Sizing scale. `xs` (16px, an 8px icon) is a distinct, much smaller tier meant for compact chip/tag ' +
        '"remove" controls, not just a smaller toolbar button.',
    },
    type: { control: 'select', options: ['button', 'submit', 'reset'], description: 'Native `<button>` type.' },
    disabled: { control: 'boolean', description: 'Disables the button and applies the disabled token set.' },
    ariaLabel: {
      control: 'text',
      description:
        'Accessible name for the button. Required — this component is always icon-only, so there\'s no ' +
        'visible label text for screen readers to fall back on.',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    type: 'button',
    disabled: false,
    ariaLabel: 'Confirm',
  },
};

export default meta;
type Story = StoryObj<typeof BsIconButton>;

export const Primary: Story = {
  render: args => (
    <BsIconButton {...args}>
      <CheckIcon />
    </BsIconButton>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: args => (
    <BsIconButton {...args}>
      <CheckIcon />
    </BsIconButton>
  ),
};

export const AllSizes: Story = {
  name: 'All sizes',
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      {(['xs', 'sm', 'md', 'lg'] as const).map(size => (
        <BsIconButton key={size} size={size} ariaLabel="Confirm">
          <CheckIcon />
        </BsIconButton>
      ))}
    </div>
  ),
};

export const AllVariants: Story = {
  name: 'All variants',
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      {(['primary', 'neutral', 'error', 'subtle', 'outlined', 'success', 'warning', 'info'] as const).map(variant => (
        <BsIconButton key={variant} variant={variant} ariaLabel="Confirm">
          <CheckIcon />
        </BsIconButton>
      ))}
    </div>
  ),
};
