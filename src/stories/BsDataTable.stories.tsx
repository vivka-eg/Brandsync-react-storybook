import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsDataTable } from '@brandsync/react';

const columns = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'department', label: 'Department', sortable: true },
  { key: 'status', label: 'Status' },
];

const rows = [
  { id: 1, name: 'Amelia Torres', department: 'Facilities', status: 'Active' },
  { id: 2, name: 'Noah Whitfield', department: 'Engineering', status: 'Active' },
  { id: 3, name: 'Priya Nair', department: 'Design', status: 'On leave' },
];

const meta: Meta<typeof BsDataTable> = {
  title: 'Components/BsDataTable',
  component: BsDataTable,
  parameters: {
    docs: {
      description: {
        component:
          'A sortable, optionally row-selectable table for tabular data.\n\n' +
          '**When to use:** comparing structured records across the same set of fields (a list of people, ' +
          'bookings, etc.).\n\n' +
          '**When not to use:** a handful of unrelated key/value pairs — a simple list or card is ' +
          'lighter-weight; deeply nested/hierarchical data — this component renders one flat row per record.',
      },
    },
  },
  argTypes: {
    sortDirection: { control: 'select', options: ['asc', 'desc'] },
    selectable: { control: 'boolean' },
  },
  args: {
    columns,
    rows,
    selectable: false,
  },
};

export default meta;
type Story = StoryObj<typeof BsDataTable>;

export const Default: Story = {
  render: args => <BsDataTable {...args} onBsSort={e => console.log('bsSort', e.detail)} />,
};

export const Selectable: Story = {
  args: { selectable: true },
  render: args => <BsDataTable {...args} onBsRowSelect={e => console.log('bsRowSelect', e.detail)} />,
};

export const WithCustomCellRenderer: Story = {
  name: 'With custom cell renderer',
  render: () => (
    <BsDataTable
      columns={[...columns, { key: 'actions', label: 'Actions' }]}
      rows={rows}
      cellRenderer={(row, column) => {
        if (column.key === 'actions') {
          return `<button type="button">Edit</button>`;
        }
        return String(row[column.key] ?? '');
      }}
    />
  ),
};
