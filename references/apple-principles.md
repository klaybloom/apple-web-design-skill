# Apple HIG and Liquid Glass Principles

Use this reference for Apple-inspired design guidance. Official Apple documentation evolves; verify current official pages when the user asks for the latest, exact specs, or platform-version claims.

## Official Sources

- Human Interface Guidelines: https://developer.apple.com/design/human-interface-guidelines
- Materials: https://developer.apple.com/design/human-interface-guidelines/materials
- Liquid Glass: https://developer.apple.com/documentation/technologyoverviews/liquid-glass
- Adopting Liquid Glass: https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass
- Apple Design Resources: https://developer.apple.com/design/resources/
- Apple Design home: https://developer.apple.com/design/

## Core Design Principles

Apple HIG emphasizes these product principles:

- Purpose: make the most important user value clear.
- Agency: let people act, explore, recover, and stay informed.
- Responsibility: protect safety, privacy, and trust.
- Familiarity: build on known platform and real-world patterns.
- Flexibility: adapt to devices, inputs, languages, accessibility needs, and contexts.
- Simplicity: keep only what helps the task or content.
- Craft: refine typography, spacing, motion, language, audio, and performance.
- Delight: create human moments without letting decoration obstruct purpose.

## Liquid Glass

Treat Liquid Glass as a functional material, not a generic blur effect.

- It creates a control/navigation layer above content.
- It should help people keep context without obscuring content.
- It should be used sparingly in custom UI.
- It should not dominate the content layer.
- Standard native components adapt automatically; web CSS does not.
- Regular glass prioritizes legibility; clear glass suits rich media backgrounds only when contrast is controlled.

## Materials and Layers

Use three layers when reasoning about UI:

- Background: page, window, media, wallpaper, environment.
- Content: text, charts, media, forms, products, documents.
- Controls/chrome: navigation, menus, filters, search, tabs, toolbars, floating actions.

Apple-like design keeps these layers distinct. Content remains readable; controls may float above it.

## Layout

- Put important content where reading/scanning starts.
- Use safe areas, margins, and responsive constraints.
- Let content extend naturally, but do not let controls cover important content.
- Group related items with spacing, alignment, and semantic surfaces.
- Support resizable windows and common responsive widths.

## Typography

- Use system fonts unless brand needs a custom font.
- Keep body text readable before making it expressive.
- Avoid thin weights for small text.
- Preserve hierarchy across text-size changes.
- For long Chinese text, tune line height, paragraph spacing, heading spacing, list spacing, and code/table overflow.

## Color

- Prefer semantic/system-like tokens over hard-coded visual values.
- Provide light, dark, and high-contrast friendly variants.
- Do not use color as the only indicator of state.
- Apply accent color sparingly, mostly to primary actions or state.
- Keep controls legible on top of materials and images.

## Motion

- Motion should explain state changes or provide feedback.
- Avoid motion that delays frequent actions.
- Let users reduce motion.
- Avoid custom cursors, click particles, continuous background motion, and large hover travel in content-first products.

## Accessibility

- Provide visible focus states.
- Support keyboard navigation.
- Label icon-only buttons.
- Ensure text and controls have sufficient contrast.
- Do not rely only on hover.
- Test reduced motion and reduced transparency equivalents on the web.

