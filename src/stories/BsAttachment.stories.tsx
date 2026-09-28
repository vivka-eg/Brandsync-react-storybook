import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsAttachment } from '@brandsync/react';

const SAMPLE_IMAGE = 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=200&h=200&fit=crop';

const meta: Meta<typeof BsAttachment> = {
  title: 'Genie AI Components/BsAttachment',
  component: BsAttachment,
  parameters: {
    docs: {
      description: {
        component:
          'A single file attachment preview for `bs-composer` — an image thumbnail, or a filename card with ' +
          'a colored file-type badge (PDF/Document), with an optional upload-in-progress spinner and a ' +
          'hover/focus-revealed remove button.\n\n' +
          '**When to use:** rendered by the consuming app for each file a user has attached to a Genie AI ' +
          'chat message, typically alongside or inside `bs-composer`.\n\n' +
          '**When not to use:** a generic file-upload control — this is a preview-only presentational ' +
          'component. The consuming app owns the actual file picker/upload logic and drives `loading` from ' +
          'that state.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['image', 'pdf', 'document'],
      description: 'Which kind of attachment preview to render.',
    },
    fileName: {
      control: 'text',
      description: 'The filename shown on the card. Only used when `type` is "pdf" or "document".',
    },
    imageSrc: {
      control: 'text',
      description: 'The thumbnail image URL. Only used when `type` is "image".',
    },
    imageAlt: {
      control: 'text',
      description: 'Accessible alt text for the image thumbnail. Only used when `type` is "image".',
    },
    loading: {
      control: 'boolean',
      description:
        'Shows an upload-in-progress spinner (blurred + overlaid for images, in the badge for files).',
    },
    removable: {
      control: 'boolean',
      description: 'Whether the hover/focus-revealed remove button is rendered at all.',
    },
  },
  args: {
    type: 'image',
    fileName: 'Dummy-pdf-in-here',
    imageSrc: SAMPLE_IMAGE,
    imageAlt: 'Attachment preview',
    loading: false,
    removable: true,
  },
};

export default meta;
type Story = StoryObj<typeof BsAttachment>;

export const Image: Story = {
  render: args => <BsAttachment {...args} onBsRemove={() => console.log('bsRemove')} />,
};

export const Pdf: Story = {
  args: { type: 'pdf' },
};

export const Document: Story = {
  args: { type: 'document' },
};

export const Loading: Story = {
  args: { loading: true },
};

export const AllTypes: Story = {
  name: 'All types',
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <BsAttachment type="image" imageSrc={SAMPLE_IMAGE} imageAlt="Attachment preview" />
      <BsAttachment type="pdf" fileName="Dummy-pdf-in-here" />
      <BsAttachment type="document" fileName="Dummy-pdf-in-here" />
      <BsAttachment type="image" imageSrc={SAMPLE_IMAGE} imageAlt="Attachment preview" loading />
      <BsAttachment type="pdf" fileName="Dummy-pdf-in-here" loading />
      <BsAttachment type="document" fileName="Dummy-pdf-in-here" loading />
    </div>
  ),
};
