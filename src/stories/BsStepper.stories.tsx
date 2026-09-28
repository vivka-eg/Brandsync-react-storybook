import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsStepper, BsStepperStep } from '@brandsync/react';

const meta: Meta<typeof BsStepper> = {
  title: 'Components/BsStepper',
  component: BsStepper,
  parameters: {
    docs: {
      description: {
        component:
          'A sequence of named steps showing overall progress through a multi-step flow (e.g. a checkout, an ' +
          'onboarding wizard) — each step reads as enabled (not yet reached), current, done, error, or ' +
          'disabled, connected by a rail between them.\n\n' +
          'This container is intentionally thin: it renders a slot for `bs-stepper-step` children and ' +
          'propagates `currentStep`/`direction`/`showDescription` down to them, and each step computes its own ' +
          'enabled/current/done state from its position among its siblings relative to `currentStep`, unless ' +
          "that step's own `error`/`disabled` prop overrides it. This is a static status display, not an " +
          'interactive control — nothing here is clickable.\n\n' +
          '**When to use:** showing where the user is in a fixed, ordered, multi-step flow.\n\n' +
          "**When not to use:** a flow whose steps aren't fixed/known in advance — a stepper implies the full " +
          'sequence is already known; as a substitute for actual in-page navigation between steps — pair this ' +
          'with real controls (Next/Back buttons) elsewhere in the flow, this component only displays status.',
      },
    },
  },
  argTypes: {
    currentStep: {
      control: { type: 'number', min: 0, max: 3 },
      description:
        '0-indexed: which step is current. Every step before this index reads as "done" (unless that step\'s ' +
        'own `error`/`disabled` overrides it), every step after reads as "enabled".',
    },
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description:
        '`horizontal` (icon above name/description, connected by a horizontal rail) or `vertical` (icon ' +
        'beside name/description, connected by a vertical rail). Propagated to every slotted `bs-stepper-step`.',
    },
    showDescription: {
      control: 'boolean',
      description: "Whether each step's description renders at all. Propagated to every slotted `bs-stepper-step`.",
    },
  },
  args: {
    currentStep: 1,
    direction: 'horizontal',
    showDescription: true,
  },
};

export default meta;
type Story = StoryObj<typeof BsStepper>;

export const Default: Story = {
  render: args => (
    <BsStepper {...args}>
      <BsStepperStep name="Cart" description="Review items" />
      <BsStepperStep name="Shipping" description="Delivery address" />
      <BsStepperStep name="Payment" description="Card details" />
      <BsStepperStep name="Confirm" description="Review order" />
    </BsStepper>
  ),
};

export const Vertical: Story = {
  args: { direction: 'vertical' },
  render: args => (
    <BsStepper {...args}>
      <BsStepperStep name="Cart" description="Review items" />
      <BsStepperStep name="Shipping" description="Delivery address" />
      <BsStepperStep name="Payment" description="Card details" />
      <BsStepperStep name="Confirm" description="Review order" />
    </BsStepper>
  ),
};

export const WithError: Story = {
  name: 'With an error step',
  args: { currentStep: 2 },
  render: args => (
    <BsStepper {...args}>
      <BsStepperStep name="Cart" description="Review items" />
      <BsStepperStep name="Shipping" description="Delivery address" error />
      <BsStepperStep name="Payment" description="Card details" />
      <BsStepperStep name="Confirm" description="Review order" />
    </BsStepper>
  ),
};

export const NoDescription: Story = {
  name: 'No description',
  args: { showDescription: false },
  render: args => (
    <BsStepper {...args}>
      <BsStepperStep name="Cart" description="Review items" />
      <BsStepperStep name="Shipping" description="Delivery address" />
      <BsStepperStep name="Payment" description="Card details" />
      <BsStepperStep name="Confirm" description="Review order" />
    </BsStepper>
  ),
};
