# katarinasvitek.com

The website of Katarina Svitek: a one-page site about freelance GTM and growth marketing. Every change you push to GitHub goes live automatically on Cloudflare.

You don't need to write code yourself. You describe what you want in plain English and Claude Code makes the change. A little HTML knowledge helps you check the result.

## One-time setup

1. Install [Claude Code](https://claude.com/claude-code) (the desktop app or the terminal version).
2. Install [Node.js](https://nodejs.org) (the "LTS" version), then run this in a terminal: `npm install -g pnpm`
3. Get the project onto your computer. In a terminal:

   ```bash
   git clone git@github.com:pavelsvitek/katarinasvitek.com.git
   cd katarinasvitek.com
   pnpm install
   ```

4. Open the `katarinasvitek.com` folder in Claude Code.

## Everyday workflow

1. **Start the preview.** Ask Claude: *"Start the dev server so I can see the site."* Or run `pnpm dev` and open http://localhost:3000.
2. **Ask for a change.** Be specific, like briefing a freelancer. Examples:
   - *"Change the headline to 'Growth, engineered.'"*
   - *"Update the 'Results' section: Livewell is now 600K+ monthly active users."*
   - *"Make the 'Book an intro call' button link to my Calendly: https://calendly.com/..."*
   - *"Add a fourth result card about [metric]. Match the existing style."*
3. **Check the preview.** Reload the page. If it's not right, say what to change: *"Make that text smaller"*, *"Undo that last change."*
4. **Check on a phone.** Ask: *"Show me how this looks on mobile and tablet."*
5. **Publish.** When you're happy, say: *"Commit and push this."* Cloudflare then builds and publishes the site, usually within a couple of minutes.

## Where things live

You rarely need to open these yourself, but it helps to know where Claude is working:

| What | Where |
| --- | --- |
| Page content and structure (the HTML-like part) | `src/routes/index.tsx` |
| Colours, fonts, spacing, mobile layout | `src/styles.css` |
| Page title, description, social share preview | `src/routes/__root.tsx` |
| Photos, favicon, share image | `public/` |

Text on the page is plain text between tags, like `<p>...</p>`, so you can find and change copy yourself if you want. Save, and the preview updates.

## Tips

- Ask for one change at a time. It's easier to check and to undo.
- Before publishing, ask: *"Run a build to make sure nothing is broken."*
- If something goes wrong after publishing, ask: *"Revert the last commit and push."*
- To replace a photo, put the new file in `public/` (same name, e.g. `profile.jpg`) and ask Claude to check it looks right.
- Keep the share image and favicon in sync with the profile photo by asking Claude to regenerate them.
- Don't put passwords or private data in this repo. It is public.

## For developers

Built with [TanStack Start](https://tanstack.com/start) (React), plain CSS, deployed as a Cloudflare Worker.

```bash
pnpm dev     # local dev server on port 3000
pnpm build   # production build
```
