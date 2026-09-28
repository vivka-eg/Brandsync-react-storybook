import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsInput } from '@brandsync/react';

const MailIcon = () => (
  <svg slot="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M2 4L8 9L14 4M2 4H14V12H2V4Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const meta: Meta<typeof BsInput> = {
  title: 'Components/BsInput',
  component: BsInput,
  parameters: {
    docs: {
      description: {
        component:
          'A single-line text field with an optional label, description, and error state. Also covers a ' +
          'range of related "field" shapes (number stepper, password reveal, date, dropdown trigger, select, ' +
          'textarea, chip input, initials, country, and pin) via the `type` prop, since they all share the ' +
          'same label/description/error/icon-slot chrome.\n\n' +
          '**When to use:** collecting a single line of free-text, email, password, or numeric input; any ' +
          'of the other supported `type`s (search, date, dropdown, select, textarea, chip, initials, ' +
          'country, pin) that share this component\'s label/description/error chrome; pair with `error` for ' +
          'inline validation feedback tied to that specific field.\n\n' +
          '**When not to use:** a fixed set of choices best served by a dedicated radio/checkbox group ' +
          'rather than a single field. `type="select"` (native `<select>`) and `type="dropdown"` (a `BsMenu` ' +
          'of `BsMenuItem`s from the `options` prop) cover the field-shaped cases; `type="chip"` has no ' +
          'options list at all (freeform chip entry).',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: [
        'text',
        'email',
        'password',
        'number',
        'search',
        'date',
        'dropdown',
        'select',
        'textarea',
        'chip',
        'initials',
        'country',
        'pin',
      ],
    },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    description: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    required: {
      control: 'boolean',
      description:
        'Marks the field as required: renders a red `*` after the label and sets `aria-required="true"` on ' +
        'the control. Applies regardless of `type`.',
    },
  },
  args: {
    type: 'text',
    label: 'Email address',
    placeholder: 'you@example.com',
    disabled: false,
    required: false,
  },
};

export default meta;
type Story = StoryObj<typeof BsInput>;

export const Default: Story = {
  render: args => (
    <BsInput {...args}>
      <MailIcon />
    </BsInput>
  ),
};

export const WithError: Story = {
  args: { error: 'Enter a valid email address.' },
  render: args => (
    <BsInput {...args}>
      <MailIcon />
    </BsInput>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: args => (
    <BsInput {...args}>
      <MailIcon />
    </BsInput>
  ),
};

export const Dropdown: Story = {
  render: () => (
    <BsInput
      type="dropdown"
      label="Country"
      placeholder="Select a country"
      value="Denmark"
      open
      options={[
        { label: 'Denmark', value: 'dk' },
        { label: 'Sweden', value: 'se' },
        { label: 'Norway', value: 'no' },
      ]}
    />
  ),
};

export const Select: Story = {
  render: () => (
    <BsInput
      type="select"
      label="Role"
      options={[
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
        { label: 'Viewer', value: 'viewer' },
      ]}
    />
  ),
};

export const Chip: Story = {
  render: () => <BsInput type="chip" label="Tags" chips={['design', 'frontend']} placeholder="Add a tag..." />,
};

export const Country: Story = {
  render: () => (
    <BsInput
      type="country"
      label="Phone number"
      placeholder="Phone number"
      countryOptions={[
        { code: 'DK', label: 'Denmark' },
        { code: 'US', label: 'United States' },
        { code: 'GB', label: 'United Kingdom' },
      ]}
    />
  ),
};

export const Pin: Story = {
  render: () => <BsInput type="pin" label="Verification code" length={4} />,
};
