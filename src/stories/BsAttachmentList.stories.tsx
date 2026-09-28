import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsAttachmentList, BsAttachment } from '@brandsync/react';

const SAMPLE_IMAGE = 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=200&h=200&fit=crop';

const meta: Meta<typeof BsAttachmentList> = {
  title: 'Genie AI Components/BsAttachmentList',
  component: BsAttachmentList,
  parameters: {
    docs: {
      description: {
        component:
          'A horizontally-scrolling row wrapper for one or more `bs-attachment` previews, for slotting into ' +
          '`bs-composer`\'s `attachments` slot when a Genie AI chat message has file attachments.\n\n' +
          '**When to use:** wrapping any number of `bs-attachment` elements the user has attached to a ' +
          'message, so they lay out in a single row and scroll horizontally instead of wrapping/overflowing ' +
          'once there are more than fit the available width.\n\n' +
          '**When not to use:** a single attachment on its own — just render `bs-attachment` directly, this ' +
          'wrapper\'s scroll/fade affordance only matters once there\'s more content than fits.',
      },
    },
  },
  argTypes: {
    ariaLabel: {
      control: 'text',
      description: 'Accessible name for the scrollable region.',
    },
  },
  args: {
    ariaLabel: 'Attachments',
  },
};

export default meta;
type Story = StoryObj<typeof BsAttachmentList>;

export const OneAttachment: Story = {
  name: 'One attachment',
  render: args => (
    <BsAttachmentList {...args}>
      <BsAttachment type="image" imageSrc={SAMPLE_IMAGE} imageAlt="Attachment preview" />
    </BsAttachmentList>
  ),
};

export const ThreeAttachments: Story = {
  name: 'Three attachments',
  render: args => (
    <BsAttachmentList {...args}>
      <BsAttachment type="image" imageSrc={SAMPLE_IMAGE} imageAlt="Attachment preview" />
      <BsAttachment type="pdf" fileName="Dummy-pdf-in-here" />
      <BsAttachment type="document" fileName="Dummy-pdf-in-here" />
    </BsAttachmentList>
  ),
};

export const ManyAttachments: Story = {
  name: 'Many attachments (scrollable)',
  render: args => (
    <div style={{ maxWidth: 400, border: '1px dashed #c2c7d3' }}>
      <BsAttachmentList {...args}>
        <BsAttachment type="pdf" fileName="Dummy-pdf-in-here" />
        <BsAttachment type="pdf" fileName="Dummy-pdf-in-here" />
        <BsAttachment type="document" fileName="Dummy-pdf-in-here" />
        <BsAttachment type="document" fileName="Dummy-pdf-in-here" />
        <BsAttachment type="document" fileName="Dummy-pdf-in-here" />
        <BsAttachment type="image" imageSrc={SAMPLE_IMAGE} imageAlt="Attachment preview" />
      </BsAttachmentList>
    </div>
  ),
};
