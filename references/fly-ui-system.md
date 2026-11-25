# Fly UI Design System

Fly UI is the concrete design system built from this skill's principles: content first, restrained controls, glass only on the control layer, motion only to explain state. Use it as the default visual language when a project has no design system of its own.

This file is the guide to *what to build and why*. The code lives in the npm package **`@klaybloom/fly-ui`** (React components, styles and tokens). This reference matches **@klaybloom/fly-ui 0.1.x**.

## Implementing with the package

### React projects

1. Check `package.json` for `@klaybloom/fly-ui`. If it is missing and the user has agreed to adopt Fly UI, install it: `npm install @klaybloom/fly-ui` (React 18+ is a peer dependency).
2. Import the styles once at the app entry: `import '@klaybloom/fly-ui/styles.css'` (tokens + page defaults + components). Switch themes with `data-theme="light"` / `"dark"` on `<html>`.
3. **Before writing any component code, read `node_modules/@klaybloom/fly-ui/dist/index.d.ts`.** It is the source of truth for component names and props in the installed version; this file only gives the rules for choosing and combining them.
4. Use the package's components instead of writing new buttons, fields, tables, dialogs or navigation. Build only what the package lacks, with `var(--token)` values and `fly-` prefixed classes, following the rules below.
5. In React Server Components setups the components are client components (the bundle is marked `"use client"`); import them from client files or let the framework handle the boundary.

### Projects without React (plain HTML, Vue, server templates)

- Import `@klaybloom/fly-ui/tokens.css` and `@klaybloom/fly-ui/components.css` and use the `fly-` class names (structure is visible in `dist/index.js`), or
- copy `assets/fly-ui/tokens.css` from this skill when npm is not available, and map the tokens onto the project's own components.

### Projects that already have a design system

Do not add Fly UI as a parallel system. Map Fly UI values onto the project's existing variables and components and report the mapping.

### Package files

| Import | Holds |
| --- | --- |
| `@klaybloom/fly-ui` | React components (ESM + CJS) and their types |
| `@klaybloom/fly-ui/styles.css` | tokens + base + components in one file |
| `@klaybloom/fly-ui/tokens.css` | tokens as CSS custom properties, light and dark |
| `@klaybloom/fly-ui/components.css` | component styles; reads tokens only |
| `@klaybloom/fly-ui/base.css` | optional page defaults (system font, page background) |
| `@klaybloom/fly-ui/tokens.json` | tokens as data, each with a usage note |

The same `tokens.json` / `tokens.css` are kept in `assets/fly-ui/` of this skill for reviews and non-npm work.

## Three layers

| Layer | Fly UI tokens | Rule |
| --- | --- | --- |
| Background | `background` | Only the ground. No long text, no animated wallpaper. |
| Content | `surface`, `surface-raised`, `surface-sunken`, `Card`, `Table` | Opaque and stable. Never glass. |
| Control / chrome | `glass`, `glass-solid`, `glass-border`, `blur-glass`, `Toolbar`, popovers, toasts | The only layer that may use glass, always with the `glass-solid` fallback. |

## App shell (admin apps, workbenches)

Use `AppShell`: the `Sidebar` and `Toolbar` sit on the `surface` frame with **no divider lines**; the page lives in one `background`-coloured panel with `radius-xl`, inset `space-2` from the frame's right and bottom edges, `space-4` padding inside. White cards sit on the panel `space-3` (12px) apart. No square corners meet anywhere on the page.

- The sidebar's collapse button is at its top right (`onCollapsedChange`), not in the account menu.
- The toolbar holds the page title, a period/view `SegmentedControl` in the centre if needed, and page-level actions (refresh, theme as a single icon button, one primary action) on the right.

