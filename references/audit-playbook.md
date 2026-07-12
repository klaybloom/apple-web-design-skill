# Apple Web Design Audit Playbook

Use this playbook for `audit` mode. Inspect the live code path before reporting a finding. Prefer a small set of verified findings over a long list of guesses.

## Recon

Before judging design quality, identify:

- Product type: content site, dashboard, app shell, landing page, editor, portfolio, internal tool, or hybrid.
- Framework and routing: React, Next.js, Vue, Astro, static HTML, server-rendered pages.
- Styling system: global CSS, Tailwind, CSS Modules, styled-components, design tokens, theme files.
- Component system: Radix, Base UI, shadcn/ui, custom components, icon libraries.
- Motion surface: CSS transitions, keyframes, View Transitions, Motion/Framer Motion, GSAP, WAAPI.
- Content system: Markdown, MDX, CMS, database, admin tools, publishing flow.
- Public behavior to preserve: routing, CMS/admin, RSS, SEO metadata, analytics, authentication, data schemas.
- Existing design direction: product personality, brand colors, light/dark mode, density, typography scale.

Useful searches include `transition`, `animation`, `@keyframes`, `backdrop-filter`, `filter: blur`, `prefers-reduced-motion`, `prefers-reduced-transparency`, `transform-origin`, `focus-visible`, `aria-label`, `theme`, `rss`, `metadata`, and `seo`.

## Findings Table

Return findings as:

| Severity | Category | Location | Before | After | Why |
| --- | --- | --- | --- | --- | --- |

Every row needs a concrete location. Use `N/A` only for page-level issues that cannot be tied to one file after reasonable inspection.

## Categories

### Content and hierarchy

Check whether the page makes the main user value obvious.

- Main content should have priority over decoration.
- Reading surfaces should be stable and legible.
- Dashboards should favor scanning, comparison, and repeated action over marketing composition.
- Tags, categories, metadata, and secondary actions should not compete with primary content.
- Empty, loading, error, selected, disabled, and focus states should exist where relevant.

### Navigation and controls

Check whether people can understand where they are, where they can go, and what each control affects.

- Navigation labels should be specific and predictable.
- Controls should live close to the thing they affect.
- Toolbars, tabs, filters, search, and mode toggles should stay consistent across related screens.
- Icon-only controls need accessible names and visible focus.
- Frequent commands should not be hidden behind decorative or slow interactions.

### Materials and visual style

Check whether surfaces support hierarchy.

- Glass and blur belong mainly to control/chrome layers.
- Article bodies, long forms, data tables, editors, and primary task panels need stable surfaces.
- CSS `backdrop-filter` needs non-blur and reduced-transparency alternatives.
- Background imagery, gradients, and wallpaper should not reduce content contrast.
- Avoid macOS window chrome unless the product explicitly uses a desktop metaphor.

### Typography and readability

Check whether text scales and reads well.

- Use system font stacks by default for Apple-inspired web UI.
- Avoid thin weights for small text.
- Keep long-form line length roughly 680-760px unless the format requires otherwise.
- Tune Chinese text for line-height, paragraph spacing, heading spacing, list spacing, and code/table overflow.
- Avoid viewport-based font scaling that makes text unpredictable.

### Motion and interaction

Check whether motion helps the task.

- Motion should explain state, show continuity, or provide feedback.
- Frequent keyboard and command actions should not wait on entrance or exit motion.
- Pressable controls should respond on press.
- Popovers and menus should preserve their spatial relationship to triggers.
- Reduced motion should remove large movement while preserving useful feedback.

Use `references/motion-guidelines.md` for concrete motion values and media-query patterns.

### Accessibility and performance

Check whether the design remains usable across inputs, settings, and devices.

- Keyboard navigation and `:focus-visible` states should be visible.
- Do not rely only on hover, color, blur, or motion.
- Text and controls need sufficient contrast in light, dark, high contrast, and material states.
- Responsive layouts should avoid overlap, trapped content, and controls covering the main task.
- Heavy blur, full-screen animated backgrounds, layout animation, and global interaction scripts need performance scrutiny.

## Verdict

End with:

- `Keep`: the direction is sound; no structural redesign is needed.
- `Refine`: the direction is sound, but the table lists specific improvements.
- `Redesign`: structural changes are needed before visual polish will help.

If a visual check was not run, say which checks remain unverified.
