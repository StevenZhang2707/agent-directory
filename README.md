# Agent Directory

A bright, responsive, single-page directory of AI agent tools, examples, and reusable skills. Vanilla HTML, CSS, and JavaScript; no installation or build step.

## Open locally

Open `index.html` directly in your browser. Search, tag filtering, and links work without a server.

Or serve this directory:

```sh
cd /workspace/agent-directory
python -m http.server 8000
```

Then visit http://localhost:8000.

## Files and content

- `index.html` — page structure and accessible controls.
- `styles.css` — responsive light theme.
- `app.js` — seed snapshot, rendering, search, and tag filtering.
- `seed.json` — original source of all 16 directory items.

Search matches names, notes, sections, and tags. Combine it with the tag menu or click a card tag to filter. Press `/` to focus search; use Clear filters to reset. External resource links open in a new tab. To update entries, edit `seed.json` and replace the `items` array at the beginning of `app.js` with that JSON array. The snapshot avoids browser restrictions on fetching JSON when opening `index.html` directly. No external fonts, libraries, or network requests are required to render the directory.

Static seed directory. Not affiliated with listed products.
