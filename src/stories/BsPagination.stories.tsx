import type { Meta, StoryObj } from '@storybook/react-vite';
import { BsPagination } from '@brandsync/react';

const meta: Meta<typeof BsPagination> = {
  title: 'Components/BsPagination',
  component: BsPagination,
  parameters: {
    docs: {
      description: {
        component:
          'A numbered page control — previous/next chevrons, page-number buttons, and "..." overflow for ' +
          'large page counts. `totalPages`/`currentPage` drive everything — this computes which page ' +
          'numbers to show and where to collapse into `...` itself, the consumer never builds the button ' +
          'list by hand.\n\n' +
          '**When to use:** paging through a large, ordered result set (a table, a search results list) ' +
          'where jumping directly to a specific page number is useful.\n\n' +
          '**When not to use:** infinite-scroll or "load more" patterns — those don\'t have a fixed, ' +
          'addressable page number; a huge page count where users realistically only ever go forward/back ' +
          'one page at a time — plain prev/next controls (no numbers) are simpler there.',
      },
    },
  },
  argTypes: {
    totalPages: {
      control: { type: 'number', min: 1 },
      description: 'Total number of pages. Must be a positive integer — there\'s always at least one page.',
    },
    currentPage: {
      control: { type: 'number', min: 1 },
      description:
        'The active page (1-indexed). Mutable + reflected so clicking a page button updates it directly, ' +
        'while `bsPageChange` still fires for the consumer to react to (e.g. fetching that page\'s data).',
    },
    siblingCount: {
      control: { type: 'number', min: 0 },
      description:
        'How many page numbers to show on each side of the current page before collapsing the rest into ' +
        '`...`. `1` (the default) reproduces the Figma spec\'s example exactly (page 1 of 12 shows ' +
        '`1 2 3 ... 12`).',
    },
    previousLabel: { control: 'text', description: 'Accessible name for the previous-page button.' },
    nextLabel: { control: 'text', description: 'Accessible name for the next-page button.' },
  },
  args: {
    totalPages: 12,
    currentPage: 1,
    siblingCount: 1,
    previousLabel: 'Previous page',
    nextLabel: 'Next page',
    onBsPageChange: e => console.log('bsPageChange', e.detail),
  },
};

export default meta;
type Story = StoryObj<typeof BsPagination>;

// Matches the Figma spec's own example exactly: 1 2 3 ... 12.
export const Default: Story = {};

export const MiddlePage: Story = {
  name: 'Middle page (both ellipses)',
  args: { currentPage: 6 },
};

export const LastPage: Story = {
  name: 'Last page',
  args: { currentPage: 12 },
};

export const FewPages: Story = {
  name: 'Few pages (no ellipsis)',
  args: { totalPages: 5, currentPage: 1 },
};

export const WiderSiblingCount: Story = {
  name: 'Wider sibling count',
  args: { currentPage: 6, siblingCount: 2 },
};
