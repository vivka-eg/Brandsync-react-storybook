import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsAiGreeting } from '@brandsync/react';

const meta: Meta<typeof BsAiGreeting> = {
  title: 'Genie AI Components/BsAiGreeting',
  component: BsAiGreeting,
  parameters: {
    docs: {
      description: {
        component:
          'The centered welcome heading shown at the top of an empty Genie AI chat panel, e.g. "Hi. I\'m ' +
          'Genie, your AI assistant." + "How can I help you with [product] today?"\n\n' +
          '**When to use:** the empty/initial state of a Genie AI chat panel, before the user has sent a ' +
          'message.\n\n' +
          '**When not to use:** once a conversation has started — this is a one-time empty-state greeting, ' +
          'not a persistent header (see `bs-chatbot-header` for that).\n\n' +
          '`productName` is optional: Figma\'s copy has a `[product_name]` placeholder the consuming app is ' +
          'expected to fill in, but a component shouldn\'t force a product name to exist, so leaving it unset ' +
          'falls back to a product-agnostic "How can I help you today?".',
      },
    },
  },
  argTypes: {
    assistantName: {
      control: 'text',
      description: 'The assistant\'s name, used in the heading ("Hi. I\'m {assistantName},").',
    },
    productName: {
      control: 'text',
      description: 'The product name mentioned in the subtext. Omit to use a product-agnostic subtext.',
    },
  },
  args: {
    assistantName: 'Genie',
    productName: 'Brandsync',
  },
};

export default meta;
type Story = StoryObj<typeof BsAiGreeting>;

export const Default: Story = {};

export const WithoutProductName: Story = {
  name: 'Without product name',
  args: { productName: undefined },
};