## Color (light / dark)

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `background` | #f5f5f7 | #000000 | Background layer: the page behind content surfaces and chrome |
| `surface` | #ffffff | #1c1c1e | Content layer: cards, article bodies, tables, forms |
| `surface-raised` | #ffffff | #2c2c2e | Popovers, menus, sheets that sit above content |
| `surface-sunken` | #e8e8ed | #2c2c2e | Input fields, segmented-control tracks, switch tracks when off, code blocks |
| `fill-hover` | #0000000a | #ffffff14 | Hover and pressed wash on plain buttons, list rows and toolbar items |
| `label` | #1d1d1f | #f5f5f7 | Primary text and icons on `background`, `surface`, `surface-raised`, `surface-sunken` and `glass` in both themes |
| `label-secondary` | #6e6e73 | #a1a1a6 | Secondary text: metadata, hints, captions, toolbar subtitles |
| `label-tertiary` | #86868b | #6e6e73 | Placeholder and disabled text only, never information a person needs to read |
| `separator` | #d2d2d7 | #38383a | Hairlines between list rows, card edges, toolbar bottom edge |
| `border-control` | #7a7a7f | #8e8e93 | Borders that define a control (text field, switch off-state outline in high contrast) |
| `accent` | #1d1d1f | #f5f5f7 | Graphite accent |
| `accent-hover` | #3a3a3c | #d2d2d7 | Hover fill of a primary button on pointer devices |
| `on-accent` | #ffffff | #1d1d1f | Text and icons on an `accent` or `accent-hover` fill |
| `focus-ring` | #1d1d1f | #f5f5f7 | Keyboard focus: a solid 2px ring with a 2px gap |
| `glass` | #ffffffb8 | #1e1e20b8 | Control/chrome layer only: toolbars, search bars, floating actions, menus |
| `glass-solid` | #fbfbfd | #1c1c1e | Opaque fallback for `glass` when backdrop-filter is unsupported or prefers-reduced-transparency is on |
| `glass-border` | #0000001a | #ffffff1f | Inner edge that keeps a glass control readable against content scrolling beneath it |
| `scrim` | #00000052 | #00000099 | Dims the page behind a modal sheet |
| `info` | #0062cc | #64aeff | Informational status text and icons on `surface` and `info-soft` |
| `info-soft` | #e5f0fc | #10263f | Background of an informational badge or banner; text on it is `info` |
| `success` | #1e7b34 | #30d158 | Success status text and icons on `surface` and `success-soft` |
| `success-soft` | #e7f4ea | #12301c | Background of a success badge or banner; text on it is `success` |
| `warning` | #9a5600 | #ffb340 | Warning status text and icons on `surface` and `warning-soft` |
| `warning-soft` | #fdf2e1 | #3a2a12 | Background of a warning badge or banner; text on it is `warning` |
| `danger` | #c4211b | #ff6961 | Destructive actions and error text on `surface` and `danger-soft`; text-field error border |
| `danger-soft` | #fdecea | #3a1a19 | Background of an error badge or banner; text on it is `danger` |

Status colours always come with a word or icon; colour is never the only signal.

**Selected states come in two kinds.** "On / checked / primary" (checkbox, switch, primary button) uses the graphite `accent`. "Where you are" markers (current sidebar item, current page in pagination) use a `surface-sunken` fill with 600 weight, never the accent. Only real actions are dark on a screen.

## Typography

System font stacks only, no web fonts:

- `--font-text`: -apple-system, BlinkMacSystemFont, "SF Pro Text", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif
- `--font-display`: same with "SF Pro Display" (20px and up)
- `--font-mono`: ui-monospace, "SF Mono", Menlo, Consolas, monospace

| Style | Size / line | Weight | Use |
| --- | --- | --- | --- |
| `large-title` | 34 / 41 | 700 | One per page |
| `title-1` | 28 / 34 | 600 | Section titles |
| `title-2` | 22 / 28 | 600 | Panels, dialogs |
| `title-3` | 20 / 25 | 600 | Sub-sections, drawer and dialog titles |
| `headline` | 17 / 22 | 600 | Card titles, row titles, toolbar title |
| `body` | 17 / 28 | 400 | Long-form reading (tall leading for Chinese), max `content-width` |
| `callout` | 15 / 22 | 400 | Default UI text |
| `subheadline` | 14 / 20 | 500 | Field labels, segments |
| `footnote` | 13 / 18 | 400 | Hints, errors under fields, placeholders |
| `caption` | 12 / 16 | 500 | Badges; nothing smaller |
| `code` | 13 / 20 | 400 | IDs, amounts, code, logs |

## Spacing, radius, layout

- Spacing (4px grid): `space-1` 4 · `space-2` 8 · `space-3` 12 · `space-4` 16 · `space-5` 20 · `space-6` 24 · `space-8` 32 · `space-12` 48. Card padding `space-6` (small stat cards `space-4`/`space-5`); **gap between cards `space-3`**; panel padding `space-4`; form field gap `space-4`.
- Radius, kept small so blocks sit square with the frame: `radius-sm` 4 (badges, checkboxes, `sm` controls) · `radius-md` 6 (buttons, fields, menu items) · `radius-lg` 8 (cards, tables, popovers) · `radius-xl` 12 (the app panel, drawers, dialogs) · `radius-full` (pills, switches, capsule toolbars).
- Control heights: buttons 28 / 36 / 44 (`sm` / `md` / `lg`); fields 32 (`md`) and 28 (`sm`, for filter bars and toolbars). 44 is the minimum touch target on touch layouts.
- Shadows: `shadow-sm` resting cards (a hairline in dark) · `shadow-md` floating toolbars, popovers · `shadow-lg` drawers, dialogs. Never stack heavy shadows.

## Forms

