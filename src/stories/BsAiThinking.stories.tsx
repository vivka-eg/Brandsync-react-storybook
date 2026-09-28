import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsAiThinking } from '@brandsync/react';

const meta: Meta<typeof BsAiThinking> = {
  title: 'Genie AI Components/BsAiThinking',
  component: BsAiThinking,
  parameters: {
    docs: {
      description: {
        component:
          'A small inline status indicator for Genie AI surfaces: the colorful Genie mark next to a label ' +
          '(e.g. "Retrieving", "Thinking", "Searching") whose text shimmers with a moving highlight band ' +
          'while an operation is in progress.\n\n' +
          '**When to use:** inline in a Genie AI chat transcript to show what the assistant is currently ' +
          'doing while a response is being generated (retrieving context, searching, thinking).\n\n' +
          '**When not to use:** a blocking/full-panel loading state — this is a small inline indicator, not ' +
          'a spinner overlay.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'The status text shown next to the icon, e.g. "Retrieving", "Thinking", "Searching".',
    },
  },
  args: {
    label: 'Retrieving',
  },
};

export default meta;
type Story = StoryObj<typeof BsAiThinking>;

export const Retrieving: Story = {};

export const Thinking: Story = {
  args: { label: 'Thinking' },
};

export const Searching: Story = {
  args: { label: 'Searching' },
};
