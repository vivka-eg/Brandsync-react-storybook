import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsChatbotResponseAction, BsMenu, BsMenuItem } from '@brandsync/react';

const meta: Meta<typeof BsChatbotResponseAction> = {
  title: 'Genie AI Components/BsChatbotResponseAction',
  component: BsChatbotResponseAction,
  parameters: {
    docs: {
      description: {
        component:
          'The row of action buttons that appears below an AI response message in a Genie chat panel: like, ' +
          'dislike, copy, regenerate, and more-options icon buttons, plus an optional "N sources" button.\n\n' +
          '**When to use:** directly below an AI-generated response message in a Genie chat panel.\n\n' +
          '**When not to use:** below a user\'s own message — these actions (regenerate, like/dislike a ' +
          'response, etc.) only make sense for AI-generated content.',
      },
    },
  },
  argTypes: {
    sourcesCount: {
      control: 'number',
      description:
        'Number of sources backing the response. When set to a positive number, renders the "N sources" ' +
        'button (singular "1 source" / plural "N sources"). When unset or 0, the button is not rendered at ' +
        'all.',
    },
  },
  args: {
    sourcesCount: 3,
  },
};

export default meta;
type Story = StoryObj<typeof BsChatbotResponseAction>;

export const Default: Story = {
  render: args => (
    <BsChatbotResponseAction
      {...args}
      onBsLike={() => console.log('bsLike')}
      onBsDislike={() => console.log('bsDislike')}
      onBsCopy={() => console.log('bsCopy')}
      onBsRegenerate={() => console.log('bsRegenerate')}
      onBsSourcesClick={() => console.log('bsSourcesClick')}
    />
  ),
};

export const WithoutSources: Story = {
  name: 'Without sources',
  args: { sourcesCount: 0 },
};

export const InResponseMessage: Story = {
  name: 'In an AI response message',
  render: () => (
    <div style={{ maxWidth: 480, fontFamily: 'sans-serif' }}>
      <p style={{ margin: 0, color: '#1a1a1a', fontSize: 14, lineHeight: '20px' }}>
        This is a placeholder AI response message. It demonstrates how the action row sits directly below the
        response text, aligned to the left edge of the message.
      </p>
      <BsChatbotResponseAction sourcesCount={3} />
    </div>
  ),
};

export const WithMenu: Story = {
  name: 'More options menu',
  render: () => (
    <div style={{ maxWidth: 480, fontFamily: 'sans-serif' }}>
      <BsChatbotResponseAction sourcesCount={3}>
        <BsMenu slot="menu" style={{ width: 210 }}>
          <BsMenuItem>Read aloud</BsMenuItem>
          <BsMenuItem>Chat with a human</BsMenuItem>
          <BsMenuItem>Raise a ticket</BsMenuItem>
        </BsMenu>
      </BsChatbotResponseAction>
    </div>
  ),
};
