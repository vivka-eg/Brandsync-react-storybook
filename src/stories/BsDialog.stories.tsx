import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type ComponentProps } from 'react';
import { BsButton, BsDialog } from '@brandsync/react';

// A real photo (Unsplash, free-to-use license), matching the sibling web-component story's example.
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1660496247667-3fb697c396af?fm=jpg&q=80&w=920&h=400&fit=crop&auto=format';

const CHECK_CIRCLE_ICON = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 12.5L10.5 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const meta: Meta<typeof BsDialog> = {
  title: 'Components/BsDialog',
  component: BsDialog,
  parameters: {
    docs: {
      description: {
        component:
          'An overlay dialog that interrupts the current flow for a focused task or confirmation. Closes ' +
          'itself on backdrop click, Escape, or its own close button, and emits `bsClose`.\n\n' +
          '**When to use:** confirming a consequential action (e.g. "Confirm booking") before it takes ' +
          'effect; a short, focused task that doesn\'t warrant navigating to a new page.\n\n' +
          '**When not to use:** for non-blocking status messages — use a toast/notification instead of ' +
          'interrupting the user; for a long, multi-step flow — a full page or a dedicated route is usually ' +
          'a better fit than a dialog that just gets taller and taller.',
      },
    },
  },
  argTypes: {
    heading: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    centered: {
      control: 'boolean',
      description:
        'Switches to the Figma "Icon Centered" layout: heading/body text centered, the `icon` slot rendered above the heading, and the close button floating top-right of the dialog instead of inline in the header row. Doesn\'t hide a slotted `image` if one is also provided. Reflected so consumers/CSS can target `bs-dialog[centered]`.',
    },
  },
  args: {
    heading: 'Confirm booking',
    size: 'md',
    centered: false,
  },
};

export default meta;
type Story = StoryObj<typeof BsDialog>;

// bs-dialog closes itself (backdrop click, Escape, close button) and emits bsClose so the
// consumer can react -- here that just flips the trigger's own open state back off.
function DialogDemo(args: ComponentProps<typeof BsDialog>) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BsButton onClick={() => setOpen(true)}>Open dialog</BsButton>
      <BsDialog {...args} open={open} onBsClose={() => setOpen(false)}>
        <p>Meeting Room 4B, 2:00pm - 3:00pm. This will send a calendar invite to all attendees.</p>
        <BsButton slot="footer" variant="subtle" size="sm" onClick={() => setOpen(false)}>
          Cancel
        </BsButton>
        <BsButton slot="footer" size="sm" onClick={() => setOpen(false)}>
          Confirm
        </BsButton>
      </BsDialog>
    </>
  );
}

export const Default: Story = {
  render: args => <DialogDemo {...args} />,
};

// Presence of the image slot's content is what shows the hero image and switches the close button
// to float over it, not a prop.
export const WithImage: Story = {
  name: 'With image',
  render: args => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <BsButton onClick={() => setOpen(true)}>Open dialog</BsButton>
        <BsDialog {...args} open={open} onBsClose={() => setOpen(false)}>
          <img slot="image" src={HERO_IMAGE} alt="" />
          <p>
            Sunset Towers is a premium commercial space located in the heart of the city. It offers flexible office
            layouts, modern amenities, and 24/7 security.
          </p>
          <BsButton slot="footer" variant="subtle" size="sm" onClick={() => setOpen(false)}>
            Cancel
          </BsButton>
          <BsButton slot="footer" size="sm" onClick={() => setOpen(false)}>
            Confirm
          </BsButton>
        </BsDialog>
      </>
    );
  },
};

// Switches to the "Icon Centered" layout: heading/body text centered, the icon slot rendered above
// the heading (only shown at all when `centered` is true), and a floating close button.
export const Centered: Story = {
  args: { centered: true, heading: 'Booking confirmed' },
  render: args => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <BsButton onClick={() => setOpen(true)}>Open dialog</BsButton>
        <BsDialog {...args} open={open} onBsClose={() => setOpen(false)}>
          <span slot="icon" style={{ color: 'var(--bs-color-primary-default)' }}>
            {CHECK_CIRCLE_ICON}
          </span>
          <p>Your reservation for Meeting Room 4B has been sent to all attendees.</p>
          <BsButton slot="footer" variant="subtle" size="sm" onClick={() => setOpen(false)}>
            Close
          </BsButton>
        </BsDialog>
      </>
    );
  },
};
