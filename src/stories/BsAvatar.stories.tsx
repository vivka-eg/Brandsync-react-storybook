import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsAvatar } from '@brandsync/react';

const PLACEHOLDER_PHOTO = 'https://i.pravatar.cc/256?img=68';

const meta: Meta<typeof BsAvatar> = {
  title: 'Components/BsAvatar',
  component: BsAvatar,
  argTypes: {
    type: { control: 'select', options: ['icon', 'initials', 'image'] },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] },
  },
  args: {
    type: 'icon',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof BsAvatar>;

export const Icon: Story = {};

export const Initials: Story = {
  args: { type: 'initials', initials: 'SL' },
};

export const Image: Story = {
  args: { type: 'image', src: PLACEHOLDER_PHOTO, alt: 'Sam Lee' },
};

export const AllSizes: Story = {
  name: 'All sizes',
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      {(['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const).map(size => (
        <BsAvatar key={size} type="image" size={size} src={PLACEHOLDER_PHOTO} alt="Sam Lee" />
      ))}
    </div>
  ),
};
