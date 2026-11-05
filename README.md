# Fly UI Skill

Fly UI design system and Apple-inspired web UI review and refactor guidance for Codex skills.

Fly UI is a content-first, restrained design system: semantic light/dark tokens with a graphite accent, a system-font type scale tuned for Chinese, glass reserved for the control layer, motion defaults, and seven core components (Button, TextField, SegmentedControl, Switch, Badge, Card, Toolbar). The skill ships its tokens and component styles so any project can adopt them.

This skill translates Apple Human Interface Guidelines and Liquid Glass ideas into practical web design decisions for blogs, portfolios, dashboards, product UIs, and content-heavy sites.

It is not an official Apple resource. It links to Apple's official documentation and adapts those principles for browser-based interfaces.

## What It Helps With

- Applying the Fly UI design system (tokens, type scale, components, Chinese UI voice) to a new or existing project
- Reviewing a web project for Apple-inspired hierarchy, spacing, typography, materials, motion, and accessibility
- Applying Liquid Glass ideas without turning the entire page into blur
- Separating content, controls, and background layers
- Keeping long-form reading surfaces stable and legible
- Planning code changes that preserve existing functionality
- Producing structured audits and implementation plans with clear validation criteria

## Install

Install with `npx`:

```bash
npx fly-ui-skill
```

This installs the skill to:

```text
~/.codex/skills/fly-ui
```

If you use a custom Codex home, set `CODEX_HOME`:

```bash
CODEX_HOME=/path/to/codex npx fly-ui-skill
```

Or pass an explicit target:

```bash
npx fly-ui-skill --target ~/.codex/skills/fly-ui
```

### Manual Install

Clone the repository into your Codex skills directory:

```bash
git clone https://github.com/klaybloom/fly-ui-skill.git ~/.codex/skills/fly-ui
```

If you already have a local copy, update it with:

```bash
cd ~/.codex/skills/fly-ui
git pull
```

## Usage

Ask Codex to use the skill explicitly:

```text
用 $fly-ui 审查这个项目，让它保持 Apple-inspired 的统一设计风格
```

Use the mode that matches the work:

```text
用 $fly-ui audit 审查这个网站，不改源码
```

```text
用 $fly-ui plan 给这个网站写一份可执行改造计划
```

```text
用 $fly-ui implement 按计划修改代码并运行验证
```

If no mode is provided, the skill infers it from the request. Review-style requests run as `audit`, planning requests run as `plan`, and direct change requests run as `implement`.

For combined planning and implementation work:

```text
用 $fly-ui 给这个网站出一份改造计划，并按计划修改代码
```

## Relationship to Motion Skills

This skill owns website-level Apple-inspired design: page hierarchy, content readability, materials, typography, responsive behavior, accessibility, and code-change boundaries.

It includes practical motion defaults for common web UI such as buttons, popovers, drawers, reduced motion, and glass chrome. Complex gesture physics, momentum, rubber-banding, and animation-only code review are better handled by a motion-specific skill.

## Files

- `SKILL.md` - main skill instructions
- `references/fly-ui-system.md` - the Fly UI design system: tokens, type, spacing, motion, components, voice
- `assets/fly-ui/tokens.json` - Fly UI tokens with usage notes (source of truth)
- `assets/fly-ui/tokens.css` - tokens as CSS custom properties, light and dark themes
- `assets/fly-ui/components.css` - component styles built only from tokens
- `assets/fly-ui/components.tsx` - React 18 reference components
- `references/apple-principles.md` - Apple HIG and Liquid Glass principle notes with official links
- `references/web-adaptation.md` - web-specific adaptation guidance
- `references/motion-guidelines.md` - motion defaults for common Apple-inspired web UI
- `references/audit-playbook.md` - structured audit categories and verdicts
- `references/plan-template.md` - self-contained plan template for handoff-ready implementation
- `agents/openai.yaml` - display metadata

## Official References

- Apple Human Interface Guidelines: https://developer.apple.com/design/human-interface-guidelines
- Apple Design Resources: https://developer.apple.com/design/resources/
- Liquid Glass overview: https://developer.apple.com/documentation/technologyoverviews/liquid-glass
