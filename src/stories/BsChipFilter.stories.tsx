import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsChipFilter } from '@brandsync/react';

const filterIcon = (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M2 3h12l-4.5 5.5V13l-3 1.5V8.5L2 3z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const meta: Meta<typeof BsChipFilter> = {
  title: 'Components/BsChipFilter',
  component: BsChipFilter,
  parameters: {
    docs: {
      description: {
        component:
          'A pill-shaped, selectable toggle used to filter a list or dataset (e.g. a "Filter chip" row ' +
          'above a table or search results), optionally paired with a leading icon and/or a dropdown ' +
          'caret that signals it opens a menu of further options.\n\n' +
          '**When to use:** letting a user toggle a filter on/off, or open a menu of filter options ' +
          '(pair `dropdown` with your own `BsMenu` — this component only renders the caret affordance, ' +
          "it doesn't manage a menu itself).\n\n" +
          '**When not to use:** a static, non-interactive status/category label — use `BsBadge` instead; ' +
          'a single primary action — use `BsButton`.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['md', 'lg'],
      description:
        "Sizing scale. Controls the chip's height only — icon size, gap, and font size stay constant across sizes, matching the Figma spec exactly.",
    },
    selected: {
      control: 'boolean',
      description:
        'Whether the chip reads as toggled on. Mutable so clicking it toggles directly, and reflected so consumers can target `bs-chip-filter[selected]` via CSS.',
    },
    dropdown: {
      control: 'boolean',
      description:
        "Shows a trailing dropdown caret, signaling this chip opens a menu of further options. Purely a visual affordance — wire up the actual menu (e.g. `BsMenu`) yourself.",
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the chip: sets the native `disabled` attribute, suppresses hover/focus/pressed styling, and prevents toggling.',
    },
    ariaLabel: {
      control: 'text',
      description:
        "Accessible name override. The visible label (default slot) already gives the native button an accessible name, so this is only needed if that text isn't sufficient on its own (e.g. it doesn't convey that activating the chip toggles a filter).",
    },
  },
  args: {
    size: 'md',
    selected: false,
    dropdown: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof BsChipFilter>;

export const Default: Story = {
  render: args => <BsChipFilter {...args}>Status</BsChipFilter>,
};

export const Selected: Story = {
  args: { selected: true },
  render: args => <BsChipFilter {...args}>Status</BsChipFilter>,
};

export const WithIcon: Story = {
  render: args => (
    <BsChipFilter {...args}>
      <span slot="icon">{filterIcon}</span>
      Filter
    </BsChipFilter>
  ),
};

export const WithDropdown: Story = {
  args: { dropdown: true },
  render: args => <BsChipFilter {...args}>Sort by</BsChipFilter>,
};

export const Disabled: Story = {
  args: { disabled: true },
  render: args => <BsChipFilter {...args}>Status</BsChipFilter>,
};

export const AllSizes: Story = {
  name: 'All sizes',
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <BsChipFilter size="md">Medium</BsChipFilter>
      <BsChipFilter size="lg">Large</BsChipFilter>
    </div>
  ),
};
