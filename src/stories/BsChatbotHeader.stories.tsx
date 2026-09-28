import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsChatbotHeader, BsComposer } from '@brandsync/react';

const meta: Meta<typeof BsChatbotHeader> = {
  title: 'Genie AI Components/BsChatbotHeader',
  component: BsChatbotHeader,
  parameters: {
    docs: {
      description: {
        component:
          'The header bar that sits above `bs-composer` in a Genie AI chat panel: the Genie brand mark on ' +
          'the left and four fixed actions (new chat, history, expand, close) on the right.\n\n' +
          '**When to use:** the top bar of a Genie AI chat panel, directly above a `bs-composer`.\n\n' +
          '**When not to use:** a generic app/page header — this component\'s layout and actions are ' +
          'purpose-built for the Genie chat panel, not a general navigation bar.',
      },
    },
  },
  argTypes: {
    heading: {
      control: 'text',
      description: 'Accessible label for the header landmark, and alt text context for the logo image.',
    },
    expanded: {
      control: 'boolean',
      description:
        'Whether the chat panel is currently expanded (e.g. to full viewport width/height). This component ' +
        'has no visibility into the surrounding layout, so it does not resize anything itself — it only ' +
        'tracks and reflects the toggle state (via the `expanded` attribute, for CSS hooks, and ' +
        '`aria-pressed`/`aria-label` on the expand button) and emits `bsExpand` with the new value. The ' +
        'consuming app is responsible for actually resizing its own chat panel container in response to ' +
        'that event, since only the app knows what that container is.',
    },
  },
  args: {
    heading: 'Genie',
    expanded: false,
  },
};

export default meta;
type Story = StoryObj<typeof BsChatbotHeader>;

export const Default: Story = {
  render: args => (
    <BsChatbotHeader
      {...args}
      onBsNewChat={() => console.log('bsNewChat')}
      onBsHistory={() => console.log('bsHistory')}
      onBsExpand={e => console.log('bsExpand', e.detail)}
      onBsClose={() => console.log('bsClose')}
    />
  ),
};

export const Expanded: Story = {
  args: { expanded: true },
};

export const InChatPanel: Story = {
  name: 'Chat panel (header + composer)',
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 420,
        height: 600,
        border: '1px solid #e5e5e5',
        borderRadius: 12,
        overflow: 'hidden',
      }}
    >
      <BsChatbotHeader heading="Genie" />
      <div style={{ flex: 1, minHeight: 0 }} />
      <div style={{ padding: 16 }}>
        <BsComposer variant="ai" ariaLabel="Message" />
      </div>
    </div>
  ),
};
