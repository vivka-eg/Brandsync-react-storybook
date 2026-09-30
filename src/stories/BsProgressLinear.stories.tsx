import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsProgressLinear } from '@brandsync/react';

const meta: Meta<typeof BsProgressLinear> = {
  title: 'Components/BsProgressLinear',
  component: BsProgressLinear,
  parameters: {
    docs: {
      description: {
        component:
          'A linear (horizontal) progress indicator — either a static bar showing a percentage ' +
          'fill (`type="determinate"`) or a continuously sliding bar signaling in-progress work ' +
          'with no known completion percentage (`type="indeterminate"`).\n\n' +
          '**When to use:** showing the progress of a task with a known, quantifiable completion ' +
          'percentage (`determinate`), e.g. a file upload; signaling that work is happening in the ' +
          'background with no meaningful percentage to report (`indeterminate`), e.g. while ' +
          'waiting on a network response.\n\n' +
          '**When not to use:** for a compact, ring-shaped progress indicator — use `BsProgress` ' +
          "(circular) instead; for a percentage that's better expressed as plain text, without the " +
          'reserved space and visual weight of a bar.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['determinate', 'indeterminate'],
      description: '`determinate` renders a static fill reflecting `value`; `indeterminate` renders a continuously sliding gradient bar and ignores `value`.',
    },
    size: {
      control: 'select',
      options: ['small', 'large'],
      description: 'Bar height: `small` (4px) or `large` (8px).',
    },
    value: {
      control: { type: 'range', min: 0, max: 100 },
      description:
        'Progress percentage, `0`-`100`. Only meaningful for `type="determinate"` — ignored (and never rendered) for `type="indeterminate"`. Out-of-range values are clamped defensively.',
    },
    showLabel: {
      control: 'boolean',
      description:
        "Shows the slotted label below the bar. When `false`, or when no content is slotted, the label wrapper isn't rendered at all.",
    },
  },
  args: {
    type: 'determinate',
    size: 'large',
    value: 40,
    showLabel: true,
  },
};

export default meta;
type Story = StoryObj<typeof BsProgressLinear>;

export const Default: Story = {
  render: args => <BsProgressLinear {...args}>Label</BsProgressLinear>,
};

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 320 }}>
      <BsProgressLinear size="small" value={40}>
        Label
      </BsProgressLinear>
      <BsProgressLinear size="large" value={40}>
        Label
      </BsProgressLinear>
    </div>
  ),
};

export const Values: Story = {
  name: 'Values',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 320 }}>
      {[0, 25, 50, 75, 100].map(value => (
        <BsProgressLinear key={value} value={value}>
          {value}%
        </BsProgressLinear>
      ))}
    </div>
  ),
};

export const WithoutLabel: Story = {
  name: 'Without label',
  render: args => (
    <div style={{ width: 320 }}>
      <BsProgressLinear {...args} showLabel={false} />
    </div>
  ),
};

export const Indeterminate: Story = {
  render: args => (
    <div style={{ width: 320 }}>
      <BsProgressLinear {...args} type="indeterminate">
        Label
      </BsProgressLinear>
    </div>
  ),
};
