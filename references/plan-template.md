# Apple Web Design Plan Template

Use this template for `plan` mode when the output needs to be handed to another agent or saved under `plans/`. The plan must stand on its own; do not rely on earlier chat context.

````markdown
# NNN - <Short imperative title>

- **Status**: TODO
- **Severity**: HIGH | MEDIUM | LOW
- **Category**: Content and hierarchy | Navigation and controls | Materials and visual style | Typography and readability | Motion and interaction | Accessibility and performance
- **Estimated scope**: <files or subsystems>

## Problem

Describe what is wrong, where it appears, and why it affects the product. Cite concrete locations:

```tsx
// src/app/page.tsx:42 - current
<section className="glass-card article-body">
```

## Target

Describe the intended behavior and appearance. Include exact values when they matter:

```css
.article-body {
  max-width: 720px;
  background: var(--surface-page);
}

.site-header {
  background: color-mix(in srgb, var(--surface-chrome) 82%, transparent);
  backdrop-filter: blur(18px) saturate(160%);
}
```

## Repo conventions to follow

- Existing theme or token files to extend.
- Existing components to reuse.
- Existing routing, content, CMS, SEO, RSS, analytics, authentication, or publishing behavior to preserve.

## Steps

1. <Concrete edit: file or subsystem, what changes, and intended result.>
2. <Concrete edit.>
3. <Concrete edit.>

## Boundaries

- Do not change unrelated content.
- Do not replace the existing design system if it can be extended.
- Do not alter routing, schemas, CMS/admin, RSS, SEO, publishing, auth, or analytics unless explicitly listed in Steps.
- Do not add dependencies unless the plan names the dependency and reason.
- If the inspected code has changed enough that a step no longer matches, stop and report the drift.

## Verification

- **Mechanical**: <exact commands such as lint, typecheck, build, test>.
- **Pages and states**: <key routes, empty/loading/error/selected/focus states>.
- **Responsive**: <mobile, tablet, desktop widths to check>.
- **Accessibility**: keyboard navigation, visible focus, labels, contrast.
- **Theme and preferences**: light, dark, reduced motion, reduced transparency/no-blur fallback, increased contrast where available.
- **Visual check**: <what should be true in a browser or screenshot>.

## Done when

- <Observable completion criteria.>
- <Validation command outcome.>
- <Any visual checks that must be completed or explicitly reported as unverified.>
````

## Notes

- Keep one plan focused on one user-visible improvement or one tightly related set of edits.
- Include exact file paths and target values when they are important for correct execution.
- Prefer existing project conventions over new abstractions.
- Plans may mention advanced motion, but complex gesture physics should be scoped into a dedicated motion plan.
