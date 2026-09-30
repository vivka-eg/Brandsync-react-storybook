import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsProgress } from '@brandsync/react';

const meta: Meta<typeof BsProgress> = {
  title: 'Components/BsProgress',
  component: BsProgress,
  parameters: {
    docs: {
      description: {
        component:
          'A circular progress indicator — either a static ring showing a percentage sweep ' +
          '(`type="determinate"`) or a continuously spinning ring signaling in-progress work with ' +
          'no known completion percentage (`type="indeterminate"`).\n\n' +
          '**When to use:** showing the progress of a task with a known, quantifiable completion ' +
          'percentage (`determinate`); signaling that work is happening in the background with no ' +
          'meaningful percentage to report (`indeterminate`), e.g. while waiting on a network ' +
          'response.\n\n' +
          '**When not to use:** for a horizontal, bar-shaped progress indicator — use ' +
          '`BsProgressLinear` instead; for a percentage that\'s better expressed as plain text, ' +
          'without the reserved space and visual weight of a ring.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['determinate', 'indeterminate'],
      description:
        '`determinate` renders a static arc sweep reflecting `value` (with an optional percentage label); `indeterminate` renders a continuously spinning ring and never shows a label, since there\'s no known percentage to report.',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Overall diameter: `small` (44px), `medium` (48px), or `large` (64px).',
    },
    strokeWidth: {
      control: 'select',
      options: [4, 8],
      description: "Ring stroke width in px — `4` or `8`, matching Figma's two stroke-width variants.",
    },
    value: {
      control: { type: 'range', min: 0, max: 100 },
      description:
        'Progress percentage, `0`-`100`. Only meaningful for `type="determinate"` — ignored (and never rendered) for `type="indeterminate"`. Out-of-range values are clamped defensively.',
    },
    showLabel: {
      control: 'boolean',
      description:
        'Shows the `${value}%` label below the ring. Only takes effect for `type="determinate"` — `indeterminate` never shows a label regardless of this prop.',
    },
  },
  args: {
    type: 'determinate',
    size: 'small',
    strokeWidth: 4,
    value: 50,
    showLabel: true,
  },
};

export default meta;
type Story = StoryObj<typeof BsProgress>;

export const Default: Story = {};

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 24 }}>
      <BsProgress size="small" value={50} />
      <BsProgress size="medium" value={50} />
      <BsProgress size="large" value={50} />
    </div>
  ),
};

export const StrokeWidths: Story = {
  name: 'Stroke widths',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 24 }}>
      <BsProgress size="large" strokeWidth={4} value={50} />
      <BsProgress size="large" strokeWidth={8} value={50} />
    </div>
  ),
};

export const Values: Story = {
  name: 'Values',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 24 }}>
      {[0, 25, 50, 75, 100].map(value => (
        <BsProgress key={value} value={value} />
      ))}
    </div>
  ),
};

export const WithoutLabel: Story = {
  name: 'Without label',
  args: { showLabel: false },
};

export const Indeterminate: Story = {
  args: { type: 'indeterminate' },
};
