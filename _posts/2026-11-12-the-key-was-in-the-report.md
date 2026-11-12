---
title: The key was in the report, and the report was held
summary: >-
  Three AI agents worked side by side, and one found a key the other two
  needed. Often it reached them too late. Rewording the instructions three
  times changed nothing; changing how reports are delivered did.
date: 2026-11-12 12:00:00 +0000
published: false
---

## The test

A lead AI agent splits a job into three parts and starts a helper agent for
each, all at once. Part "init" runs a setup command that
prints a key. Parts "a" and "b" each need that key to fetch a price. Nothing in
the task says "tell the others".

Each run asked one thing: did the key reach "a" and "b" before they reported
back? Often it did not.

## Why the key came late

Two habits met. First, the agent that found something saved it for its final
report. Over 21 early runs, "init" sent the key in a
separate message, mid-task, in only 4. In the rest it was in the report,
whatever its instructions said.

Second, the lead often collected reports in a batch, as a *join
group*: its reports are held until every part has reported, then delivered in
one message, which saves the lead a turn per report. It also held back the one
report the others were waiting for.

In the latest batch of ten runs, all three failures
were runs where the lead put all three parts in one group. Every run without a
group, or with "init" left out of it, passed.

## Asking in words

The obvious fix was better instructions. I tried three:

- The first told each helper to send a finding apart from its report, and why. The
  finder did so in 1 of 5 runs with that sentence, and 0 of 5 without it.
- The second told the lead to leave out of the group any part whose result the
  others need. All 5 leads still grouped all three parts. One wrote: "Three
  parts, all independent at start".
- The third explained that a message does not interrupt a busy agent, after some
  leads had delayed the key for fear of that. No difference.

A lead cannot know at the start which part will turn up something
the others need. And a helper does not know its report might be held.

## Changing the delivery

**Batch only when batching is the point.** I stopped telling sessions to
group their parallel parts; a group is now a choice, for parts whose reports are
of no use one at a time. In the batch that tested it, leads grouped in 4 of 5 runs before and
0 of 5 after; both parts got the key in time in 1 of 5 before and 4 of 5 after.

**Let a stuck agent see what is held.** Now a group member that reports
"blocked" brings the reports the group already holds. If "a" says "I need the
key", the lead sees the held report from "init" with the key in it. In 3 of the
4 runs where a blocked report carried held reports, that was how the key first
reached the lead.

**Give the finding its own lane.** The newest change, just merged, adds an
optional `finding` to a report. The report can still be held; the finding goes to the
lead at once, and the lead passes it on only to the parts it affects. It builds
on what agents already do rather than asking them to change.

## Limits

These are small samples: one model, and five runs on each side of every change.
Treat each difference as a hint, not a proof. The `finding` field is merged, but
it has not yet been tried with a real model, so I do not know whether agents
will fill it in.

## What I took from it

If a finding reaches the right agent only when a model remembers a special rule,
it mostly will not arrive. The default path has to carry it.

Pass rates can hide this. In the batch that tested the "blocked" change, all ten
runs ended with the right numbers. Yet in the nine runs with a group, the helpers
had reported "blocked" before the key could reach them, and the answer came by a
detour. Count whether the finding arrived in time, not only whether the run
passed.
