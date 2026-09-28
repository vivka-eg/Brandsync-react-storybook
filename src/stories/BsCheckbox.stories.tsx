import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsCheckbox } from '@brandsync/react';

const meta: Meta<typeof BsCheckbox> = {
  title: 'Components/BsCheckbox',
  component: BsCheckbox,
  parameters: {
    docs: {
      description: {
        component:
          'A single checkbox with its label, for a binary choice or one item within a group of independent ' +
          'choices.\n\n' +
          '**When to use:** a single standalone binary setting (e.g. "Remember me", "I agree to the terms"); ' +
          'one item within a set of independent, non-exclusive choices (a checkbox group/list); ' +
          '`indeterminate` for a "select all" checkbox representing a partially-selected group.\n\n' +
          '**When not to use:** a single mutually-exclusive choice from a set — use a radio group instead; ' +
          'an on/off setting that takes effect immediately with no explicit form submission — use `bs-switch`.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description:
        'Sizing scale. Controls the box\'s width/height and border width; corner radius is constant across all sizes.',
    },
    checked: {
      control: 'boolean',
      description:
        'Whether the checkbox is checked. Mutable so clicking the label/input toggles it directly. When `indeterminate` is also true, `indeterminate` wins visually (shows the minus icon) regardless of this value — same as native checkboxes.',
    },
    indeterminate: {
      control: 'boolean',
      description:
        'Whether the checkbox is in the indeterminate ("partially selected") state — shows a minus icon instead of a check, and takes visual precedence over `checked`. Unlike `checked`, native checkboxes have no `indeterminate` HTML attribute; it can only be set as a JS property on the element.',
    },
    disabled: {
      control: 'boolean',
      description:
        'Disables the checkbox: sets the native `disabled` attribute, suppresses hover/focus styling, and prevents toggling.',
    },
    error: {
      control: 'boolean',
      description:
        'Applies the error border/label-color treatment. This component\'s spec has no error message text of its own (unlike `bs-input`\'s `error: string`), so it\'s a plain boolean.',
    },
  },
  args: {
    size: 'lg',
    checked: false,
    indeterminate: false,
    disabled: false,
    error: false,
  },
};

export default meta;
type Story = StoryObj<typeof BsCheckbox>;

export const Default: Story = {
  render: args => <BsCheckbox {...args}>Accept terms and conditions</BsCheckbox>,
};

export const Checked: Story = {
  args: { checked: true },
  render: args => <BsCheckbox {...args}>Accept terms and conditions</BsCheckbox>,
};

// Represents a partially-selected group (e.g. a "select all" checkbox) -- takes visual precedence
// over `checked` and shows a minus icon instead of a check.
export const Indeterminate: Story = {
  args: { indeterminate: true },
  render: args => <BsCheckbox {...args}>Select all rooms</BsCheckbox>,
};

export const Disabled: Story = {
  args: { disabled: true, checked: true },
  render: args => <BsCheckbox {...args}>Accept terms and conditions</BsCheckbox>,
};

export const Error: Story = {
  args: { error: true },
  render: args => <BsCheckbox {...args}>Accept terms and conditions</BsCheckbox>,
};

export const AllSizes: Story = {
  name: 'All sizes',
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      {(['sm', 'md', 'lg'] as const).map(size => (
        <BsCheckbox key={size} size={size} checked>
          {size}
        </BsCheckbox>
      ))}
    </div>
  ),
};
