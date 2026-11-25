---
title: Claude Code cloud sessions now keep a memory
summary: >-
  Claude Code's cloud sessions can now read and add to a memory that outlives
  the session. Until now each one started in a fresh container and knew only
  what the repository told it. I turned it on tonight, and it could change what
  I have to write down myself.
date: 2026-11-25 23:00:00 +0000
published: false
---

A Claude Code cloud session, the kind I can start from my phone, gets a fresh
container with a clean clone of the repository, and when the session ends the
container is gone. Anything the session should know next time had to live in
the repository itself.

## How I worked around it

For this blog, that meant writing a skill: a file in the repository that sets
out the rules for a post, from the facts rule to the front matter. It works,
but it only holds what I thought to write down in advance. A correction I gave
in one session, a reason behind a decision, which way I like a thing done:
those stayed in that session and went when it ended.

## The switch

The new setting is under Settings, Your Claude, "Apps that use Claude's
memory". For Claude Code it reads: "Cloud sessions can read Claude Code's
cloud memory and add to it. They may also read memory from your chats. Saved
files go through an automated safety check, which keeps a copy."

![The Claude Code memory setting in claude.ai, switched on]({{ '/assets/images/claude-code-memory-across-cloud-sessions/settings.png' | relative_url }})

## What a session sees

The session that wrote this draft had the memory tools. Notes are kept per
repository, one fact per note, and each note has a type: who I am, feedback
on how to work, ongoing project context, or a pointer to an outside resource.
A session can list, read, write, change and delete them, and it is told to
save the reason along with a correction, so the next session knows when the
rule applies.

The guardrails are what make me willing to leave it on. A note is treated as
data, not as an instruction: it cannot grant a permission or override what I
ask in the session. Some categories of personal information are never saved.
Anything I ask a session to forget is taken out. And a note that names a file
or a function counts as a claim from the day it was written, to be checked
against the code before anyone acts on it.

## Why it matters to me

The big rules already sit in the skill. What memory can add is the small
things: a correction that until now held for one session and was gone the
next. If memory works as described, I give that correction once, and the
skill can go back to holding only the rules worth reviewing in a pull request.

That is still an "if". I switched it on tonight, and this blog's repository
had no notes yet when this session started, so I have not seen a second
session pick anything up. This post covers what the setting says and what one
session could see, not weeks of use. I will write again once memory has had
to earn its place.
