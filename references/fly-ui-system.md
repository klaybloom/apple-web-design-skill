# Fly UI Design System

Fly UI is the concrete design system built from this skill's principles: content first, restrained controls, glass only on the control layer, motion only to explain state. Use it as the default visual language when a project has no design system of its own.

Source files in this skill:

- `assets/fly-ui/tokens.json` — every token with a usage note (source of truth).
- `assets/fly-ui/tokens.css` — the same tokens as CSS custom properties: `:root, [data-theme="light"]`, `[data-theme="dark"]`, plus type-style classes.
- `assets/fly-ui/components.css` — component styles (`fly-` prefixed classes) that read only tokens.
- `assets/fly-ui/components.tsx` — React 18 reference implementations: Button, TextField, SegmentedControl, Switch, Badge, Card, Toolbar.

## Adopting Fly UI in a project

- No existing tokens: copy `tokens.css` (and `components.css` if the project wants the components) into the project's global styles, switch themes with `data-theme="light|dark"` on `<html>`, and use the token names below.
- Existing tokens or a component library: do not add a parallel system. Map Fly UI values onto the project's existing variable names and components, and report the mapping.
- Tailwind: expose tokens through the theme as `var(--token)` references rather than copying hex values.

## Three layers

| Layer | Fly UI tokens | Rule |
| --- | --- | --- |
| Background | `background` | Only the ground. No long text, no animated wallpaper. |
| Content | `surface`, `surface-raised`, `surface-sunken`, `Card` | Opaque and stable. Never glass. |
| Control / chrome | `glass`, `glass-solid`, `glass-border`, `blur-glass`, `Toolbar` | The only layer that may use glass, always with the `glass-solid` fallback. |

## Color (light / dark)

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `background` | #f5f5f7 | #000000 | Page ground |
| `surface` | #ffffff | #1c1c1e | Cards, articles, tables, forms |
| `surface-raised` | #ffffff | #2c2c2e | Popovers, menus, sheets |
| `surface-sunken` | #e8e8ed | #2c2c2e | Input wells, segmented tracks, secondary buttons |
| `fill-hover` | #0000000a | #ffffff14 | Hover wash on plain controls and rows |
| `label` | #1d1d1f | #f5f5f7 | Primary text and icons |
| `label-secondary` | #6e6e73 | #a1a1a6 | Metadata, hints (4.5:1+ on background/surface) |
| `label-tertiary` | #86868b | #6e6e73 | Placeholder and disabled only |
| `separator` | #d2d2d7 | #38383a | Decorative hairlines |
| `border-control` | #7a7a7f | #8e8e93 | Control boundaries (3:1+) |
| `accent` | #1d1d1f | #f5f5f7 | Graphite accent: primary action, selection, switch on, links. Once per view. |
| `accent-hover` | #3a3a3c | #d2d2d7 | Primary hover |
| `on-accent` | #ffffff | #1d1d1f | Text on accent — never hard-code white |
| `focus-ring` | #1d1d1f | #f5f5f7 | 2px solid ring, 2px offset |
| `glass` | #ffffffb8 | #1e1e20b8 | Chrome material with `blur-glass` |
| `glass-solid` | #fbfbfd | #1c1c1e | No-blur / reduced-transparency fallback |
| `glass-border` | #0000001a | #ffffff1f | Edge of glass controls |
| `scrim` | #00000052 | #00000099 | Behind modal sheets |
| `info` / `info-soft` | #0062cc / #e5f0fc | #64aeff / #10263f | Informational status |
| `success` / `success-soft` | #1e7b34 / #e7f4ea | #30d158 / #12301c | Success status |
| `warning` / `warning-soft` | #9a5600 / #fdf2e1 | #ffb340 / #3a2a12 | Warning status |
| `danger` / `danger-soft` | #c4211b / #fdecea | #ff6961 / #3a1a19 | Errors, destructive actions |

Status colors always come with a word or icon; color is never the only signal.

## Typography

System font stacks only, no web fonts:

- `--font-text`: -apple-system, BlinkMacSystemFont, "SF Pro Text", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif
- `--font-display`: same with "SF Pro Display" (20px and up)
- `--font-mono`: ui-monospace, "SF Mono", Menlo, Consolas, monospace

