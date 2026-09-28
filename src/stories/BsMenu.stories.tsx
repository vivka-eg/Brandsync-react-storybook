import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsMenu, BsMenuItem } from '@brandsync/react';

const meta: Meta<typeof BsMenu> = {
  title: 'Components/BsMenu',
  component: BsMenu,
  parameters: {
    docs: {
      description: {
        component:
          'A generic dropdown/popup menu container: a rounded, elevated list of items (typically ' +
          '`BsMenuItem` elements).\n\n' +
          '**When to use:** a popup list of actions/options triggered by another control (e.g. a "more ' +
          'options" kebab button), such as `BsChatbotResponseAction`\'s `menu` slot.\n\n' +
          '**When not to use:** a persistent, always-visible list of options — this component is ' +
          'purpose-built as a popup surface (rounded corners, elevation shadow), not a plain list.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BsMenu>;

export const Default: Story = {
  render: () => (
    <BsMenu style={{ width: 210 }}>
      <BsMenuItem>Read aloud</BsMenuItem>
      <BsMenuItem>Chat with a human</BsMenuItem>
      <BsMenuItem>Raise a ticket</BsMenuItem>
    </BsMenu>
  ),
};

export const WithDisabledItem: Story = {
  name: 'With a disabled item',
  render: () => (
    <BsMenu style={{ width: 210 }}>
      <BsMenuItem>Read aloud</BsMenuItem>
      <BsMenuItem>Chat with a human</BsMenuItem>
      <BsMenuItem disabled>Raise a ticket</BsMenuItem>
    </BsMenu>
  ),
};
