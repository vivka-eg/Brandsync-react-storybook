import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsSlider } from '@brandsync/react';

const meta: Meta<typeof BsSlider> = {
  title: 'Components/BsSlider',
  component: BsSlider,
  parameters: {
    docs: {
      description: {
        component:
          'A slider for picking a single numeric value (`type="default"`), a value snapped to evenly ' +
          'spaced ticks (`type="segmented"`), or a min/max pair (`type="range"`) from within a bounded ' +
          '`min`/`max` range.\n\n' +
          '**When to use:** a numeric value that\'s easiest to reason about relative to its bounds (volume, ' +
          'brightness, a price range) rather than typed digit-by-digit; `type="segmented"` when only a ' +
          'fixed number of discrete stops make sense (e.g. a 5-star rating-like scale) but a visual track ' +
          'is still preferable to discrete buttons; `type="range"` for picking a min/max pair (e.g. a price ' +
          'range filter) with two thumbs.\n\n' +
          '**When not to use:** a precise value where mis-dragging by a pixel matters more than the ' +
          'at-a-glance bounds — use `BsInput[type="number"]` instead; a small, fixed set of mutually ' +
          'exclusive choices — use a radio group instead.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'segmented', 'range'],
      description:
        'Which slider shape to render. `range` uses two thumbs (`valueStart`/`valueEnd`); `default` and ' +
        '`segmented` use one thumb (`value`). `segmented` additionally draws `segments` tick marks along ' +
        'the track.',
    },
    showLabel: {
      control: 'boolean',
      description:
        'Shows/hides the "Label" text and editable percentage field(s) above the track, and the static ' +
        'min/max bound labels flanking it. When `false`, only the bare track (and its knob/knobs) renders.',
    },
    label: { control: 'text', description: 'Label text shown above the track when `showLabel` is set.' },
    min: { control: 'number', description: 'Minimum selectable value, for all `type`s.' },
    max: { control: 'number', description: 'Maximum selectable value, for all `type`s.' },
    step: {
      control: 'number',
      description:
        'Step size between selectable values. For `type="segmented"`, the effective step is derived from ' +
        '`(max - min) / segments` instead, so the thumb always snaps to a tick.',
    },
    value: {
      control: 'number',
      description:
        'Current value for `type="default"`/`type="segmented"`. Ignored for `type="range"` — use ' +
        '`valueStart`/`valueEnd` instead. Mutable so dragging the thumb updates it directly.',
    },
    valueStart: {
      control: 'number',
      description:
        'Lower thumb\'s value for `type="range"`. Defaults to `min` when unset. Mutable so dragging the ' +
        'thumb updates it directly.',
    },
    valueEnd: {
      control: 'number',
      description:
        'Upper thumb\'s value for `type="range"`. Defaults to `max` when unset. Mutable so dragging the ' +
        'thumb updates it directly.',
    },
    segments: {
      control: 'number',
      description:
        'Number of equal divisions marked by tick lines along the track, for `type="segmented"` only.',
    },
    disabled: {
      control: 'boolean',
      description:
        'Disables the slider: sets the native `disabled` attribute on the range input(s), suppresses ' +
        'hover/focus/drag styling and the value tooltip, and prevents interaction.',
    },
    ariaLabel: {
      control: 'text',
      description:
        'Accessible name for the slider\'s native range input(s). Required whenever `showLabel` is `false` ' +
        '(a bare track with no visible "Label" text) — without it, the internal native `<input>` has no ' +
        'accessible name at all. For `type="range"`, this labels the lower-bound thumb; the upper-bound ' +
        'thumb gets `"${ariaLabel} end"` (or `"End value"` when `ariaLabel` is unset).',
    },
  },
  args: {
    type: 'default',
    showLabel: true,
    label: 'Label',
    min: 0,
    max: 100,
    step: 1,
    value: 40,
    valueStart: 25,
    valueEnd: 75,
    segments: 10,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof BsSlider>;

export const Default: Story = {};

export const Segmented: Story = {
  args: { type: 'segmented', value: 30 },
};

export const Range: Story = {
  args: { type: 'range' },
};

export const BareTrack: Story = {
  name: 'showLabel=false',
  // ariaLabel is required here: with showLabel false there's no visible "Label" text left for the
  // native range input to be associated with, so it needs its own accessible name.
  args: { showLabel: false, ariaLabel: 'Volume' },
};

export const Disabled: Story = {
  args: { disabled: true },
};
