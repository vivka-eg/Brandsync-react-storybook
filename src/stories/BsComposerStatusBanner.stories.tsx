import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsComposerStatusBanner, BsComposer, BsAttachmentList, BsAttachment } from '@brandsync/react';

const types = ['error', 'info', 'neutral', 'warning'] as const;

const SAMPLE_IMAGE = 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=200&h=200&fit=crop';

const meta: Meta<typeof BsComposerStatusBanner> = {
  title: 'Genie AI Components/BsComposerStatusBanner',
  component: BsComposerStatusBanner,
  parameters: {
    docs: {
      description: {
        component:
          'A full-width status banner for use directly above `bs-composer`, surfacing a message about the ' +
          "composer's current state (e.g. a send failure, an informational notice) with an optional " +
          '"Continue"-style action button and an optional close button.\n\n' +
          '**When to use:** a message tied to the composer itself (send failed, rate-limited, draft ' +
          'restored, etc.) that needs to sit directly above it, not a general-purpose alert.\n\n' +
          '**When not to use:** a toast/snackbar notification unrelated to the composer — this component is ' +
          "not self-dismissing and has no positioning of its own (it's a static block, not an overlay).\n\n" +
          'Sets `role="status"` for `type="info"`/`type="neutral"` and `role="alert"` for ' +
          '`type="error"`/`type="warning"` on its own root element automatically — no opt-in prop needed, so ' +
          'a screen reader announces the message as soon as this banner is inserted into the DOM.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: types,
      description:
        "Which severity/style to render. Drives background, text/icon color, and the action button's color.",
    },
    message: {
      control: 'text',
      description: 'The message text.',
    },
    showIcon: {
      control: 'boolean',
      description: 'Whether the leading icon (default: clock) is rendered.',
    },
    showButton: {
      control: 'boolean',
      description: 'Whether the "Continue"-style action button is rendered.',
    },
    actionLabel: {
      control: 'text',
      description: 'Label for the action button, only rendered when `showButton` is true.',
    },
    allowClose: {
      control: 'boolean',
      description: 'Whether the close button is rendered.',
    },
  },
  args: {
    type: 'error',
    message: 'This is a message',
    showIcon: true,
    showButton: false,
    actionLabel: 'Continue',
    allowClose: true,
  },
};

export default meta;
type Story = StoryObj<typeof BsComposerStatusBanner>;

export const Default: Story = {
  render: args => (
    <BsComposerStatusBanner
      {...args}
      onBsAction={() => console.log('bsAction')}
      onBsClose={() => console.log('bsClose')}
    />
  ),
};

export const Info: Story = {
  args: { type: 'info' },
};

export const Warning: Story = {
  args: { type: 'warning' },
};

export const WithAction: Story = {
  name: 'With action button',
  args: { showButton: true },
};

export const AllTypes: Story = {
  name: 'All types',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 600 }}>
      {types.map(type => (
        <BsComposerStatusBanner key={type} type={type} message="This is a message" showButton />
      ))}
    </div>
  ),
};

export const AboveComposer: Story = {
  name: 'Above BsComposer',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 420 }}>
      <BsComposerStatusBanner
        type="info"
        message="Uploading files, please wait."
        style={{ marginBottom: 'calc(-1 * var(--bs-spacing-150))' }}
      />
      <BsComposer ariaLabel="Message">
        <BsAttachmentList slot="attachments">
          <BsAttachment type="image" imageSrc={SAMPLE_IMAGE} imageAlt="Attachment preview" loading />
          <BsAttachment type="pdf" fileName="Dummy-pdf-in-here" loading />
        </BsAttachmentList>
      </BsComposer>
    </div>
  ),
};
