---
title: "Less is more: cutting courier from 11 tools to 8"
summary: >-
  I removed three of the eleven tools from my OpenCode plugin and about 9,000
  lines of code in one day, without adding a feature. Every tool a model is
  offered is paid for on every request, used or not, and that is the case for
  keeping a plugin small.
date: 2026-11-17 12:00:00 +0000
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

## The cut

So release 0.17.0 took out what I never used and no issue mentioned,
memory and join groups among them, along with the duplicates: three tools, two
options and 9,354 lines, in one day. A day later, a session that cannot start
sessions stopped being offered the three tools that could only fail for it,
which takes 4,099 characters off each of its requests.

## What I took from it

I had no usage data, only my own use and an issue tracker, and I measured the
size of the tool text, not what it changes in a model's answers. The work per
OpenCode release barely shrank either. But for a
plugin that models read, every feature is paid for on every request, by every
session, whether it is used or not. That made "no known user" a good enough
reason to remove something.
