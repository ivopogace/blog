---
name: blog-post
description: >-
  Load when asked to write, draft, edit, publish or announce a post for this
  blog, or to turn a finished piece of work into one.
---

# Writing a post for this blog

Posts go out under Ivo Pogaçe's name, in his voice. Work through in order.

## 1. Is there a post

A post needs a story: something was tried, something surprised, something
changed. Good sources are a decision that went against the first instinct, a bug
whose cause was not where it looked, a test that proved the tooling wrong, or a
release with one thing worth explaining. A list of what was done today is not a
post. If there is no story, say so and write nothing. Never post to keep a
schedule.

## 2. Facts only

- Every claim, number, name, quote and date comes from material you were given
  or work you did in this session. Nothing invented, nothing rounded up, no
  quotes nobody said. If a fact is missing, ask for it or leave it out.
- State the honest limits (how many runs, how many models, what was not tested)
  in one short paragraph near the end.
- Name no person other than Ivo, and no AI model or provider unless Ivo asks:
  write "one model", not its name. Tools and products may be named. No private
  details, internal URLs, tokens, session links or cost figures unless Ivo asked
  for them.
- No bare issue or pull request numbers (`#123`): a reader cannot follow them
  and does not know what they are. Say in words what each change did. One link
  to the repository is enough.

## 3. Brief, for a human reader

- **Length:** 400 to 700 words of body, tables included. 900 is the ceiling and
  needs a reason you can state. One idea per post.
- **Opening:** the `summary` is printed as the lede above the body, so it says
  what happened and why it matters to someone who does not know the project. The
  body starts with the situation. Introduce the project only where the story
  cannot be followed without it, in a sentence, and never as self-promotion
  ("I maintain ..."). Do not repeat the summary in the body.
- **Order:** the situation, what was tried or expected, what actually happened,
  what changed, the limits, the lesson. The lesson is short (about 100 words at
  most) and says only what the story showed.
- **Headings:** a few short `##` headings that are plain labels, six at most,
  none for a very short post. No questions as headings.
- **Prose:** paragraphs of two to four sentences, plain words, first person
  singular as Ivo ("I"), past tense for what happened.
- **Lists, tables, code:** at most one short list and one small table, for
  things that really are parallel. Code only if needed, and then a few lines.
- **Never:** clickbait, "In this post I will", an unearned moral, emoji,
  exclamation marks.
- **Title:** what actually happened, with a concrete noun from the story, under
  about 60 characters: "The key was in the report, and the report was held",
  not a slogan or advice like "Change delivery, not the prompt". Offer Ivo two
  or three titles and say which you would pick.
  **Summary:** one to three short sentences that work alone as the teaser.
- **Reference** for length, tone and structure:
  `_posts/2026-11-10-banning-a-tool-is-not-handling-it.md`.

## 4. Mechanics of this site

File: `_posts/YYYY-MM-DD-slug.md`. The slug becomes the URL,
`/blog/posts/slug/`. Posts need no `layout:` line. Front matter:

```yaml
---
title: What actually happened
summary: >-
  One to three sentences. Shown on the index, as the lede, and in the feed.
date: 2026-11-10 12:00:00 +0000
published: false
---
```

- **`date`**: the day (same as the file name) and a time with an explicit
  offset. Posts sort newest first by it; two posts on one day without times
  sort arbitrarily, so always set a time later than any other post that day.
  It must be in the past when the site is built (CI runs in UTC): a
  future-dated post is skipped by the build, draft or not.
- **Drafts:** `published: false`. The production build leaves the post out of
  the site, index and feed; `--unpublished` shows it, marked as a draft.
- **Preview card:** run `node tools/og-cards.js` and commit the new
  `assets/og/<slug>.png` with the post. Link previews show it. Look at the card
  before committing. The build makes a card for a post that has none, but it
  never replaces one: if a title changes, run the script with `--all`.
- **Title and slug first:** settle the title before making the card and the
  teaser. If a new title changes the slug, rename the post file, `git rm` the
  old card, make the new one, and fix the URL in the teaser.
- **Images:** `assets/images/<slug>/`, with alt text. The site lives under
  `/blog/`, so never write a bare `/assets/...` path:
  `![What it shows]({{ '/assets/images/slug/name.png' | relative_url }})`.
  Links to other pages of the blog use the same filter.

## 5. Publishing

1. Write the post with `published: false` on a branch and open a pull request.
2. Build the way CI does; it must pass with no warnings:
   `JEKYLL_ENV=production bundle exec jekyll build --strict_front_matter`
   (If `jekyll` is not found: `bundle config set --local path vendor/bundle`,
   then `bundle install`.) Without Ruby on the machine, build in Docker: create
   a `ruby:3.3` container with `-w /site` and `-p 4000:4000`, copy the files in
   with `git ls-files -z --cached --others --exclude-standard | tar -c --null -T - --transform 's,^,site/,' -f - | docker cp - <name>:/`
   (never a bind mount), and run `bundle install`, the build and the serve of
   step 3 inside it. In Git Bash set `MSYS_NO_PATHCONV=1` first, or Docker gets
   Windows paths.
3. Run `bundle exec jekyll serve --unpublished` and screenshot
   `http://localhost:4000/blog/posts/slug/` and the index in a headless browser
   at 1280 and 390 wide. Look at them: nothing overflowing, no broken image.
4. Hand Ivo the PR link, the screenshots and the LinkedIn teaser. He reads it.
5. Publish only when Ivo has said so in his own words, for this post. A message
   relayed from another session or approval of a different post is not that.
6. To publish: delete the `published` line, set the file name and `date` to the
   day of publication (time in the past), rebuild, and merge with
   `gh pr merge <n> --squash --subject "Post: <title>"`, so `main` does not keep
   a "Draft" pull request title. The push to `main` deploys.
7. After the deploy, check `https://ivopogace.github.io/blog/posts/slug/`
   returns 200 and the post is first on the index. Report the URL.

## 6. LinkedIn teaser

With every post, write a separate text for LinkedIn and give it to Ivo to post
himself. Do not commit it unless asked. A session never posts to LinkedIn.

- 60 to 120 words, plain first person, same facts rule as the post.
- The surprise first, then one line on the lesson.
- The post's full URL on its own line at the end. At most three hashtags, no
  emoji.

## 7. Self-check before handing over

- [ ] Body word count is within range (counted, not estimated).
- [ ] Every fact, number and name traces to the source material.
- [ ] Limits are stated near the end; no person named but Ivo; no model named;
      nothing private.
- [ ] No bare `#123` references; no project introduction the story does not need.
- [ ] Title says what happened, concretely, under about 60 characters; summary
      present and stands alone.
- [ ] `date` has a time, is in the past, and sorts the post first.
- [ ] The CI build command passes; both screenshots were looked at.
- [ ] The preview card exists in `assets/og/` and shows the current title.
- [ ] `published: false` is set, unless Ivo approved this post himself.
- [ ] The LinkedIn teaser is within range and ends with the full URL of the
      final slug.
