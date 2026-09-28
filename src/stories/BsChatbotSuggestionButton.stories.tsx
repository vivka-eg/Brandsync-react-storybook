import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsChatbotSuggestionButton } from '@brandsync/react';

const meta: Meta<typeof BsChatbotSuggestionButton> = {
  title: 'Genie AI Components/BsChatbotSuggestionButton',
  component: BsChatbotSuggestionButton,
  parameters: {
    docs: {
      description: {
        component:
          'A pill-shaped clickable suggestion chip for a Genie AI chat panel (e.g. "How can I help you?"). ' +
          'One instance renders one chip — to show several suggestion prompts side by side, render multiple ' +
          '`bs-chatbot-suggestion-button` elements inside a plain flex-wrap container.\n\n' +
          '**When to use:** quick-reply/starter prompts shown above or alongside `bs-composer` in a Genie AI ' +
          'chat panel.\n\n' +
          '**When not to use:** as a general-purpose button — use `bs-button` instead, this component\'s ' +
          'pill shape and tonal color treatment are specific to Genie chat suggestion prompts.',
      },
    },
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disables the button and applies a reduced-opacity treatment.',
    },
  },
  args: {
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof BsChatbotSuggestionButton>;

export const Default: Story = {
  render: args => (
    <BsChatbotSuggestionButton {...args} onBsSelect={() => console.log('bsSelect')}>
      How can I help you?
    </BsChatbotSuggestionButton>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: args => <BsChatbotSuggestionButton {...args}>How can I help you?</BsChatbotSuggestionButton>,
};

export const SuggestionRow: Story = {
  name: 'Multiple suggestions (flex-wrap row)',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, maxWidth: 420 }}>
      <BsChatbotSuggestionButton>How can I help you?</BsChatbotSuggestionButton>
      <BsChatbotSuggestionButton>Summarize this document</BsChatbotSuggestionButton>
      <BsChatbotSuggestionButton>Draft a follow-up email</BsChatbotSuggestionButton>
      <BsChatbotSuggestionButton>Explain this in simple terms</BsChatbotSuggestionButton>
    </div>
  ),
};
