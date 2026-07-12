# Apple Web Design Skill

Apple-inspired web UI review and refactor guidance for Codex skills.

This skill translates Apple Human Interface Guidelines and Liquid Glass ideas into practical web design decisions for blogs, portfolios, dashboards, product UIs, and content-heavy sites.

It is not an official Apple resource. It links to Apple's official documentation and adapts those principles for browser-based interfaces.

## What It Helps With

- Reviewing a web project for Apple-inspired hierarchy, spacing, typography, materials, motion, and accessibility
- Applying Liquid Glass ideas without turning the entire page into blur
- Separating content, controls, and background layers
- Keeping long-form reading surfaces stable and legible
- Planning code changes that preserve existing functionality

## Install

Clone the repository into your Codex skills directory:

```bash
git clone https://github.com/klaybloom/apple-web-design-skill.git ~/.codex/skills/apple-web-design
```

If you already have a local copy, update it with:

```bash
cd ~/.codex/skills/apple-web-design
git pull
```

## Usage

Ask Codex to use the skill explicitly:

```text
用 $apple-web-design 审查这个项目，让它保持 Apple-inspired 的统一设计风格
```

For implementation work:

```text
用 $apple-web-design 给这个网站出一份改造计划，并按计划修改代码
```

## Files

- `SKILL.md` - main skill instructions
- `references/apple-principles.md` - Apple HIG and Liquid Glass principle notes with official links
- `references/web-adaptation.md` - web-specific adaptation guidance
- `agents/openai.yaml` - display metadata

## Official References

- Apple Human Interface Guidelines: https://developer.apple.com/design/human-interface-guidelines
- Apple Design Resources: https://developer.apple.com/design/resources/
- Liquid Glass overview: https://developer.apple.com/documentation/technologyoverviews/liquid-glass
