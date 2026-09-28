import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsBadge, BsTab } from '@brandsync/react';

const HomeIcon = () => (
  <svg slot="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3 10.5L12 3L21 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 9V20H19V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const meta: Meta<typeof BsTab> = {
  title: 'Components/BsTab',
  component: BsTab,
  parameters: {
    docs: {
      description: {
        component:
          'A single tab button — an optional icon plus a text label, rendered as a real `<button>` so it ' +
          'participates correctly in tab order and native click/keyboard activation.\n\n' +
          '**When to use:** as one button within a tab bar, where exactly one tab is selected/active at a time.\n\n' +
          '**When not to use:** as a standalone action button — use `bs-button` instead, `bs-tab`\'s visual ' +
          'language (muted until selected/hovered, underline indicator) only makes sense as part of a set.\n\n' +
          '`selected` is NOT self-toggling — clicking a `bs-tab` only emits `bsSelect`, it does not set its ' +
          'own `selected` prop, and it does not unselect any sibling tabs. Wrap `<bs-tab>` elements in ' +
          '`<bs-tabs type="bs-tab">` — it owns `role="tablist"` and coordinates selection for you.',
      },
    },
  },
  argTypes: {
    selected: {
      control: 'boolean',
      description:
        'Whether this tab is the currently active one. NOT mutable and NOT self-toggling — see the class ' +
        'description above. Still reflected as an attribute so consumers/CSS can target `bs-tab[selected]`.',
    },
    disabled: {
      control: 'boolean',
      description:
        'Disables the tab: sets the native `disabled` attribute, suppresses hover/focus styling, and prevents ' +
        'clicking from emitting `bsSelect`.',
    },
    iconPosition: {
      control: 'select',
      options: ['start', 'top'],
      description:
        'Where the icon sits relative to the label, when both `icon` and the default slot are populated. ' +
        'Ignored for icon-only/text-only layouts.',
    },
  },
  args: {
    selected: false,
    disabled: false,
    iconPosition: 'start',
  },
};

export default meta;
type Story = StoryObj<typeof BsTab>;

export const Default: Story = {
  render: args => (
    <div role="tablist">
      <BsTab {...args}>Overview</BsTab>
    </div>
  ),
};

export const IconOnly: Story = {
  name: 'Icon only',
  args: { ariaLabel: 'Home' },
  render: args => (
    <div role="tablist">
      <BsTab {...args}>
        <HomeIcon />
      </BsTab>
    </div>
  ),
};

export const Selected: Story = {
  args: { selected: true },
  render: args => (
    <div role="tablist">
      <BsTab {...args}>
        <HomeIcon />
        Overview
      </BsTab>
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: args => (
    <div role="tablist">
      <BsTab {...args}>Archived</BsTab>
    </div>
  ),
};

export const WithBadge: Story = {
  name: 'With a badge',
  render: args => (
    <div role="tablist">
      <BsTab {...args}>
        Inbox
        <BsBadge slot="badge" variant="primary">
          3
        </BsBadge>
      </BsTab>
    </div>
  ),
};
