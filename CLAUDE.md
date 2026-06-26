# CLAUDE.md — portfolio.twohittz.com
Deploy command: npm run deploy
Custom domain: portfolio.twohittz.com (add in CF dashboard after first deploy)
No database. All content in src/data/content.ts.
To update content: edit content.ts, then npm run deploy.
DO NOT mention F-22 or any specific aircraft program anywhere in this repo.

<!-- workspace-skills:start -->
## Workspace skills (graphify rollout)

The following slash commands are available in this repo:

- `/graphify` — build/refresh this repo's knowledge graph (tree-sitter AST + NetworkX + Leiden) and push a public summary to OB1. Runbook: `docs/runbooks/graphify.md`.
- `/open-research <question>` — combine `/deep-research` + Karpathy `/research-deep` (obsidian-second-brain), write the merged note to `docs/research/`, capture to OB1. Runbook: `docs/runbooks/open-research.md`.

Shared infra and the master cross-repo graph live in `twohittz-source-hub/`. Data classification is enforced by `tools/ob1-bridge/`: `public` → OB1/Supabase after scrubber clears; `private` → SosaClaw open_brain (LAN-only).
<!-- workspace-skills:end -->
