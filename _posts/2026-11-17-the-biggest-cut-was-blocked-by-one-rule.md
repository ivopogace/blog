---
title: The biggest cut was blocked by one rule in OpenCode
summary: >-
  I removed three of the eleven tools from my OpenCode plugin and about 9,000
  lines of code in one day, with no usage data to go on. The cut that would have
  removed the most was blocked by one rule in OpenCode, and the cost that pushed
  me to start barely moved.
date: 2026-11-17 12:00:00 +0000
published: false
---

[opencode-courier](https://github.com/ivopogace/opencode-courier) lets an
OpenCode session start helper sessions, end its turn, and be woken when they
report back. It had grown to 11 tools that models see, five
options, a memory of earlier runs, scheduled messages and two kinds of helper
session.

Size has a price in a plugin like this. Every request a session sends carries
the description and schema of every tool it is offered, whether it uses them or
not. And every new OpenCode release means re-checking each behaviour the plugin
relies on but OpenCode does not promise. The file where I track those
behaviours had reached 692 lines.

## Deciding without data

I had no usage numbers for any feature. Adding telemetry first would have
needed infrastructure and a privacy decision from every user, so I decided from
what I had: what I use myself, what the tests exercise, and what the issue
tracker shows. I never used the memory feature or join groups outside the demo
and the tests, and no issue from anyone else mentioned them.

Two parts had to stay whatever else went: the tree panel, the only view of a
whole run, and isolated worktrees, the only way two helpers can edit the same
files at once.

## The largest cut on paper

The largest saving on paper was to drop courier's own spawn and wake-up
entirely and use OpenCode's built-in `subagent` tool. That one change would have
removed the core of the plugin. OpenCode already shows subagents in their own
tab, shows their permission prompts in the top session, and wakes an idle
parent when a child's turn ends.

One rule in OpenCode stopped it. A session is created with a working directory
or with a parent, never both. So a helper running in its own git worktree cannot
be a subagent, and keeping worktrees was not negotiable. The cuts had to come
from around the core.

## What went

I wrote the design in the morning and shipped it as release 0.17.0 the same
evening:

- memory, with its two tools and its option
- the tool that listed a session's direct children, which the tree listing
  already covers
- join groups, two other parameters, a terminal command and an option

That came to 106 files changed, 1,455 lines added and 9,354 removed. Each
removed option still found in a config is now named in one log line at
startup, so an old config still loads.

The design had taken an idea off its own list: offer each session only the
tools it can actually use. A helper at the deepest level cannot start
sessions, so three of the tools it was offered could only fail for it. That
shipped the next day as its own change, and such a helper's requests now carry
4,099 fewer characters of tool text each.

## What barely moved

The cost that pushed me to start, the work per OpenCode release, hardly
changed. The notes file went from 692 lines to 683. Its longest section is
about the second kind of helper, which I kept, so the cut it would take is
left for a design of its own.

## Limits

This is one project, one maintainer and one release. The choice of what to
remove rests on my own use and an issue tracker, not on data from users. I
measured the size of the tool text, not what it changes in a model's answers.

## What I took from it

A feature with no known user was cheap to remove once I said so in writing.
What decided the shape of the cut was a constraint in the host, not my
preference, and the cost I most wanted to reduce was tied to a part I chose to
keep.