- The label sits on the same line, left of the box (`labelPosition="start"`, default). Give a stack of fields one `labelWidth` so the boxes line up. Use `labelPosition="top"` only for long forms and narrow columns.
- Boxes have no hard border: a `separator` ring plus `shadow-sm`; hover darkens the ring; focus is a 2px `focus-ring`. Under `prefers-contrast: more` the ring becomes `border-control` (3:1).
- Value text 14px; placeholder 13px in `label-tertiary` — smaller than the 14px/500 label, never carrying required information.
- Errors replace the hint under the box, in `danger`, phrased as the next step.
- `Select` shows the selected option by its text alone (600 weight), no check mark, so option text lines up with the box text.

## Lists and tables

- One filter bar above the table: search, then `Select`s (status first, with counts: “待处理（17）”), then actions such as 导出 last — all `size="sm"`, labels on the same line. **List status is a filter, never a separate row of `Tabs`.**
- One line per row: cells never wrap; secondary facts get their own column instead of a second line. Overflowing columns scroll sideways; pin identifying columns with `fixed: 'start'` and the actions column with `fixed: 'end'`.
- Give the table a fixed `height` with 20+ rows per page: rows scroll inside, the header stays, `Pagination` sits directly below and never moves.
- Row actions: a `Menu` (“···”) in the last column, `aria-label` naming the row. Selection shows a floating `Toolbar` (“已选 N 项” + bulk actions) inside the list card.
- Opening a row: a `Drawer` from the right, so the list stays in view. Use `Tabs` inside it for the record's sections (概览 / 处理记录 / 关联订单).
- Empty and failed states: `EmptyState` with a way forward (清除筛选, 重试); loading: skeleton rows with `loadingRows` equal to the visible rows.

## Motion

- `duration-press` 140ms (scale 0.97) · `duration-fast` 160ms (hover, toggles) · `duration-base` 220ms (popovers, segment indicator, tab underline) · `duration-slow` 360ms (drawers, dialogs, sidebar collapse).
- `ease-out-ui` cubic-bezier(0.23, 1, 0.32, 1) for enter/exit · `ease-in-out-ui` cubic-bezier(0.77, 0, 0.175, 1) between two visible positions · `ease-drawer-ui` cubic-bezier(0.32, 0.72, 0, 1) for drawers and sheets.
- Animate only `transform` and `opacity`; support `prefers-reduced-motion`, `prefers-reduced-transparency` and `prefers-contrast: more` (all handled in the package's CSS).

## Components — when to use which

| Need | Component | Rule |
| --- | --- | --- |
| App frame | `AppShell` | Sidebar + Toolbar on the frame, page in the rounded panel. |
| Main navigation | `Sidebar` | ≤ ~10 items, nouns of 2–4 characters, counts as plain digits; collapsible to icons. |
| Page title and page actions | `Toolbar` (`bar`) | One primary action at most. `floating` = the capsule for bulk actions on a selection. |
| Sections of one record | `Tabs` | Not for filtering lists. |
| An action | `Button` | `secondary` default, `primary` once per view, `plain` in toolbars and cells, `danger` for destructive (with a Dialog). `loading` keeps the width. |
| More actions behind one button | `Menu` | ≤ ~8 items, destructive last after a separator; opens upward near the bottom. |
| Text input | `TextField` | Inline label; `sm` in filter bars. |
| Pick one of ~3–15 | `Select` | 2–3 always-visible options → `SegmentedControl` instead. |
| Independent yes/no in a form, row selection | `Checkbox` | Immediate settings → `Switch`. |
| Switch view or period in place | `SegmentedControl` | 2–5 short options. |
| Immediate on/off setting | `Switch` | Label on the left. |
| A block of content | `Card` | Opaque, 17px title; no nesting, no coloured left borders. |
| Records to scan, sort, select | `Table` + `Pagination` | See “Lists and tables”. |
| Status word | `Badge` | One or two words; tone supports the word. |
| Nothing here / failed | `EmptyState` | Always with a way forward. |
| Short wait, unknown layout | `Spinner` | Known layout → `Skeleton`. |
| Look at or edit a record from a list | `Drawer` | `sm` 400 / `md` 520 / `lg` 720; footer pinned; Esc and scrim close it. |
| A question that must be answered | `Dialog` | Title is the question; confirm button repeats its verb, never “确定”. |
| Brief confirmation | `toast()` + one `Toaster` | Past-tense result, optional 撤销; max three. |

Not in the package yet (build from tokens if needed): Tooltip, Textarea, Radio, searchable combobox, DatePicker, Avatar, Breadcrumb, Progress, Upload, Banner.

## Voice (Chinese UI)

- Short, verb-first labels: “提交退款”, “分配给我”; never “点击这里”.
- No exclamation marks or decorative emoji; state is a word (“已超时”).
- Errors say what to do next: “请输入 11 位手机号”.
- IDs and numbers in `code`; dates as “11 月 25 日 10:42”.

## Icons

No icon library yet. Use 20×20 line icons, 1.8px stroke, round caps and joins, drawn with `currentColor`. Do not use Apple's SF Symbols or Apple logos.
