import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsCheckboxSkeleton } from '@brandsync/react';

const meta: Meta<typeof BsCheckboxSkeleton> = {
  title: 'Components/BsCheckboxSkeleton',
  component: BsCheckboxSkeleton,
  parameters: {
    docs: {
      description: {
        component:
          'A shape-matched loading placeholder for `bs-checkbox`, shown while the real label text isn\'t ' +
          'known yet (e.g. still being fetched from an API). Renders a small square (matching the checkbox\'s ' +
          'own box) beside a text-bar placeholder (standing in for the label), both pulsing together, sized ' +
          'to match `bs-checkbox`\'s `sm`/`md`/`lg` box dimensions so layout doesn\'t shift once the real ' +
          'checkbox renders.\n\n' +
          '**When to use:** in place of a `bs-checkbox` whose label/checked state depends on data that ' +
          'hasn\'t loaded yet.\n\n' +
          '**When not to use:** while a checkbox\'s own change handler is running (e.g. a save request in ' +
          'flight) — render the real `bs-checkbox` itself; this component is not a saving-in-progress ' +
          'spinner.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description:
        'Sizing scale, matching the `bs-checkbox` size it stands in for. Defaults to `lg`, the same (unusual) default `bs-checkbox` itself uses.',
    },
  },
  args: {
    size: 'lg',
  },
};

export default meta;
type Story = StoryObj<typeof BsCheckboxSkeleton>;

export const Default: Story = {};

export const AllSizes: Story = {
  name: 'All sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
      <BsCheckboxSkeleton size="sm" />
      <BsCheckboxSkeleton size="md" />
      <BsCheckboxSkeleton size="lg" />
    </div>
  ),
};
