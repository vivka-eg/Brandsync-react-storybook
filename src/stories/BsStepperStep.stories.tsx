import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsStepperStep } from '@brandsync/react';

const meta: Meta<typeof BsStepperStep> = {
  title: 'Components/BsStepperStep',
  component: BsStepperStep,
  parameters: {
    docs: {
      description: {
        component:
          'A single step within a `bs-stepper` sequence: an icon/indicator plus a name and optional ' +
          'description, connected to the next step by a trailing rail.\n\n' +
          '`computedState` is set automatically by the parent `bs-stepper` based on this step\'s position ' +
          'relative to its `currentStep` (before it = "done", at it = "current", after it = "enabled"). This ' +
          "step's own `error`/`disabled` props, when set directly by the consumer, override that computed " +
          'value — e.g. a step before `currentStep` would normally read as "done", but `error` on that step ' +
          'wins regardless.\n\n' +
          '**When to use:** as a child of `bs-stepper`, one per step in the sequence.\n\n' +
          '**When not to use:** standalone, outside a `bs-stepper` wrapper — `computedState`/`direction`/' +
          '`showDescription` depend on that parent propagating them; alone, this defaults to ' +
          '`enabled`/`horizontal`/`true`.',
      },
    },
  },
  argTypes: {
    computedState: {
      control: 'select',
      options: ['enabled', 'current', 'done'],
      description:
        "Set automatically by the parent `bs-stepper` from this step's position relative to its `currentStep` " +
        '(before it = "done", at it = "current", after it = "enabled"). Can be set directly for a standalone step.',
    },
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Set automatically by the parent `bs-stepper`, propagated to every slotted step.',
    },
    showDescription: {
      control: 'boolean',
      description: 'Set automatically by the parent `bs-stepper`, propagated to every slotted step.',
    },
    error: {
      control: 'boolean',
      description: 'Shows the error treatment for this step, regardless of its `computedState`.',
    },
    disabled: {
      control: 'boolean',
      description:
        'Shows the disabled treatment for this step, regardless of its `computedState`. Takes priority over ' +
        '`error` if both are somehow set.',
    },
    name: {
      control: 'text',
      description: "This step's name/title.",
    },
    description: {
      control: 'text',
      description:
        'Optional supporting text below the name. Only rendered when `showDescription` (propagated from the ' +
        'parent `bs-stepper`) is also true.',
    },
  },
  args: {
    name: 'Shipping',
    description: 'Delivery address',
    computedState: 'current',
    direction: 'horizontal',
    showDescription: true,
    error: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof BsStepperStep>;

export const Current: Story = {};

export const Done: Story = {
  args: { computedState: 'done', name: 'Cart', description: 'Review items' },
};

export const Enabled: Story = {
  args: { computedState: 'enabled', name: 'Payment', description: 'Card details' },
};

export const Error: Story = {
  args: { error: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const AllStates: Story = {
  name: 'All states',
  render: () => (
    <div style={{ display: 'flex', gap: 24 }}>
      <BsStepperStep name="Cart" description="Review items" computedState="done" />
      <BsStepperStep name="Shipping" description="Delivery address" computedState="current" />
      <BsStepperStep name="Payment" description="Card details" computedState="enabled" />
      <BsStepperStep name="Confirm" description="Review order" computedState="enabled" error />
      <BsStepperStep name="Extras" description="Add-ons" computedState="enabled" disabled />
    </div>
  ),
};
