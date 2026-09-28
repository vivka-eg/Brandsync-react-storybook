import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsSnackbar } from '@brandsync/react';

const meta: Meta<typeof BsSnackbar> = {
  title: 'Components/BsSnackbar',
  component: BsSnackbar,
  parameters: {
    docs: {
      description: {
        component:
          'A transient status bar for confirming the result of an action (e.g. "Files uploaded successfully.") — ' +
          'an icon (or loading spinner), a message, an optional action, and a close button.\n\n' +
          'This component only renders the bar itself — it doesn\'t manage its own visibility, timing, or ' +
          'stacking. A consumer (typically a small "toast manager" utility) creates one per message and removes ' +
          'it from the DOM again, whether on a timer or on `bsDismiss`.\n\n' +
          '**When to use:** confirming the outcome of an action that just happened (save succeeded, upload ' +
          "failed) without interrupting the user's flow.\n\n" +
          '**When not to use:** for a response that requires the user to make a decision before continuing — ' +
          'use `bs-dialog`; for persistent, always-visible status — a snackbar is inherently transient.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'info', 'warning', 'success', 'error'],
      description:
        'Color/semantic variant. `default` is the neutral (dark, inverse-surface) bar Figma shows as the ' +
        'baseline; `info`/`warning`/`success`/`error` use their matching container/text tokens.',
    },
    loading: {
      control: 'boolean',
      description:
        'Replaces the checkmark icon with a spinning loading indicator, for a message describing in-progress ' +
        'work (e.g. "Uploading files...") rather than a completed result.',
    },
    actionLabel: {
      control: 'text',
      description:
        'Label for the optional action button (e.g. "Undo", "Retry"). Omit this prop entirely to render no ' +
        'action button at all — its presence, not a boolean flag, is what shows it.',
    },
  },
  args: {
    variant: 'default',
    loading: false,
    actionLabel: 'Undo',
  },
};

export default meta;
type Story = StoryObj<typeof BsSnackbar>;

export const Default: Story = {
  render: args => (
    <BsSnackbar {...args} onBsDismiss={() => console.log('bsDismiss')}>
      Files uploaded successfully.
    </BsSnackbar>
  ),
};

export const Loading: Story = {
  args: { loading: true, actionLabel: undefined },
  render: args => <BsSnackbar {...args}>Uploading files...</BsSnackbar>,
};

export const NoAction: Story = {
  name: 'No action',
  args: { actionLabel: undefined },
  render: args => <BsSnackbar {...args}>Your changes were saved.</BsSnackbar>,
};

export const AllVariants: Story = {
  name: 'All variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {(['default', 'info', 'warning', 'success', 'error'] as const).map(variant => (
        <BsSnackbar key={variant} variant={variant} actionLabel="Undo">
          Files uploaded successfully.
        </BsSnackbar>
      ))}
    </div>
  ),
};
