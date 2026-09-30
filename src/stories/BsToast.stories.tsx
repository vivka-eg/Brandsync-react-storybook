import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsToast } from '@brandsync/react';

const meta: Meta<typeof BsToast> = {
  title: 'Components/BsToast',
  component: BsToast,
  parameters: {
    docs: {
      description: {
        component:
          'A transient status message for confirming the result of an action (e.g. "Files uploaded ' +
          'successfully.") — a state-specific icon, a message, and a close button.\n\n' +
          "This component only renders the toast itself — it doesn't manage its own visibility, " +
          'timing, or stacking. A consumer (typically a small "toast manager" utility) creates one ' +
          "per message and removes it from the DOM again, whether on a timer or on `onBsDismiss`. " +
          "Figma's spec doesn't show auto-dismiss timing at all (it's a static visual spec), so this " +
          "deliberately doesn't invent one.",
      },
    },
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'Semantic state. Each state has its own icon and matching container/text tokens — there is no neutral/default state.',
    },
  },
  args: {
    state: 'info',
  },
};

export default meta;
type Story = StoryObj<typeof BsToast>;

// Demonstrates a real consumer reaction to onBsDismiss -- the component itself doesn't remove or
// hide anything on dismiss (see the component description above), so without this, clicking the
// close button visibly does nothing in the story even though the handler did fire.
const hideOnDismiss = (ev: CustomEvent<void>) => {
  (ev.currentTarget as HTMLElement).style.display = 'none';
};

export const Default: Story = {
  render: args => (
    <BsToast {...args} onBsDismiss={hideOnDismiss}>
      Files uploaded successfully.
    </BsToast>
  ),
};

export const Overflow: Story = {
  render: args => (
    <BsToast {...args} onBsDismiss={hideOnDismiss}>
      Your changes were saved, but some fields may fail.
    </BsToast>
  ),
};

export const AllStates: Story = {
  name: 'All states',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {(['info', 'success', 'warning', 'error'] as const).map(state => (
        <BsToast key={state} state={state} onBsDismiss={hideOnDismiss}>
          Files uploaded successfully.
        </BsToast>
      ))}
    </div>
  ),
};
