---
name: ai-news
description: Load when asked to write a post for this blog about AI news or an update, such as a new feature, release, setting or model change in an AI tool Ivo uses, often from a screenshot, changelog or announcement. For a post about Ivo's own project or a lesson from his own work, use blog-post instead.
---

# Posting AI news and updates

These are short posts about something new in the AI tools Ivo uses: a feature
that shipped, a setting that appeared, a release with one change worth
explaining. They go out under Ivo's name, in his voice, like every post.

This skill replaces section 1 ("Is there a post") of the `blog-post` skill and
loosens parts of sections 2 and 3, as set out below. For everything else
(mechanics, preview card, build, screenshots, publishing, the LinkedIn teaser
and the self-check), follow `blog-post` sections 4 to 7.

## 1. What makes it a post

The news alone is enough. It does not need a bug or a surprise. It does need
an answer to "what does this change for how I work?", and that answer comes
from Ivo's own setup: what he did before, what this replaces or makes
possible. If nobody can say what it changes for Ivo, ask him before writing.

Enthusiasm is fine, and the post can say why the update matters. The
excitement has to rest on what the feature does, not on adjectives. Leave
"gamechanger", "revolutionary" and the like out of the post. Let the before
and after make that case.

## 2. Facts: three kinds, kept apart

Every sentence has to belong to one of these, and the reader has to be able
to tell which:

| Kind | Source | How it reads |
|---|---|---|
| What the vendor says | a screenshot, changelog, docs page or announcement Ivo gave or linked | "The setting reads: ...", "The release notes say ..." |
| What was seen | something done or observed in this session | "The session that wrote this could ..." |
| What Ivo expects | Ivo's own words about his work | "If it works as described, I ..." |

- Quote UI and release-note text exactly. Never fill in what a feature does
  from general knowledge or a guess. If the source does not say, leave it out
  or ask.
- Link the official source once when there is a public one. A screenshot
  counts as a source. Crop out status bars, account names, emails and anything
  private, and give it alt text.
- Products and companies the news is about may be named: the news is about
  them. The `blog-post` rules still apply to everything else: name no person
  but Ivo, include no private details, no internal URLs, no costs.
- Say how fresh the experience is. "Turned on today" and "used for a month"
  are different posts. The limits go in the closing paragraph, as usual.

## 3. Shape

- **Length:** 250 to 500 words of body. News ages fast, so keep it short.
- **Order:** the situation before the update; the update itself, with the
  source quoted; what it does in practice; why it matters to Ivo, with the
  limits folded into the close.
- **Title:** the product and what changed, concretely, under about 60
  characters ("Claude Code cloud sessions now keep a memory"). No hype words,
  no question marks. Offer two or three, with a pick.
- **Project:** news posts go in no project's list, so they appear under
  "notes". The exception is an update that is part of a project's own story.
- **Follow-up:** if the post ends on something not yet tried, say so plainly.
  A later post that reports how it went is often the better one. That later
  post follows the `blog-post` skill.

## 4. Before handing over

Run the `blog-post` self-check (section 7). Also check:

- [ ] Every claim about the feature is quoted from or traceable to the source.
- [ ] Vendor claims, what was seen, and what Ivo expects are distinguishable.
- [ ] No hype words. Any enthusiasm comes from the before and after.
- [ ] Screenshots are cropped of anything private and have alt text.
