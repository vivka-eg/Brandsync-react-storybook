import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsComposer, BsAttachmentList, BsAttachment } from '@brandsync/react';

const variants = ['ai', 'human'] as const;
const states = ['idle', 'generating', 'disabled', 'recording'] as const;

const SAMPLE_IMAGE = 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=200&h=200&fit=crop';

const meta: Meta<typeof BsComposer> = {
  title: 'Genie AI Components/BsComposer',
  component: BsComposer,
  parameters: {
    docs: {
      description: {
        component:
          'A chat composer input for Genie AI-style conversational interfaces: a text field plus an attach ' +
          'button, a mic/voice-recording toggle, and a single primary action button whose icon and behavior ' +
          'change with `state` (send, stop generating, or confirm a voice recording).\n\n' +
          '**When to use:** the message-entry bar for an AI chat/assistant or human support conversation.\n\n' +
          '**When not to use:** a general-purpose text field — use `bs-input` instead; this component\'s ' +
          'layout and states are purpose-built for a chat composer, not a generic form field.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: variants,
      description:
        'Which flavor of composer this is: changes the default placeholder text (set `placeholder` directly ' +
        'to override it) and, per the Figma design, renders the container border dashed instead of solid ' +
        'for `\'human\'` — a deliberate visual cue distinguishing a human-support composer from the AI one, ' +
        'not a layout/token difference.',
    },
    state: {
      control: 'select',
      options: states,
      description:
        'Which of the four mutually-exclusive composer states to render: `idle` (send, enabled), ' +
        '`generating` (stop, while the AI is responding), `disabled` (send, but not interactive), or ' +
        '`recording` (voice input in progress — shows a waveform and a confirm action).',
    },
    value: {
      control: 'text',
      description:
        "Current text value. Native `input` events don't cross the Shadow DOM boundary, so this component " +
        're-dispatches them as a `bsInput` custom event instead. The field is a `<textarea>` (not a ' +
        'single-line `<input>`) that grows with its content, up to `--bs-composer-input-max-lines` worth of ' +
        'height, then scrolls internally instead of growing further.',
    },
    placeholder: {
      control: 'text',
      description: "Overrides the variant's default placeholder.",
    },
  },
  args: {
    variant: 'ai',
    state: 'idle',
    value: '',
    placeholder: '',
  },
};

export default meta;
type Story = StoryObj<typeof BsComposer>;

export const Default: Story = {
  render: args => (
    <BsComposer
      {...args}
      ariaLabel="Message"
      onBsInput={e => console.log('bsInput', e.detail)}
      onBsSubmit={() => console.log('bsSubmit')}
      onBsAttach={() => console.log('bsAttach')}
      onBsMicToggle={() => console.log('bsMicToggle')}
    />
  ),
};

export const Human: Story = {
  args: { variant: 'human' },
  render: args => <BsComposer {...args} ariaLabel="Message" />,
};

export const Generating: Story = {
  args: { state: 'generating', value: 'Summarize this thread for me' },
  render: args => <BsComposer {...args} ariaLabel="Message" onBsStop={() => console.log('bsStop')} />,
};

export const Recording: Story = {
  args: { state: 'recording', value: 'Here is what I have so far' },
  render: args => <BsComposer {...args} ariaLabel="Message" onBsVoiceConfirm={() => console.log('bsVoiceConfirm')} />,
};

export const WithAttachments: Story = {
  name: 'With attachments',
  render: () => (
    <div style={{ maxWidth: 420 }}>
      <BsComposer ariaLabel="Message">
        <BsAttachmentList slot="attachments">
          <BsAttachment type="image" imageSrc={SAMPLE_IMAGE} imageAlt="Attachment preview" />
          <BsAttachment type="pdf" fileName="Dummy-pdf-in-here" />
        </BsAttachmentList>
      </BsComposer>
    </div>
  ),
};

export const AllStates: Story = {
  name: 'All variants x states',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 420 }}>
      {variants.map(variant => (
        <div key={variant} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <h4 style={{ margin: 0, fontFamily: 'sans-serif', textTransform: 'capitalize' }}>{variant}</h4>
          {states.map(state => (
            <div key={state}>
              <div style={{ fontSize: 12, fontFamily: 'monospace', color: '#888', marginBottom: 4 }}>{state}</div>
              <BsComposer
                variant={variant}
                state={state}
                value={state === 'recording' ? 'Here is what I have so far' : ''}
                ariaLabel="Message"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
};
