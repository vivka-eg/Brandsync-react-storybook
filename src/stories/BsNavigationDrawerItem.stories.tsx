import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsNavigationDrawerItem } from '@brandsync/react';

const BookIcon = () => (
  <svg slot="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M4 4.5C4 3.67157 4.67157 3 5.5 3H18.5C19.3284 3 20 3.67157 20 4.5V19.5C20 20.3284 19.3284 21 18.5 21H5.5C4.67157 21 4 20.3284 4 19.5V4.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path d="M8 3V21" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const meta: Meta<typeof BsNavigationDrawerItem> = {
  title: 'UI Shell/BsNavigationDrawerItem',
  component: BsNavigationDrawerItem,
  parameters: {
    docs: {
      description: {
        component:
          "A single row within a `bs-navigation-drawer`'s item list — either a plain leaf nav item, or an " +
          '`expandable` group header that discloses nested `bs-navigation-drawer-item` children.\n\n' +
          "**When to use:** every row inside a `bs-navigation-drawer`'s default slot.\n\n" +
          '**When not to use:** a standalone action outside a navigation drawer — use ' +
          '`bs-button`/`bs-menu-item` instead.\n\n' +
          'Click behavior is mutually exclusive, based on `expandable`: a plain leaf item (`expandable = ' +
          'false`) only emits `bsSelect` on click — `selected` is NOT self-toggling, coordinating which sibling ' +
          'row is selected needs cross-item state a consumer/wrapper owns. A group header (`expandable = ' +
          'true`, never shown with a `selected` tint) instead toggles its own `expanded` directly and emits ' +
          '`bsToggle` with the new value, and does not emit `bsSelect`.\n\n' +
          'Nesting: put child `<bs-navigation-drawer-item nested>` elements inside a parent ' +
          '`<bs-navigation-drawer-item expandable>` with `slot="children"`.',
      },
    },
  },
  argTypes: {
    selected: {
      control: 'boolean',
      description:
        "Tints the row's background/text to indicate it's the current destination. NOT self-toggling. " +
        'Ignored (never applied) when `expandable` is true. Reflected so consumers/CSS can target ' +
        '`bs-navigation-drawer-item[selected]`.',
    },
    expandable: {
      control: 'boolean',
      description:
        'Renders this row as a disclosure/group header (trailing chevron, self-toggling `expanded`, ' +
        '`bsToggle` instead of `bsSelect` on click) instead of a plain navigable leaf item.',
    },
    expanded: {
      control: 'boolean',
      description:
        "Whether an `expandable` row's `children` slot is shown. Mutable and reflected — clicking an " +
        '`expandable` row toggles this directly, and CSS shows/hides the `children` slot wrapper based on the ' +
        'reflected attribute. Ignored when `expandable` is false.',
    },
    nested: {
      control: 'boolean',
      description:
        'Marks this as a child row nested under an `expandable` parent (via `slot="children"`) — deepens the ' +
        "left indent and stops reserving `icon` slot space entirely (Figma's nested rows never have icons).",
    },
    collapsed: {
      control: 'boolean',
      description:
        "Switches this row to the compact icon-above-caption column layout used when its parent " +
        '`bs-navigation-drawer` is `collapsed`. Also forces `expandable` rows\' chevron and `children` slot to ' +
        'stay hidden regardless of `expanded`.',
    },
  },
  args: {
    selected: false,
    expandable: false,
    expanded: false,
    nested: false,
    collapsed: false,
  },
};

export default meta;
type Story = StoryObj<typeof BsNavigationDrawerItem>;

export const Default: Story = {
  render: args => (
    <div style={{ width: 248 }}>
      <BsNavigationDrawerItem {...args}>
        <BookIcon />
        Introduction
      </BsNavigationDrawerItem>
    </div>
  ),
};

export const Selected: Story = {
  args: { selected: true },
  render: args => (
    <div style={{ width: 248 }}>
      <BsNavigationDrawerItem {...args}>
        <BookIcon />
        Introduction
      </BsNavigationDrawerItem>
    </div>
  ),
};

export const ExpandableWithChildren: Story = {
  name: 'Expandable with nested children',
  render: () => (
    <div style={{ width: 248 }}>
      <BsNavigationDrawerItem expandable expanded onBsToggle={expanded => console.log('bsToggle', expanded)}>
        <BookIcon />
        Components
        <BsNavigationDrawerItem slot="children" nested>
          Button
        </BsNavigationDrawerItem>
        <BsNavigationDrawerItem slot="children" nested selected>
          Checkbox
        </BsNavigationDrawerItem>
        <BsNavigationDrawerItem slot="children" nested>
          Switch
        </BsNavigationDrawerItem>
      </BsNavigationDrawerItem>
    </div>
  ),
};

export const Nested: Story = {
  name: 'Nested (child row)',
  args: { nested: true },
  render: args => (
    <div style={{ width: 248 }}>
      <BsNavigationDrawerItem {...args}>Button</BsNavigationDrawerItem>
    </div>
  ),
};

export const Collapsed: Story = {
  name: 'Collapsed (icon above caption)',
  args: { collapsed: true, selected: true },
  render: args => (
    <div style={{ width: 85 }}>
      <BsNavigationDrawerItem {...args}>
        <BookIcon />
        Introduction
      </BsNavigationDrawerItem>
    </div>
  ),
};
