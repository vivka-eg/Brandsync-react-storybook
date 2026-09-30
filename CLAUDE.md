# Brandsync React Storybook — instructions for Claude

This repo is a Storybook showcase that consumes `@brandsync/react` as a **real published npm
package**, never local source. See README.md for the full rationale. This file is the playbook for
recurring maintenance tasks.

## "There's a new npm update" / "new components are available"

When the user tells you `@brandsync/wc`/`@brandsync/react` (or `brandsync-tokens`) has a new
version, or you notice one yourself:

1. **Check for an already-open automated PR first.** `.github/workflows/on-wc-release.yml` listens
   for a `repository_dispatch` fired by `brandsync-web-components`' own release workflow, and if it
   fired, `scripts/scaffold-new-stories.js` already ran and may have opened a
   `scaffold-new-stories` branch/PR with bare stub files for anything new. Check
   `git ls-remote origin` for that branch, or the repo's open PRs, before doing manual work — no
   point duplicating what already ran. Stub files are NOT full stories (no realistic args/variants,
   just a working props table via `autodocs`) — they still need the same real-content pass below.

2. **Compare installed vs latest:**
   ```
   node -e "console.log(require('./node_modules/@brandsync/react/package.json').version)"
   npm view @brandsync/react version
   npm view @brandsync/wc version
   npm view brandsync-tokens version
   ```

3. **Install the update:**
   ```
   npm install @brandsync/react@latest @brandsync/wc@latest
   ```
   (`@brandsync/wc`/`@brandsync/react` are lockstepped — always bump both together.
   `brandsync-tokens` is a separate, unrelated version line — see the gotcha below.)

4. **Diff exported components** against what already has a story:
   ```
   grep -oE 'declare const (Bs[A-Za-z]+):' node_modules/@brandsync/react/dist/index.d.ts | sed 's/declare const //;s/://' | sort -u > /tmp/latest.txt
   ls src/stories/*.stories.tsx | xargs -n1 basename | sed 's/.stories.tsx//' | sort > /tmp/have.txt
   diff /tmp/have.txt /tmp/latest.txt
   ```

5. **For each genuinely new component**, build a real story (not a stub) following the existing
   pattern — see `BsToast.stories.tsx` or `BsChipFilter.stories.tsx` for recent, representative
   examples:
   - Import only from `@brandsync/react`, never local source.
   - `title: 'Components/<Name>'`, `'Genie AI Components/<Name>'`, or `'UI Shell/<Name>'` — match
     the category the equivalent component uses in the sibling `brandsync-web-components` repo
     (`packages/wc/src/components/<kebab-dir>/`), if it exists there; default to `Components/` for
     anything general-purpose.
   - Get real prop names/types/JSDoc from the component's own `.d.ts` under
     `node_modules/@brandsync/wc/dist/types/components/<kebab-name>/<kebab-name>.d.ts` (find the
     exact path with `find node_modules/@brandsync/wc/dist/types/components -iname "*<name>*"` —
     some are nested, e.g. `bs-button/bs-icon-button/`, `ui-shell/bs-navigation-drawer/...`).
   - Get real event/callback prop names (`onBsXxx`) from `@brandsync/react`'s own
     `dist/index.d.ts` (`<Name>Events` type block).
   - Add full doc enrichment inline: a `parameters.docs.description.component` block condensed
     from the class-level JSDoc (`**When to use:**` / `**When not to use:**`), and a `description`
     on every `argTypes` entry sourced from that prop's own JSDoc comment. Never invent a
     description for a prop with no source JSDoc — leave it undescribed (this has happened before,
     e.g. several `BsInput` props genuinely have none).
   - Cross-reference the sibling repo's own `.stories.ts`/`readme.md` for realistic example content
     (icons, sample text, data shapes) when it exists — translate kebab-case/lit-html syntax to the
     React wrapper equivalent.
   - Default slot -> `children`; named slot -> a child element with a literal `slot="name"`
     attribute (works as-is in JSX).

6. **Update `src/stories/Welcome.mdx`'s component counts** (the badge + the 3 category cards) to
   match the new totals.

7. **Verify before committing, every time:**
   ```
   npx tsc --noEmit
   npm run build-storybook   # catches things dev mode won't (see gotchas below)
   ```

8. **Commit and push to `main`.** This alone triggers `.github/workflows/storybook.yml`, which
   builds and deploys to GitHub Pages — there is no separate manual deploy step. Confirm the live
   site picked it up afterward (its `index.json` lists every story; check the new component's
   title appears).

## Known gotchas (all previously hit for real — don't re-derive these)

- **`brandsync-tokens`'s shipped CSS is invalid.** Its `dist/css/tokens.css` starts with a `//`
  line comment (Sass-style, not valid CSS). Dev mode tolerates it silently; `build-storybook`'s
  minifier (`lightningcss`) throws "Invalid empty selector" and fails the build outright. Do not
  `import 'brandsync-tokens/tokens.css'` directly — rely on `@brandsync/wc`'s bundled copy instead
  (imported in `.storybook/preview.ts`), which has the same token values without the broken header.
  This is also why step 7 always runs `build-storybook`, not just the dev server — this exact class
  of bug is invisible in dev.
- **This site deploys to GitHub Pages as a *project* page**, not a domain root
  (`vivka-eg.github.io/Brandsync-react-storybook/`, a subpath). Any hardcoded asset path
  (`brandImage`, favicon, anything in `.storybook/manager.ts`/`main.ts`) MUST be relative
  (`./foo.svg`), never absolute (`/foo.svg`) — an absolute path 404s under a subpath even though it
  resolves fine on `localhost`. Verify by actually reproducing the subpath structure locally rather
  than trusting `localhost` alone (copy `storybook-static/` into a same-named subfolder and serve
  it with `python3 -m http.server`).
- **Browser favicon caching is unusually sticky** — survives hard reloads and even incognito
  windows in some cases, since it's keyed by bare URL independent of normal page cache. If a
  favicon/brand image ever needs to change again, bump the cache-busting query string in
  `.storybook/manager.ts`'s `main.ts` `managerHead` link (e.g. `favicon.svg?v=2`), don't just swap
  the file content under the same URL.
- **The GitHub repo has been renamed before** (`Brandsync-react` -> `Brandsync-react-storybook`).
  If `git push`/`git fetch` starts warning about a moved repository, update the remote URL
  (`git remote set-url origin <new-url>`) rather than continuing to rely on GitHub's redirect.
- **`@brandsync/react` doesn't always have 1:1 parity with `@brandsync/wc`.** At various points
  `BsAiChatbot` and the `bs-chip-*` family existed in `@brandsync/wc` before `@brandsync/react`
  wrapped them. Always diff against `@brandsync/react`'s own exports (step 4), not `@brandsync/wc`'s
  — a component isn't usable here until the React wrapper actually ships it.
