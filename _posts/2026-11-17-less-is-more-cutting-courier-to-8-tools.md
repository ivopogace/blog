---
title: "Less is more: cutting courier from 11 tools to 8"
summary: >-
  I removed three of the eleven tools from my OpenCode plugin and about 9,000
  lines of code in one day, without adding a feature. Every tool a model is
  offered is paid for on every request, used or not, and that is the case for
  keeping a plugin small.
date: 2026-11-17 12:00:00 +0000
published: false
---

[opencode-courier](https://github.com/ivopogace/opencode-courier) lets an
OpenCode session start helper sessions, end its turn, and be woken when they
report back. It had grown to 11 tools that models see, five options, a memory
of earlier runs, scheduled messages and two kinds of helper session.

## Why fewer is better

Every request a session sends carries the name, description and schema of
every tool it is offered, whether it uses them or not. A session that could
start helpers got all 11 descriptions every time. A helper at the deepest
level, which cannot start sessions at all, still got eight.

More tools also means more ways to go wrong. Two tools listed sessions: one
showed a session's direct children, and the other showed the whole tree, which
already includes them. In my real-model checks, calling a listing tool right
after starting helpers already counted as a failure, and the plugin offered two
of them.

Then there are the duplicates a person sees. A terminal command did what one
key in the tree panel already does, and a parameter did what a plain message
already does. Each one is another line in the README, another test, and
another thing to re-check when OpenCode ships a new release.

## What went

I had no usage numbers, so I decided from what I use, what the tests exercise
and what the issue tracker shows. I never used the memory feature or join
groups outside the demo and the tests, and no issue from anyone else mentioned
them.

Release 0.17.0 removed memory with its two tools, the children listing, join
groups, two parameters, the duplicate command and two options. That came to
106 files changed, 1,455 lines added and 9,354 removed, in one day. The next
day a session that cannot start sessions stopped being offered the three tools
that could only fail for it, and each of its requests now carries 4,099 fewer
characters of tool text.

## Limits

This is one project, one maintainer and one release. What to remove rested on
my own use and an issue tracker, not on data from users. I measured the size of
the tool text, not what it changes in a model's answers. And the work per
OpenCode release barely shrank: the notes I keep on it went from 692 lines to
683.

## What I took from it

For a plugin that models read, every feature is paid for on every request, by
every session, whether it is used or not. That made "no known user" a good
enough reason to remove something.
