# Motion Guidelines for Apple-Inspired Web UI

Use this reference when motion is part of a website or product UI design decision. These rules are practical defaults, not a replacement for checking the real product.

## Decide Whether Motion Belongs

Motion should do at least one useful job:

- Show where something came from or where it went.
- Confirm that input was received.
- Explain a state change.
- Reduce the shock of a sudden content change.
- Add a rare moment of character without slowing routine work.

Match strength to frequency:

| Frequency | Default choice |
| --- | --- |
| Very frequent keyboard or command actions | No entrance or exit animation |
| Frequent navigation, filtering, list hover | None or very small feedback |
| Occasional modal, popover, toast, drawer | Short UI motion |
| Rare onboarding, success, product storytelling | More expressive motion can be justified |

## Easing and Duration Defaults

Prefer project tokens when they already exist. If a project has no motion tokens, these are good starting values:

```css
:root {
  --ease-out-ui: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-in-out-ui: cubic-bezier(0.77, 0, 0.175, 1);
  --ease-drawer-ui: cubic-bezier(0.32, 0.72, 0, 1);
}
```

Use `ease-out` style curves for entering and exiting UI because they respond immediately. Use `ease-in-out` for movement between two visible positions. Use `linear` only for constant movement such as progress or marquee effects.

| Element | Typical duration |
| --- | --- |
| Button or press feedback | 100-160ms |
| Tooltip or small popover | 125-200ms |
| Dropdown or select | 150-250ms |
| Modal, drawer, or sheet | 200-500ms |
| Marketing or explanatory sequence | Depends on context |

Routine UI motion should usually stay under 300ms. Modals, drawers, and explanatory sequences may be longer when the added time improves orientation.

## Press Feedback

Pressable controls should acknowledge pointer-down quickly. A subtle scale is usually enough:

```css
.button {
  transition: transform 140ms var(--ease-out-ui);
}

.button:active {
  transform: scale(0.97);
}
```

Use hover motion only on devices that actually hover:

```css
@media (hover: hover) and (pointer: fine) {
  .button:hover {
    transform: translateY(-1px);
  }
}
```

## Origin-Aware Overlays

Popover, menu, dropdown, and tooltip motion should preserve the spatial link to the trigger. Scale or reveal from the trigger side when the component library exposes a transform-origin variable.

```css
.popover {
  transform-origin: var(--radix-popover-content-transform-origin);
}
```

Centered modals are different: they do not need to scale from the trigger.

Avoid `scale(0)` for entrances. Start with a visible size such as `scale(0.95)` plus opacity so the surface reads as arriving, not appearing from nothing.

## Interruptibility

Rapidly repeated interactions should not restart from the beginning every time.

- Prefer CSS transitions for simple dynamic UI because they retarget from the current state.
- Prefer springs for drag, swipe, drawer, sheet, and other gesture-driven UI.
- Avoid keyframes for toasts, toggles, accordions, and controls that users can trigger repeatedly.
- Do not disable input just because an animation is running.

For gesture-heavy interfaces, keep direct manipulation direct: track pointer movement continuously, use pointer capture, preserve the grab offset, and hand release velocity to the follow-up motion when the chosen library supports it. Detailed momentum, rubber-banding, and velocity math belongs in a motion-specific skill or plan, not in the default website redesign path.

## Materials and Motion

Glass-like chrome should feel like a material, not a flat fade.

- Scope blur and translucency to navigation, toolbars, sheets, menus, and compact controls.
- Avoid stacking multiple light translucent surfaces.
- Keep text on glass higher contrast than ordinary muted text.
- Consider animating opacity, scale, and blur together for short overlay entrances, but keep blur modest for Safari and mobile performance.

## Reduced Motion, Transparency, and Contrast

Support these independently:

```css
@media (prefers-reduced-motion: reduce) {
  .panel {
    transition: opacity 160ms ease;
    transform: none;
  }
}

@media (prefers-reduced-transparency: reduce) {
  .toolbar {
    background: Canvas;
    backdrop-filter: none;
  }
}

@media (prefers-contrast: more) {
  .toolbar {
    border-color: currentColor;
  }
}
```

Reduced motion should remove vestibular movement, springs, parallax, and large travel. It can keep short opacity or color feedback when that helps understanding.

## Performance Boundaries

- Prefer animating `transform` and `opacity`.
- Avoid `transition: all`.
- Avoid layout properties such as width, height, margin, padding, top, and left for high-frequency animation.
- Use `will-change` sparingly and remove it when persistent promotion is not needed.
- Treat heavy blur, large shadows, and full-viewport animated backgrounds as performance risks on mobile and Safari.
