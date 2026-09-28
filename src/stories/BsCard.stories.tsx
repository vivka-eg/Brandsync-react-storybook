import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsButton, BsCard } from '@brandsync/react';

// A real photo (Unsplash, free-to-use license), matching the sibling web-component story's example.
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1660496247667-3fb697c396af?fm=jpg&q=80&w=640&h=360&fit=crop&auto=format';

const meta: Meta<typeof BsCard> = {
  title: 'Components/BsCard',
  component: BsCard,
  parameters: {
    docs: {
      description: {
        component:
          'A bounded surface for grouping related content — a summary, a form section, a list item.\n\n' +
          '**When to use:** grouping a self-contained piece of content that needs visual separation from the ' +
          'page background (e.g. a booking summary, a settings section).\n\n' +
          '**When not to use:** as the only structural element on a page — cards group content, they don\'t ' +
          'replace layout; for a dismissible/transient message — use a modal or a dedicated notification ' +
          'component.',
      },
    },
  },
  argTypes: {
    surface: {
      control: 'select',
      options: ['base', 'raised', 'container'],
      description:
        'Maps to the brandsync-tokens `--bs-paper-bg-*` set — Brandsync\'s tokens don\'t have a dedicated "card" component yet, so this reuses the existing Paper surface tokens.',
    },
  },
  args: {
    surface: 'raised',
  },
};

export default meta;
type Story = StoryObj<typeof BsCard>;

export const Raised: Story = {
  render: args => (
    <BsCard {...args} style={{ maxWidth: 320 }}>
      <strong slot="header">Booking confirmed</strong>
      <p>Meeting Room 4B is reserved for 2:00pm - 3:00pm.</p>
      <BsButton slot="footer" variant="subtle" size="sm">
        Cancel
      </BsButton>
      <BsButton slot="footer" variant="outlined" size="sm">
        View details
      </BsButton>
    </BsCard>
  ),
};

export const Base: Story = {
  args: { surface: 'base' },
  render: args => (
    <BsCard {...args} style={{ maxWidth: 320 }}>
      <strong slot="header">Booking confirmed</strong>
      <p>Meeting Room 4B is reserved for 2:00pm - 3:00pm.</p>
      <BsButton slot="footer" variant="subtle" size="sm">
        Cancel
      </BsButton>
      <BsButton slot="footer" variant="outlined" size="sm">
        View details
      </BsButton>
    </BsCard>
  ),
};

export const Container: Story = {
  args: { surface: 'container' },
  render: args => (
    <BsCard {...args} style={{ maxWidth: 320 }}>
      <strong slot="header">Booking confirmed</strong>
      <p>Meeting Room 4B is reserved for 2:00pm - 3:00pm.</p>
      <BsButton slot="footer" variant="subtle" size="sm">
        Cancel
      </BsButton>
      <BsButton slot="footer" variant="outlined" size="sm">
        View details
      </BsButton>
    </BsCard>
  ),
};

// Presence of the image slot's content is what shows the hero image, not a prop.
export const WithImage: Story = {
  name: 'With image',
  render: args => (
    <BsCard {...args} style={{ maxWidth: 320 }}>
      <img slot="image" src={HERO_IMAGE} alt="" />
      <strong slot="header">Booking confirmed</strong>
      <p>Meeting Room 4B is reserved for 2:00pm - 3:00pm.</p>
      <BsButton slot="footer" variant="subtle" size="sm">
        Cancel
      </BsButton>
      <BsButton slot="footer" variant="outlined" size="sm">
        View details
      </BsButton>
    </BsCard>
  ),
};
