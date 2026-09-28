import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsChipInput, BsAvatar } from '@brandsync/react';

const tagIcon = (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M2 2h5.5L14 8.5 8.5 14 2 7.5V2z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="5" cy="5" r="0.8" fill="currentColor" />
  </svg>
);

const meta: Meta<typeof BsChipInput> = {
  title: 'Components/BsChipInput',
  component: BsChipInput,
  parameters: {
    docs: {
      description: {
        component:
          'A pill-shaped, removable representation of a discrete piece of user-entered data (e.g. a ' +
          'tag, a selected filter value, an invited email address), optionally paired with a leading ' +
          'icon or avatar. Unlike `BsChipFilter`, this is a compound control — the body toggles ' +
          '`selected`, and a separate trailing button removes the chip entirely.\n\n' +
          '**When to use:** representing one entry in a list the user built themselves (tags, ' +
          'recipients, multi-select values) that they need to be able to remove individually.\n\n' +
          '**When not to use:** a single toggleable filter, with no removal affordance — use ' +
          '`BsChipFilter`; a static, non-interactive status/category label — use `BsBadge`.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['md', 'lg'],
      description:
        "Sizing scale. Controls the chip's height only — icon size, gap, and font size stay constant across sizes, matching the Figma spec exactly.",
    },
    selected: {
      control: 'boolean',
      description:
        'Whether the chip reads as toggled on. Mutable so clicking the body toggles directly, and reflected so consumers can target `bs-chip-input[selected]` via CSS.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables both the body and the remove button, and reflected so `:host([disabled])` can apply the disabled token set.',
    },
  },
  args: {
    size: 'md',
    selected: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof BsChipInput>;

export const Default: Story = {
  render: args => <BsChipInput {...args}>Marketing</BsChipInput>,
};

export const Selected: Story = {
  args: { selected: true },
  render: args => <BsChipInput {...args}>Marketing</BsChipInput>,
};

export const WithIcon: Story = {
  render: args => (
    <BsChipInput {...args}>
      <span slot="icon">{tagIcon}</span>
      Marketing
    </BsChipInput>
  ),
};

export const WithAvatar: Story = {
  name: 'With avatar',
  render: args => (
    <BsChipInput {...args}>
      <BsAvatar slot="icon" type="initials" initials="SL" size="xs" />
      Sam Lee
    </BsChipInput>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: args => <BsChipInput {...args}>Marketing</BsChipInput>,
};

export const RemovableList: Story = {
  name: 'Removable list',
  render: () => {
    const tags = ['Marketing', 'Design', 'Engineering'];
    return (
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {tags.map(tag => (
          <BsChipInput key={tag} onBsRemove={() => console.log(`remove ${tag}`)}>
            {tag}
          </BsChipInput>
        ))}
      </div>
    );
  },
};
