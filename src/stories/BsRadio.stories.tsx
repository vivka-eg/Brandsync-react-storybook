import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { BsRadio } from '@brandsync/react';

const meta: Meta<typeof BsRadio> = {
  title: 'Components/BsRadio',
  component: BsRadio,
  parameters: {
    docs: {
      description: {
        component:
          'A single radio button with its label, for one mutually-exclusive choice within a group.\n\n' +
          '**When to use:** one option within a set of mutually-exclusive choices, where all options should ' +
          'stay visible (a radio group).\n\n' +
          '**When not to use:** an independent, non-exclusive binary choice, or one item in a set of ' +
          'independent choices — use `BsCheckbox` instead; an on/off setting that takes effect immediately ' +
          '(no explicit form submission) — use `BsSwitch`.',
      },
    },
  },
  argTypes: {
    name: {
      control: 'text',
      description:
        'The native radio input\'s `name` attribute, passed straight through to the native input inside. ' +
        'Because each `bs-radio` renders its own shadow root, native `<input type="radio">` mutual-exclusion ' +
        'grouping (scoped to a single DOM tree by the HTML spec) does NOT extend across separate `bs-radio` ' +
        'instances sharing the same `name` — checking one will not natively uncheck another.',
    },
    value: {
      control: 'text',
      description:
        'The native radio input\'s `value` attribute — read from `event.target.value`, or used when wiring ' +
        'the group up to a form.',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the radio is checked. Mutable so clicking the label/input sets it directly.',
    },
    disabled: {
      control: 'boolean',
      description:
        'Disables the radio: sets the native `disabled` attribute, suppresses hover/focus styling, and ' +
        'prevents toggling.',
    },
  },
  args: {
    name: 'default-group',
    value: 'option-1',
    checked: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof BsRadio>;

export const Default: Story = {
  render: args => <BsRadio {...args}>Option 1</BsRadio>,
};

export const Checked: Story = {
  args: { checked: true },
  render: args => <BsRadio {...args}>Option 1</BsRadio>,
};

export const Disabled: Story = {
  args: { disabled: true },
  render: args => <BsRadio {...args}>Option 1</BsRadio>,
};

// Native same-name radio grouping doesn't extend across separate <bs-radio> instances (each has
// its own shadow root), so this story manages mutual exclusivity itself via React state, listening
// for bsChange to uncheck the siblings.
const RadioGroupDemo = () => {
  const [selected, setSelected] = useState('option-1');
  const options = ['option-1', 'option-2', 'option-3'];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {options.map((value, index) => (
        <BsRadio
          key={value}
          name="group-story"
          value={value}
          checked={selected === value}
          onBsChange={e => setSelected(e.detail)}
        >
          {`Option ${index + 1}`}
        </BsRadio>
      ))}
    </div>
  );
};

export const Group: Story = {
  name: 'Radio group',
  render: () => <RadioGroupDemo />,
};
