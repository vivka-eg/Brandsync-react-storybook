import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsButtonSkeleton } from '@brandsync/react';

const meta: Meta<typeof BsButtonSkeleton> = {
  title: 'Components/BsButtonSkeleton',
  component: BsButtonSkeleton,
  parameters: {
    docs: {
      description: {
        component:
          'A shape-matched loading placeholder for `bs-button`, shown while the real label/action isn\'t ' +
          'known yet (e.g. still being fetched from an API). Sized to match `bs-button`\'s `sm`/`md`/`lg` ' +
          'heights so layout doesn\'t shift once the real button renders. This is not a submit-in-progress ' +
          'spinner — that\'s a different concern (a button that\'s already rendered but waiting on an async ' +
          'action it triggered).\n\n' +
          '**When to use:** in place of a `bs-button` whose label/visibility depends on data that hasn\'t ' +
          'loaded yet.\n\n' +
          '**When not to use:** while a button\'s own click handler is running (e.g. a submit request in ' +
          'flight) — render the real `bs-button` and show its own busy/spinner state instead.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Sizing scale, matching the `bs-button` size it stands in for.',
    },
  },
  args: {
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof BsButtonSkeleton>;

export const Default: Story = {};

export const Small: Story = {
  args: { size: 'sm' },
};

export const Large: Story = {
  args: { size: 'lg' },
};

export const AllSizes: Story = {
  name: 'All sizes',
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <BsButtonSkeleton size="sm" />
      <BsButtonSkeleton size="md" />
      <BsButtonSkeleton size="lg" />
    </div>
  ),
};
