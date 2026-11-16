# Instructions for AI agents

## Git workflow

- **Always commit and push to the `main` branch.** Do not create feature branches or pull requests unless the user explicitly asks for one.
- This project is deployed to Cloudflare automatically on every push to `main`. A push means the change goes live, so run `pnpm build` first and only push if it succeeds.
- Use short, clear commit messages describing what changed.
- Never force-push (`--force`) and never rewrite history on `main` unless the user explicitly asks.

## Project

- TanStack Start (React) site with plain CSS. No Tailwind or UI library.
- Page content: `src/routes/index.tsx`. Styles: `src/styles.css`. Meta tags (title, OpenGraph, favicon links): `src/routes/__root.tsx`. Static assets: `public/`.
- Keep the site responsive (phone, tablet, desktop, large screens) and dark-themed. Check mobile after layout changes.
- The repo is public. Never commit secrets, API keys or private personal data.
