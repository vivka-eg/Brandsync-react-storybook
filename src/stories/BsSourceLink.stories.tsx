import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsSourceLink } from '@brandsync/react';

const meta: Meta<typeof BsSourceLink> = {
  title: 'Genie AI Components/BsSourceLink',
  component: BsSourceLink,
  parameters: {
    docs: {
      description: {
        component:
          'A single citation row inside `bs-chatbot-sources-drawer` — a file icon + filename on the first ' +
          'line, the originating system and version on the second, and a trailing "open" arrow.\n\n' +
          '**When to use:** one row per source Genie cited in a response, slotted into ' +
          '`bs-chatbot-sources-drawer`.\n\n' +
          '**When not to use:** outside the sources drawer context — this is a purpose-built citation row, ' +
          'not a generic link/list-item component.',
      },
    },
  },
  argTypes: {
    fileName: {
      control: 'text',
      description: "The cited document's filename.",
    },
    sourceName: {
      control: 'text',
      description: 'The system/app the document came from (e.g. "HoltePortalen").',
    },
    version: {
      control: 'text',
      description: "The document's version label (e.g. \"v3.2\"). Omit if the source has no version.",
    },
    href: {
      control: 'text',
      description:
        'If set, renders the row as a link that opens this URL; otherwise as a button that only emits `bsOpen`.',
    },
  },
  args: {
    fileName: 'Employee Handbook 2026',
    sourceName: 'HoltePortalen',
    version: 'v3.2',
  },
};

export default meta;
type Story = StoryObj<typeof BsSourceLink>;

export const Default: Story = {
  render: args => <BsSourceLink {...args} onBsOpen={() => console.log('bsOpen')} />,
};

export const WithoutVersion: Story = {
  name: 'Without version',
  args: { version: undefined },
};

export const WithoutSourceOrVersion: Story = {
  name: 'Without source or version',
  args: { sourceName: undefined, version: undefined },
};

export const AsLink: Story = {
  name: 'As a real link',
  args: { href: 'https://example.com/employee-handbook-2026', target: '_blank' },
};
