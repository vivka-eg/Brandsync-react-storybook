import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsInlineTab, BsTab, BsTabs } from '@brandsync/react';

const meta: Meta<typeof BsTabs> = {
  title: 'Components/BsTabs',
  component: BsTabs,
  parameters: {
    docs: {
      description: {
        component:
          'A tab-group wrapper: owns `role="tablist"` and coordinates selection across its slotted `<bs-tab>` ' +
          'or `<bs-inline-tab>` children, so consumers no longer have to hand-roll this — listening for ' +
          '`bsSelect` and setting `selected`/`false` on siblings, plus supplying `role="tablist"` on the ' +
          'wrapping element.\n\n' +
          '**When to use:** wrapping a set of `<bs-tab>` (underline style) or `<bs-inline-tab>` (pill style) ' +
          'elements that should behave as a single-selection tab bar.\n\n' +
          '**When not to use:** for a single, standalone tab button not participating in a group — use ' +
          '`bs-tab`/`bs-inline-tab` directly.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['bs-tab', 'bs-inline-tab'],
      description:
        "Which tab-button family this group wraps. Governs the wrapper's own visual treatment (gap-only for " +
        '`bs-tab`, a filled pill bar for `bs-inline-tab`).',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description:
        'Layout direction of the tab bar itself. Sets `aria-orientation` on the internal wrapper and switches ' +
        '`flex-direction`.',
    },
  },
  args: {
    type: 'bs-tab',
    orientation: 'horizontal',
  },
};

export default meta;
type Story = StoryObj<typeof BsTabs>;

export const Default: Story = {
  render: args => (
    <BsTabs {...args}>
      <BsTab selected>Overview</BsTab>
      <BsTab>Details</BsTab>
      <BsTab>Settings</BsTab>
      <BsTab disabled>Archived</BsTab>
    </BsTabs>
  ),
};

export const InlineTabGroup: Story = {
  name: 'Inline tab group',
  args: { type: 'bs-inline-tab' },
  render: args => (
    <BsTabs {...args}>
      <BsInlineTab selected>Overview</BsInlineTab>
      <BsInlineTab>Details</BsInlineTab>
      <BsInlineTab>Settings</BsInlineTab>
      <BsInlineTab disabled>Archived</BsInlineTab>
    </BsTabs>
  ),
};

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  render: args => (
    <BsTabs {...args}>
      <BsTab selected>Overview</BsTab>
      <BsTab>Details</BsTab>
      <BsTab>Settings</BsTab>
      <BsTab disabled>Archived</BsTab>
    </BsTabs>
  ),
};
