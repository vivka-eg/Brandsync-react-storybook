import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsMenuItem, BsMenu } from '@brandsync/react';

const ReadAloudIcon = () => (
  <svg slot="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M7.5 15.75H3C2.80109 15.75 2.61032 15.671 2.46967 15.5303C2.32902 15.3897 2.25 15.1989 2.25 15V9C2.25 8.80109 2.32902 8.61032 2.46967 8.46967C2.61032 8.32902 2.80109 8.25 3 8.25H7.5L14.25 3V21L7.5 15.75Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M7.5 8.25V15.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const meta: Meta<typeof BsMenuItem> = {
  title: 'Components/BsMenuItem',
  component: BsMenuItem,
  parameters: {
    docs: {
      description: {
        component:
          'A single selectable row inside a `BsMenu`: an optional icon plus a text label, rendered as a ' +
          'real `<button>` for correct keyboard/click semantics.\n\n' +
          '**When to use:** as a child of `BsMenu`, one per selectable action/option.\n\n' +
          '**When not to use:** outside of `BsMenu` — this component\'s sizing/hover treatment is designed ' +
          'to sit inside the menu\'s rounded, padded list box.',
      },
    },
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description:
        'Disables the item: no hover/pressed/focus styling, no pointer cursor, not reachable by keyboard ' +
        'tabbing, and clicking it does not emit `bsSelect`.',
    },
  },
  args: {
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof BsMenuItem>;

export const Default: Story = {
  render: args => (
    <BsMenuItem {...args} style={{ width: 210 }}>
      Read aloud
    </BsMenuItem>
  ),
};

export const WithIcon: Story = {
  name: 'With an icon',
  render: args => (
    <BsMenuItem {...args} style={{ width: 210 }}>
      <ReadAloudIcon />
      Read aloud
    </BsMenuItem>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: args => (
    <BsMenuItem {...args} style={{ width: 210 }}>
      Read aloud
    </BsMenuItem>
  ),
};

export const InAMenu: Story = {
  name: 'In a BsMenu',
  render: () => (
    <BsMenu style={{ width: 210 }}>
      <BsMenuItem>Read aloud</BsMenuItem>
      <BsMenuItem>Chat with a human</BsMenuItem>
      <BsMenuItem>Raise a ticket</BsMenuItem>
    </BsMenu>
  ),
};
