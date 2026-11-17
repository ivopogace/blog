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

A plugin that models use pays for its size in ways that are easy to miss, so I
wrote down what each part cost before deciding what to keep.

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
another thing to re-check when OpenCode ships a new release. The file where I
track what the plugin relies on in OpenCode had reached 692 lines.

## Deciding without data

I had no usage numbers. Adding telemetry first would have needed
infrastructure and a privacy decision from every user, so I decided from what
I had: what I use myself, what the tests exercise, and what the issue tracker
shows. I never used the memory feature or join groups outside the demo and the
tests, and no issue from anyone else mentioned them.

Two parts had to stay: the tree panel, the only view of a whole run, and
isolated worktrees, the only way two helpers can edit the same files at once.
That second one also ruled out the largest cut on paper, using OpenCode's
built-in `subagent` tool instead of courier's own spawn and wake-up. OpenCode
creates a session with a working directory or with a parent, never both, so a
helper in its own worktree cannot be a subagent.

## What went

I wrote the design in the morning and shipped it as release 0.17.0 the same
evening. Memory went, with its two tools and its option, and so did the
children listing, join groups, two other parameters, the duplicate terminal
command and one more option. That came to 106 files changed, 1,455 lines added
and 9,354 removed. A removed option still found in a config is named in one
log line at startup, and the config still loads.

The next day I followed the same idea one step further: a session that cannot
start sessions is now offered only the tools it can use. A helper at the
deepest level dropped three tools that could only fail for it, and each of its
requests carries 4,099 fewer characters of tool text.

## What did not shrink

The work per OpenCode release hardly changed. The notes file went from 692
lines to 683, because its longest section is about the second kind of helper,
which I kept.

## Limits

This is one project, one maintainer and one release. What to remove rested on
my own use and an issue tracker, not on data from users. I measured the size of
the tool text, not what it changes in a model's answers.

## What I took from it

For a plugin that models read, every feature is paid for on every request, by
every session, whether it is used or not. That made "no known user" a good
enough reason to remove something. Less was more here because the cost of each
part was always on, and its use was not.
