import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsButton, BsTooltip } from '@brandsync/react';

const meta: Meta<typeof BsTooltip> = {
  title: 'Components/BsTooltip',
  component: BsTooltip,
  parameters: {
    docs: {
      description: {
        component:
          'A dark tooltip bubble with a pointer arrow, used to surface a short hint of extra information next ' +
          'to a trigger element.\n\n' +
          '`bs-tooltip` is a purely presentational bubble — it does not manage its own visibility, hover/focus ' +
          'triggering, or positioning relative to a trigger element. A consuming app is responsible for ' +
          'showing/hiding it and for positioning it against its trigger (e.g. via a wrapping ' +
          '`position: relative`/`absolute` pattern).\n\n' +
          '**When to use:** a short, contextual hint of extra information shown next to a trigger element on ' +
          "hover/focus, where the host app owns the show/hide and positioning logic.\n\n" +
          '**When not to use:** a component that manages its own trigger interaction (hover/focus listeners) ' +
          'or positioning — this component intentionally does not do that; wire that up in the consuming app ' +
          'instead.',
      },
    },
  },
  argTypes: {
    placement: {
      control: 'select',
      options: ['top'],
      description:
        'Which edge of the bubble the arrow points from, and therefore which side of a trigger the bubble ' +
        'should be placed on. `\'top\'` is the only value implemented — it is the only variant confirmed from ' +
        "the Figma component. Bottom/left/right variants aren't implemented pending further design confirmation.",
    },
  },
  args: {
    placement: 'top',
  },
};

export default meta;
type Story = StoryObj<typeof BsTooltip>;

export const Default: Story = {
  render: args => <BsTooltip {...args}>I&apos;m a tooltip. I show extra information when you hover or focus.</BsTooltip>,
};

export const WithTrigger: Story = {
  name: 'Positioned against a trigger (consumer pattern)',
  render: args => (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <BsButton>Hover me</BsButton>
      <div style={{ position: 'absolute', top: 'calc(100% + 6px)', left: '50%', transform: 'translateX(-50%)' }}>
        <BsTooltip {...args}>I&apos;m a tooltip. I show extra information when you hover or focus.</BsTooltip>
      </div>
    </div>
  ),
};