| Style | Size / line | Weight | Use |
| --- | --- | --- | --- |
| `large-title` | 34 / 41 | 700 | One per page |
| `title-1` | 28 / 34 | 600 | Section titles |
| `title-2` | 22 / 28 | 600 | Card and sheet titles |
| `title-3` | 20 / 25 | 600 | Sub-sections inside a card |
| `headline` | 17 / 22 | 600 | Row titles, toolbar title |
| `body` | 17 / 28 | 400 | Long-form reading (tall leading for Chinese), max `content-width` |
| `callout` | 15 / 22 | 400 | Default UI text |
| `subheadline` | 14 / 20 | 500 | Field labels, segments |
| `footnote` | 13 / 18 | 400 | Hints, errors under fields |
| `caption` | 12 / 16 | 500 | Badges; nothing smaller |
| `code` | 13 / 20 | 400 | IDs, code, logs |

## Spacing, radius, layout

- Spacing (4px grid): `space-1` 4 · `space-2` 8 · `space-3` 12 · `space-4` 16 · `space-5` 20 · `space-6` 24 · `space-8` 32 · `space-12` 48. Card padding and card gap `space-6`; form field gap `space-4`; page gutter `space-8` desktop, `space-4` phone.
- Radius grows with size: `radius-sm` 6 (badges) · `radius-md` 10 (buttons, fields) · `radius-lg` 14 (cards, popovers) · `radius-xl` 20 (sheets) · `radius-full` (pills, switches, capsule toolbars).
- Layout: `content-width` 720px · `page-width` 1200px · `toolbar-height` 52px · `control-height-sm|md|lg` 28 / 36 / 44px (44 = minimum touch target).
- Shadows: `shadow-sm` resting cards (a hairline in dark) · `shadow-md` floating toolbars, popovers · `shadow-lg` sheets. Never stack heavy shadows.

## Motion

- `duration-press` 140ms (scale 0.97) · `duration-fast` 160ms (hover, toggles) · `duration-base` 220ms (popovers, segment indicator) · `duration-slow` 360ms (sheets, drawers).
- `ease-out-ui` cubic-bezier(0.23, 1, 0.32, 1) for enter/exit · `ease-in-out-ui` cubic-bezier(0.77, 0, 0.175, 1) between two visible positions · `ease-drawer-ui` cubic-bezier(0.32, 0.72, 0, 1) for sheets.
- Animate only `transform` and `opacity`; support `prefers-reduced-motion`, `prefers-reduced-transparency` and `prefers-contrast: more` (all three are handled in `components.css`).

## Components

| Component | Class root | Key rules |
| --- | --- | --- |
| Button | `fly-btn` | `secondary` default; `primary` (accent) once per view; `plain` for toolbars; `danger` for destructive. Sizes sm/md/lg. Icon-only needs `aria-label`. |
| TextField | `fly-field` | Visible label always; hint or error below; error = 2px `danger` border + `aria-describedby`, phrased as the next step. |
| SegmentedControl | `fly-seg` | 2–5 short options; sliding `surface-raised` thumb; arrow-key radio group; `sm` inside toolbars. |
| Switch | `fly-switch` | Immediate settings only; on = `accent` track + `on-accent` knob; off = `surface-sunken` track + `border-control` outline + `label-secondary` knob. |
| Badge | `fly-badge` | One or two words; tone = status color on its `-soft` fill. |
| Card | `fly-card` | Opaque `surface`, `radius-lg`, `shadow-sm`; no nesting, no hover lift on reading pages, no colored left borders. |
| Toolbar | `fly-toolbar` | Glass chrome: `bar` (sticky, hairline bottom) or `floating` (capsule, `shadow-md`); leading / center / trailing slots; at most one primary action. |

## Voice (Chinese UI)

- Short, verb-first labels: “提交退款”, “分配给我”; never “点击这里”.
- No exclamation marks or decorative emoji; state is a word (“已超时”).
- Errors say what to do next: “请输入 11 位手机号”.
- IDs and numbers in `code`; dates as “11 月 5 日 10:42”.

## Icons

No icon library yet. Use 20×20 line icons, 1.8px stroke, round caps and joins, drawn with `currentColor`. Do not use Apple's SF Symbols or Apple logos.
