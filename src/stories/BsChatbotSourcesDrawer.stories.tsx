import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsChatbotSourcesDrawer, BsSourceLink } from '@brandsync/react';

const meta: Meta<typeof BsChatbotSourcesDrawer> = {
  title: 'Genie AI Components/BsChatbotSourcesDrawer',
  component: BsChatbotSourcesDrawer,
  parameters: {
    docs: {
      description: {
        component:
          'The "Sources" panel shown alongside a Genie AI chat response — a header with a title, a count ' +
          'badge, and a collapse chevron, above a stack of `bs-source-link` citation rows.\n\n' +
          '**When to use:** displaying the documents/sources a Genie response cited, typically opened from ' +
          'a "view sources" action on a `bs-chatbot-response-action` bar.\n\n' +
          '**When not to use:** a generic list container — this component\'s header (title + count + ' +
          'collapse) is purpose-built for the sources use case.',
      },
    },
  },
  argTypes: {
    heading: {
      control: 'text',
      description: 'The panel title.',
    },
  },
  args: {
    heading: 'Sources',
  },
};

export default meta;
type Story = StoryObj<typeof BsChatbotSourcesDrawer>;

export const Default: Story = {
  render: args => (
    <div style={{ maxWidth: 380, height: 400, border: '1px solid var(--bs-border-default)', borderRadius: 'var(--bs-border-radius-150)', overflow: 'hidden' }}>
      <BsChatbotSourcesDrawer {...args} onBsCollapse={() => console.log('bsCollapse')}>
        <BsSourceLink fileName="Employee Handbook 2026" sourceName="HoltePortalen" version="v3.2" />
        <BsSourceLink fileName="Payroll Processing Guide" sourceName="WorkdayHQ" version="v2.4" />
        <BsSourceLink fileName="Benefits & Leave Policy" sourceName="PeopleOps Wiki" version="v1.8" />
      </BsChatbotSourcesDrawer>
    </div>
  ),
};

export const Empty: Story = {
  render: args => (
    <div style={{ maxWidth: 380, height: 200, border: '1px solid var(--bs-border-default)', borderRadius: 'var(--bs-border-radius-150)', overflow: 'hidden' }}>
      <BsChatbotSourcesDrawer {...args} />
    </div>
  ),
};

export const ManySources: Story = {
  name: 'Many sources (scrollable)',
  render: args => (
    <div style={{ maxWidth: 380, height: 300, border: '1px solid var(--bs-border-default)', borderRadius: 'var(--bs-border-radius-150)', overflow: 'hidden' }}>
      <BsChatbotSourcesDrawer {...args}>
        <BsSourceLink fileName="Employee Handbook 2026" sourceName="HoltePortalen" version="v3.2" />
        <BsSourceLink fileName="Payroll Processing Guide" sourceName="WorkdayHQ" version="v2.4" />
        <BsSourceLink fileName="Benefits & Leave Policy" sourceName="PeopleOps Wiki" version="v1.8" />
        <BsSourceLink fileName="Onboarding Checklist" sourceName="HoltePortalen" version="v1.0" />
        <BsSourceLink fileName="IT Security Policy" sourceName="WorkdayHQ" version="v4.1" />
        <BsSourceLink fileName="Remote Work Guidelines" sourceName="PeopleOps Wiki" version="v2.0" />
      </BsChatbotSourcesDrawer>
    </div>
  ),
};
