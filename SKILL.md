---
name: apple-web-design
description: Apple Human Interface Guidelines and Liquid Glass inspired web/app UI review and refactor guidance. Use when designing, auditing, or implementing websites, blogs, dashboards, landing pages, React/Next/Vue frontends, or product UIs that should feel Apple-like without copying macOS; especially when applying HIG/Liquid Glass to web, checking layout, typography, color, materials, motion, accessibility, responsive behavior, or creating a consistent Apple-inspired visual style across projects.
---

# Apple Web Design

## Overview

Use this skill to translate Apple HIG and Liquid Glass principles into practical web UI decisions. The goal is not to copy macOS chrome; the goal is content-first interfaces with clear hierarchy, restrained controls, accessible motion, and production-ready web performance.

## Workflow

1. Inspect the actual project before recommending changes: routes, components, CSS/theme tokens, interaction code, build setup, and existing design direction.
2. Identify the product type: blog/content site, dashboard, app shell, landing page, editor, portfolio, or internal tool.
3. Separate the UI into three layers:
   - Content layer: articles, data, forms, media, product details.
   - Control/chrome layer: navigation, toolbars, filters, search, menus, mode toggles, floating actions.
   - Background layer: page surface, imagery, gradients, wallpaper, spatial or decorative context.
4. Apply Apple-like principles to behavior and hierarchy before visual styling.
5. Use Liquid Glass only where it supports controls or navigation. Keep long-form content and primary task surfaces stable and readable.
6. Validate with real pages, responsive widths, light/dark modes, keyboard navigation, reduced motion, and build/lint checks when working in code.

## References

- Read `references/apple-principles.md` when the task needs HIG/Liquid Glass guidance or official source grounding.
- Read `references/web-adaptation.md` when applying Apple-inspired design to websites or browser-based apps.

## Design Rules

- Do not treat Apple design as a skin. Translate principles into information hierarchy, spacing, typography, accessible controls, and stable reading.
- Do not use glass everywhere. Glass belongs to control/chrome layers, not main content bodies.
- Do not imitate macOS window decorations unless the product is explicitly a desktop metaphor or demo.
- Prefer system font stacks for Apple-like web UIs: `-apple-system`, `BlinkMacSystemFont`, `SF Pro Text`, `SF Pro Display`, `PingFang SC`, `system-ui`.
- Avoid heavy decorative blur, fixed wallpaper layers, custom cursors, click particles, and large hover movement on content sites.
- Use real product/media content where inspection matters. Use quiet placeholders only when no real media exists.
- Design focus states, keyboard navigation, contrast, reduced motion, and no-blur fallbacks as required parts of the interface.
- When the user asks for latest Apple specs or exact official guidance, verify current Apple sources before stating facts.

## Output Expectations

For an audit, return prioritized findings grouped by impact:

- Content and hierarchy
- Navigation and controls
- Materials and visual style
- Typography and readability
- Motion and interaction
- Accessibility and performance

For an implementation plan, include:

- Files or subsystems to change
- Intended behavior changes
- Non-goals and preserved functionality
- Test plan: lint/build, key pages, responsive behavior, keyboard/focus, light/dark, reduced motion

For code changes:

- Keep edits scoped to the existing design system.
- Avoid unrelated content changes.
- Run project validation commands that already exist.
- Report any unverified visual checks plainly.
