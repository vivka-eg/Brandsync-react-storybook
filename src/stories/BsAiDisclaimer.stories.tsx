import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsAiDisclaimer } from '@brandsync/react';

const meta: Meta<typeof BsAiDisclaimer> = {
  title: 'Genie AI Components/BsAiDisclaimer',
  component: BsAiDisclaimer,
  parameters: {
    docs: {
      description: {
        component:
          'A centered caption disclaimer for Genie AI surfaces, e.g. "AI can make mistakes. Please verify ' +
          'important information."\n\n' +
          '**When to use:** below or above `bs-composer` in a Genie AI chat panel, to remind users AI output ' +
          'can be wrong.\n\n' +
          '**When not to use:** as a general-purpose caption/helper text — use plain text or `bs-input`\'s ' +
          'description slot for non-AI-related helper copy.\n\n' +
          'Renders a default slot rather than a fixed prop: Figma only specifies plain text, but some ' +
          'consuming apps link out to a policy/help page from this copy, and a slot supports that without ' +
          'inventing an unconfirmed `href`/link prop.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BsAiDisclaimer>;

export const Default: Story = {
  render: args => (
    <BsAiDisclaimer {...args}>AI can make mistakes. Please verify important information.</BsAiDisclaimer>
  ),
};
