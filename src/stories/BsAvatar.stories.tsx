import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsAvatar } from '@brandsync/react';

const PLACEHOLDER_PHOTO = 'https://i.pravatar.cc/256?img=68';

const meta: Meta<typeof BsAvatar> = {
  title: 'Components/BsAvatar',
  component: BsAvatar,
  parameters: {
    docs: {
      description: {
        component:
          'A circular representation of a person or entity — a photo, initials, or (as a fallback when ' +
          'neither is available) a generic user-silhouette icon.\n\n' +
          '**When to use:** representing a specific user or account (header, comment, member list); ' +
          '`type="initials"` when a photo isn\'t available but a name is (e.g. "Sam Lee" → "SL"); ' +
          '`type="icon"` (the default) as the generic fallback when neither is available yet.\n\n' +
          '**When not to use:** for a company/brand logo — use `BsLogo` instead.\n\n' +
          'Decorative/informational by default, not an interactive control — no implicit role/tabindex ' +
          'of its own, though it does carry real `:hover`/`:focus-visible`/`:active` CSS for consumers ' +
          'who wrap it in their own button.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['icon', 'initials', 'image'],
      description:
        'What to render inside the circle. `icon` (default) is the generic fallback for when neither a photo nor initials are available yet.',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      description: "Sizing scale — `xs` (24px) through `xxl` (128px), matching Figma's own six-step scale.",
    },
    initials: {
      control: 'text',
      description: '`type="initials"` only: the initials text to display (e.g. "SL" for "Sam Lee"). Ignored for `icon`/`image`.',
    },
    src: {
      control: 'text',
      description:
        '`type="image"` only: the photo URL. This component does not fetch it itself — network calls, loading/error states, and caching are the consuming app\'s responsibility. Ignored for `icon`/`initials`.',
    },
    alt: {
      control: 'text',
      description:
        '`type="image"` only: accessible alt text for the photo, set directly on the real `<img>` this renders. Falls back to `alt=""` (decorative) when unset. Ignored for `icon`/`initials` — see `ariaLabel` for those instead.',
    },
    ariaLabel: {
      control: 'text',
      description:
        '`type="icon"`/`"initials"` only: accessible name for the avatar, set as `aria-label` on the `role="img"` wrapper this renders. Ignored for `image` — see `alt` for that instead.',
    },
    disabled: {
      control: 'boolean',
      description:
        'Applies the disabled treatment (50% opacity) and suppresses the hover/focus/pressed CSS states. Purely a visual/interaction-state flag — this renders no native form control.',
    },
  },
  args: {
    type: 'icon',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof BsAvatar>;

export const Icon: Story = {};

export const Initials: Story = {
  args: { type: 'initials', initials: 'SL' },
};

export const Image: Story = {
  args: { type: 'image', src: PLACEHOLDER_PHOTO, alt: 'Sam Lee' },
};

export const AllSizes: Story = {
  name: 'All sizes',
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      {(['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const).map(size => (
        <BsAvatar key={size} type="image" size={size} src={PLACEHOLDER_PHOTO} alt="Sam Lee" />
      ))}
    </div>
  ),
};
