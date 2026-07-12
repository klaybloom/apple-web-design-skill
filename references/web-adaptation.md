# Applying Apple Principles to Web Projects

Apple HIG targets native Apple platforms. Web projects need extra translation because browser rendering, CSS blur, device performance, accessibility, and input methods vary.

## Translation Rules

### Apple-like does not mean macOS clone

Use Apple principles for:

- Clear information hierarchy
- Calm navigation
- Consistent spacing
- Refined typography
- Accessible controls
- Light motion
- Careful material use

Avoid copying:

- Traffic-light window dots
- Desktop window chrome around normal content
- Whole-page glass panels
- Dock metaphors unless the product explicitly needs them
- Wallpaper-heavy mockups for content sites

### Glass is more fragile on the web

CSS `backdrop-filter` is not native Liquid Glass. Use it carefully.

Use glass for:

- Header/nav bars
- Search/filter bars
- Floating table of contents
- Compact action controls
- Menus/popovers
- Mode toggles

Avoid glass for:

- Article bodies
- Long forms
- Data tables
- Cards that contain primary reading content
- Large hero sections unless the background is controlled

Always provide:

- Non-blur fallback background
- Sufficient contrast
- Reduced transparency equivalent if possible
- Mobile performance constraints

## Content Site Guidance

For blogs, docs, portfolios, and article-heavy sites:

- Make reading the product.
- Use stable article surfaces.
- Keep line length around 680-760px for long text.
- Reduce hover effects on article pages.
- Keep tags and categories secondary.
- Keep TOC visible or clearly discoverable; do not rely only on hover.
- Use real covers and screenshots when they help recognition.
- Do not let background gradients or wallpaper compete with text.

## Dashboard and App Guidance

For product UIs, tools, dashboards, and internal apps:

- Prioritize scanning density and task speed over decorative hero layouts.
- Use sidebars, tabs, toolbars, and filters predictably.
- Keep command placement stable.
- Use glass or translucent chrome only for persistent controls.
- Use plain surfaces for tables, forms, editors, and result panels.
- Ensure empty, loading, error, selected, disabled, and focus states exist.

## Website Implementation Checklist

Before changing code:

- Inspect current routes/components/theme tokens.
- Identify content vs control vs background layers.
- Check which styles are actually active.
- Check whether old theme modes still affect public pages.
- Preserve data schemas, routing, CMS/admin flows, RSS, SEO, and publishing.

During implementation:

- Remove stale visual systems only when they are not active or are isolated previews.
- Reduce global interaction scripts before adding new motion.
- Keep theme state names simple and non-overlapping.
- Keep CSS variables semantic.
- Scope material effects to explicit classes.
- Keep responsive behavior explicit for mobile and desktop.

Validation:

- Run lint/build.
- Check key pages.
- Check light/dark modes.
- Check keyboard focus and filter states.
- Check reduced motion.
- Check browser no-blur fallback if material styles are used.
- Report any visual checks that were not actually performed.

