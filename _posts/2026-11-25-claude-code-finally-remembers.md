---
title: Claude Code finally remembers between sessions
summary: >-
  Claude Code's cloud sessions can now keep a memory that carries over from one
  session to the next. Until now, every session started from zero. I think
  this one is a game changer.
date: 2026-11-25 23:00:00 +0000
published: false
---

Picture a colleague who is brilliant and fast, and who forgets everything you
told them the moment they go home. That is what working with AI coding
sessions has been like. Every Claude Code cloud session starts in a fresh
container with a clean copy of my code. It reads the repository, and that is
all it knows.

## Starting from zero, every time

So I wrote things down. For this blog there is a whole file of rules that a
session reads before it writes a post. That covers the big rules. The small
things did not carry over: a "not like that, like this", the reason behind a
choice, how I like something done. Whatever I said in one session was gone in
the next.

## One switch

Now there is a setting for it, under "Apps that use Claude's memory". It
reads: "Cloud sessions can read Claude Code's cloud memory and add to it."

![The Claude Code memory setting in claude.ai, switched on]({{ '/assets/images/claude-code-finally-remembers/settings.png' | relative_url }})

With it on, a session can save what it learns about me and my project, and
the next session starts with that memory. Tell it something once, and it
stays told.

## Why it is a big deal

For me, the model was never the bottleneck. Context was. Memory turns a string
of one-off sessions into something closer to an ongoing collaboration. The
rules file keeps the big rules, and the small things can now simply build up.

It also comes with guardrails. What gets saved goes through an automated
safety check, and I can ask a session to forget something.

I only switched it on today, so this is a first impression, not a verdict.
But it is the first update in a while that changes how a session starts, not
just what it can do.
