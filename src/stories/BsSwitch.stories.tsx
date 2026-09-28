import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsSwitch } from '@brandsync/react';

const meta: Meta<typeof BsSwitch> = {
  title: 'Components/BsSwitch',
  component: BsSwitch,
  parameters: {
    docs: {
      description: {
        component:
          'A toggle switch for an on/off setting that takes effect immediately (no explicit form submission ' +
          'required).\n\n' +
          '**When to use:** a binary setting that applies right away (e.g. "Enable notifications", "Dark mode").\n\n' +
          "**When not to use:** a binary choice that's part of a form submitted later, or one item within a " +
          'group of independent choices — use `bs-checkbox` instead; a single mutually-exclusive choice from a ' +
          'set — use a radio group instead.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['md', 'lg'],
      description: "Sizing scale. Controls the track's width/height and the knob's diameter.",
    },
    checked: {
      control: 'boolean',
      description:
        'Whether the switch is on. Mutable so clicking the label/input toggles it directly, and reflected so ' +
        'consumers can target `bs-switch[checked]` via CSS.',
    },
    disabled: {
      control: 'boolean',
      description:
        'Disables the switch: sets the native `disabled` attribute, suppresses hover/focus styling, and ' +
        'prevents toggling.',
    },
  },
  args: {
    size: 'lg',
    checked: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof BsSwitch>;

export const Default: Story = {
  render: args => <BsSwitch {...args}>Enable notifications</BsSwitch>,
};

export const Checked: Story = {
  args: { checked: true },
  render: args => <BsSwitch {...args}>Enable notifications</BsSwitch>,
};

export const Disabled: Story = {
  args: { disabled: true },
  render: args => <BsSwitch {...args}>Enable notifications</BsSwitch>,
};

export const Medium: Story = {
  args: { size: 'md', checked: true },
  render: args => <BsSwitch {...args}>Enable notifications</BsSwitch>,
};

export const AllSizes: Story = {
  name: 'All sizes',
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      {(['md', 'lg'] as const).map(size => (
        <BsSwitch key={size} size={size} checked>
          Enable notifications
        </BsSwitch>
      ))}
    </div>
  ),
};
