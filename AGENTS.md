# Agent Guidance

## Script-First Implementation

- When a task can be made repeatable, create the best-fit script, CLI command, skill, or workflow for the job instead of leaving only prose instructions.
- Choose the implementation language by use case and surrounding repo conventions. Prefer Python for automation, data processing, repo maintenance, and local CLIs unless another runtime is clearly better.
- Skills may include scripts, templates, examples, and workflow files when they make the skill executable or easier to validate.
- Documentation should explain how to run the script or workflow, but the runnable artifact should come first when practical.

## Environment limits & delegation — remote Claude Code sessions

Remote sessions cannot: run `wrangler login`/deploy (browser OAuth), reach the
SosaClaw LAN (OB1 `127.0.0.1:8090`, `tools/ob1-bridge/`, `twohittz-source-hub/` local
infra), or add repo secrets. Those tasks are for LOCAL agents (Codex / Sonnet 4.6 /
Windsurf):

- **P1. Deploy**: `npx wrangler login && npm run deploy`; verify
  https://portfolio.twohittz.com renders and content matches `src/data/content.ts`.
- **P2. Graphify CI stub**: `.github/workflows/graphify.yml` skips the actual scan
  (install is stubbed) and `docs/agent-index.md` is a placeholder — install graphify
  locally, fix the install step, run once, commit the populated graph + index.
- **P3. OB1/source-hub links**: `CLAUDE.md` references `twohittz-source-hub/` and
  `tools/ob1-bridge/` which only exist on the local workstation — keep it that way;
  remote agents should treat OB1 pushes as queued/skipped, never fake them.

Cross-repo ops conventions (runbooks, DELEGATION tasks D1–D9, TICKETS): see
`hub-twohittz/AGENTS.md` and `hub-twohittz/docs/runbooks/DELEGATION.md`.
Content rule reminder: DO NOT mention F-22 or any specific aircraft program in this repo.
