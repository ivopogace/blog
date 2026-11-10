# blog

Source of <https://ivopogace.github.io/blog/>. A plain [Jekyll](https://jekyllrb.com/)
site: one Markdown file per post, built and deployed by GitHub Actions.

## Add a post

Claude Code sessions: load the `blog-post` skill (`.claude/skills/blog-post/SKILL.md`)
before writing, editing or publishing a post. It sets the voice, length and publishing rules.

1. Create `_posts/YYYY-MM-DD-some-slug.md`. The date in the file name is the
   post's date; the slug becomes the URL: `/blog/posts/some-slug/`.
2. Start the file with front matter, then write Markdown:

   ```markdown
   ---
   title: The title of the post
   summary: One or two sentences shown on the index page. Optional.
   date: 2026-11-10 12:00:00 +0000   # optional; orders posts of the same day
   ---

   The text of the post.
   ```

3. Push to `main` (or open a pull request and merge it). That is all.

Notes:

- Code blocks with a language (```` ```ts ````) get syntax highlighting.
- A post dated in the future is not published until that date has passed and
  the site is built again.
- **Images** go in `assets/images/`, ideally in a folder per post. Because the
  site lives under `/blog/`, link them with the `relative_url` filter, not a
  bare `/assets/...` path:

  ```markdown
  ![What the picture shows]({{ '/assets/images/some-slug/diagram.png' | relative_url }})
  ```

  Links to other pages of the blog work the same way:
  `[About]({{ '/about/' | relative_url }})`.

## Drafts

Add `published: false` to a post's front matter. The file stays in the
repository, but the production build leaves it out of the site, the index and
the feed. To publish, delete that line (and rename the file if the date should
change), then push.

## Preview locally

Needs Ruby 3.1 or newer.

```sh
bundle install
bundle exec jekyll serve --unpublished
```

Open <http://localhost:4000/blog/>. `--unpublished` also shows drafts, marked
"Draft, not published"; leave it out to see exactly what will go live.

## Deployment

`.github/workflows/pages.yml` runs on every push to `main`: it builds the site
and deploys it to GitHub Pages. On pull requests it only builds, so a post with
broken front matter or Liquid fails the check instead of reaching the site.

One-time setup: in the repository, **Settings → Pages → Build and deployment →
Source** must be set to **GitHub Actions**.

## Where things are

| Path | What it is |
|---|---|
| `_posts/` | The posts |
| `about.md` | The About page |
| `_layouts/`, `index.html`, `404.html` | Page templates |
| `assets/css/style.css` | All of the styling (light and dark) |
| `.claude/skills/blog-post/` | Instructions for Claude Code sessions writing a post |
| `_config.yml` | Site title, description, URL settings |
