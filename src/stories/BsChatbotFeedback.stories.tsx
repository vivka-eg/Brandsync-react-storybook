import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsChatbotFeedback } from '@brandsync/react';

const meta: Meta<typeof BsChatbotFeedback> = {
  title: 'Genie AI Components/BsChatbotFeedback',
  component: BsChatbotFeedback,
  parameters: {
    docs: {
      description: {
        component:
          'A star-rating feedback card shown at the end of a Genie AI chat: a heading/subtitle, a 5-star ' +
          'rating, an optional comment, and either "Submit feedback" + "Start new chat" (before submitting) ' +
          'or just "Start new chat" (after).\n\n' +
          '**When to use:** prompting for feedback on a Genie response or chat session, typically after the ' +
          'user ends or restarts a conversation.\n\n' +
          '**When not to use:** a generic star-rating input elsewhere in the product — this component\'s ' +
          'copy and layout are purpose-built for the Genie feedback flow, not a reusable rating control.\n\n' +
          'The heading and subtitle are not freeform props: before submitting, they\'re always the fixed ' +
          '"How was your experience..." copy; after submitting, they\'re determined entirely by `rating` ' +
          '(1-2 stars reads apologetic, 3 neutral, 4-5 positive), matching the Figma source exactly.',
      },
    },
  },
  argTypes: {
    rating: {
      control: { type: 'range', min: 0, max: 5, step: 1 },
      description: 'Current star rating, 0-5. 0 means no rating has been given yet.',
    },
    submitted: {
      control: 'boolean',
      description:
        'Whether feedback has been submitted. Switches the card from the editable form to the read-only ' +
        '"thanks" view.',
    },
    comment: {
      control: 'text',
      description: 'The comment text.',
    },
  },
  args: {
    rating: 0,
    submitted: false,
    comment: '',
  },
};

export default meta;
type Story = StoryObj<typeof BsChatbotFeedback>;

export const Default: Story = {
  render: args => (
    <BsChatbotFeedback
      {...args}
      onBsSubmit={e => console.log('bsSubmit', e.detail)}
      onBsNewChat={() => console.log('bsNewChat')}
    />
  ),
};

export const PositiveSubmitted: Story = {
  name: 'Positive (submitted)',
  args: { rating: 5, submitted: true, comment: 'The response was helpful ....' },
};

export const ApologeticSubmitted: Story = {
  name: 'Apologetic (submitted)',
  args: { rating: 1, submitted: true, comment: 'The response was helpful ....' },
};

export const AllRatings: Story = {
  name: 'All ratings (submitted)',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(280px, 1fr))', gap: 16 }}>
      <BsChatbotFeedback />
      <BsChatbotFeedback rating={1} submitted comment="The response was helpful ...." />
      <BsChatbotFeedback rating={2} submitted comment="The response was helpful ...." />
      <BsChatbotFeedback rating={3} submitted comment="The response was helpful ...." />
      <BsChatbotFeedback rating={4} submitted comment="The response was helpful ...." />
      <BsChatbotFeedback rating={5} submitted comment="The response was helpful ...." />
    </div>
  ),
};
