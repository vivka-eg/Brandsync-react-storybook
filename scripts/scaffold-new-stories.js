#!/usr/bin/env node
// Run after `npm install @brandsync/react@latest` (see .github/workflows/on-wc-release.yml).
//
// Diffs @brandsync/react's exported component names against which src/stories/*.stories.tsx
// files already exist, and scaffolds a minimal boilerplate story for anything missing. This is
// deliberately NOT full story authoring -- it can't know what realistic args/variants make sense
// for a new component the way a human (or a follow-up session with a coding assistant) can. What
// it DOES reliably give you: a working props table and default render via Storybook's `autodocs`
// tag, which introspects the component's actual TypeScript prop types on its own -- so a new
// component is never left with literally nothing until someone gets to it.
//
// Writes new files directly; committing/opening a PR with them is the calling workflow's job, not
// this script's.
const fs = require('fs');
const path = require('path');

const STORIES_DIR = path.join(__dirname, '..', 'src', 'stories');
const TYPES_FILE = path.join(__dirname, '..', 'node_modules', '@brandsync', 'react', 'dist', 'index.d.ts');

function findExportedComponents() {
  const content = fs.readFileSync(TYPES_FILE, 'utf8');
  // Matches e.g. `declare const BsButton:` -- every wrapped component is emitted this way by
  // @stencil/react-output-target, per the file we've already verified this pattern against.
  return [...content.matchAll(/declare const (Bs[A-Za-z]+):/g)].map(m => m[1]);
}

function findExistingStories() {
  return fs
    .readdirSync(STORIES_DIR)
    .filter(f => f.endsWith('.stories.tsx'))
    .map(f => f.replace('.stories.tsx', ''));
}

function scaffold(componentName) {
  const filePath = path.join(STORIES_DIR, `${componentName}.stories.tsx`);
  const content = `import type { Meta, StoryObj } from '@storybook/react-vite';
import { ${componentName} } from '@brandsync/react';

// Auto-scaffolded stub -- Storybook's autodocs tag introspects ${componentName}'s real prop
// types on its own (working props table + default render), but this has no hand-authored
// variants yet. Needs a human pass to add realistic args/stories, same as the other components
// in this repo (see BsButton.stories.tsx for the pattern to follow).
const meta: Meta<typeof ${componentName}> = {
  title: 'Components/${componentName}',
  component: ${componentName},
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ${componentName}>;

export const Default: Story = {};
`;
  fs.writeFileSync(filePath, content);
  return filePath;
}

function main() {
  const exported = findExportedComponents();
  const existing = findExistingStories();
  const missing = exported.filter(name => !existing.includes(name));

  if (missing.length === 0) {
    console.log('No new components -- nothing to scaffold.');
    return;
  }

  // Whether anything got written is left for the calling workflow to detect via `git status`
  // (simpler and doesn't depend on GitHub Actions' output-passing mechanics at all) -- this
  // script's only job is writing the files.
  console.log(`Scaffolding stories for ${missing.length} new component(s): ${missing.join(', ')}`);
  missing.forEach(name => {
    const filePath = scaffold(name);
    console.log(`  created ${path.relative(process.cwd(), filePath)}`);
  });
}

main();
