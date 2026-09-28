import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsInlineTab } from '@brandsync/react';

const HomeIcon = () => (
  <svg slot="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3 10.5L12 3L21 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 9V20H19V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const meta: Meta<typeof BsInlineTab> = {
  title: 'Components/BsInlineTab',
  component: BsInlineTab,
  parameters: {
    docs: {
      description: {
        component:
          'A pill-shaped tab button — an optional leading icon plus a text label, rendered as a real ' +
          '`<button>` so it participates correctly in tab order and native click/keyboard activation. ' +
          'Unlike `BsTab`\'s underline indicator, selection here is communicated entirely by the pill\'s ' +
          'background fill color — there is no separate indicator element.\n\n' +
          '**When to use:** as one button within a segmented-control-style tab bar, where exactly one tab ' +
          'is selected/active at a time.\n\n' +
          '**When not to use:** as a standalone action button — use `BsButton` instead, `BsInlineTab`\'s ' +
          'visual language (muted pill until selected/hovered) only makes sense as part of a set.\n\n' +
          '`selected` is NOT self-toggling — clicking a `BsInlineTab` only emits `bsSelect`, it does not ' +
          'set its own `selected` prop, and it does not unselect any sibling tabs. Wrap `bs-inline-tab` ' +
          'elements in `<bs-tabs type="bs-inline-tab">` — it owns `role="tablist"` and coordinates selection ' +
          '(listening for `bsSelect` and setting `selected`/`false` across siblings) for you.',
      },
    },
  },
  argTypes: {
    selected: {
      control: 'boolean',
      description:
        'Whether this tab is the currently active one. NOT mutable and NOT self-toggling — still reflected ' +
        'as an attribute so consumers/CSS can target `bs-inline-tab[selected]`.',
    },
    disabled: {
      control: 'boolean',
      description:
        'Disables the tab: sets the native `disabled` attribute, suppresses hover/focus styling, and ' +
        'prevents clicking from emitting `bsSelect`.',
    },
    ariaLabel: {
      control: 'text',
      description:
        'Accessible name for the tab. Required for icon-only usage (no visible label text via the default ' +
        'slot) so screen readers still announce what the tab does — without it, an icon-only tab has no ' +
        'discernible name at all (axe-core flags this as a critical `button-name` violation).',
    },
  },
  args: {
    selected: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof BsInlineTab>;

export const Default: Story = {
  render: args => (
    <div role="tablist">
      <BsInlineTab {...args}>Overview</BsInlineTab>
    </div>
  ),
};

export const WithIcon: Story = {
  name: 'With icon',
  render: args => (
    <div role="tablist">
      <BsInlineTab {...args}>
        <HomeIcon />
        Overview
      </BsInlineTab>
    </div>
  ),
};

export const IconOnly: Story = {
  name: 'Icon only',
  args: { ariaLabel: 'Home' },
  render: args => (
    <div role="tablist">
      <BsInlineTab {...args}>
        <HomeIcon />
      </BsInlineTab>
    </div>
  ),
};

export const Selected: Story = {
  args: { selected: true },
  render: args => (
    <div role="tablist">
      <BsInlineTab {...args}>Overview</BsInlineTab>
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: args => (
    <div role="tablist">
      <BsInlineTab {...args}>Archived</BsInlineTab>
    </div>
  ),
};
