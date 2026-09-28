import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsChipInformative } from '@brandsync/react';

const starIcon = (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M8 1.5l1.8 3.9 4.2.5-3.1 3 .8 4.3L8 11.2 4.3 13.2l.8-4.3-3.1-3 4.2-.5L8 1.5z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
);

const meta: Meta<typeof BsChipInformative> = {
  title: 'Components/BsChipInformative',
  component: BsChipInformative,
  parameters: {
    docs: {
      description: {
        component:
          'A pill-shaped, non-interactive label for conveying a category or status at a glance, ' +
          'optionally paired with a leading icon. Unlike `BsChipFilter`/`BsChipInput`, this is purely ' +
          'informational — no click/select/remove behavior, no hover/focus/pressed states.\n\n' +
          '**When to use:** conveying a category or status inline with other content, with more color ' +
          'options and an optional icon than `BsBadge` offers.\n\n' +
          '**When not to use:** anything clickable/selectable — use `BsChipFilter`; a short, fixed status ' +
          'label with no color/icon needs — `BsBadge` is the simpler choice.',
      },
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['neutral', 'warning', 'success', 'info', 'error'],
      description:
        'Semantic color. Maps directly to the brandsync-tokens `--bs-chip-bg-*-container`/`--bs-chip-text-*` sets. Ignored (in favor of the disabled token set) when `disabled` is set.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description:
        'Sizing scale. Controls height and font-size/line-height together — unlike `BsChipFilter`/`BsChipInput`, Figma specs a distinct (smaller) font at `size="sm"`, not just a shorter pill.',
    },
    disabled: {
      control: 'boolean',
      description: "Overrides `color` with the disabled token set, regardless of its value.",
    },
  },
  args: {
    color: 'neutral',
    size: 'md',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof BsChipInformative>;

export const Default: Story = {
  render: args => <BsChipInformative {...args}>Category</BsChipInformative>,
};

export const WithIcon: Story = {
  args: { color: 'info' },
  render: args => (
    <BsChipInformative {...args}>
      <span slot="icon">{starIcon}</span>
      Featured
    </BsChipInformative>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: args => <BsChipInformative {...args}>Category</BsChipInformative>,
};

export const AllColors: Story = {
  name: 'All colors',
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <BsChipInformative color="neutral">Neutral</BsChipInformative>
      <BsChipInformative color="info">Info</BsChipInformative>
      <BsChipInformative color="success">Success</BsChipInformative>
      <BsChipInformative color="warning">Warning</BsChipInformative>
      <BsChipInformative color="error">Error</BsChipInformative>
    </div>
  ),
};

export const AllSizes: Story = {
  name: 'All sizes',
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <BsChipInformative size="sm">Small</BsChipInformative>
      <BsChipInformative size="md">Medium</BsChipInformative>
      <BsChipInformative size="lg">Large</BsChipInformative>
    </div>
  ),
};
