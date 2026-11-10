---
title: Banning a tool is not the same as handling it
summary: >-
  A new OpenCode feature could make a helper session look finished while it was
  still waiting. The obvious fix was to take the tool away. I tested that before
  shipping it, and shipped something else.
---

I maintain [opencode-courier](https://github.com/ivopogace/opencode-courier), a
plugin for OpenCode. It lets a session start helper sessions. A helper reports
back to its parent, and the report wakes the parent up. If a helper ends its
turn without reporting, the parent is told that it "ended without a report".

That last message is the one this post is about.

## A wake-up the plugin cannot see

OpenCode 2.2.7 added Console event watches. A session can ask to be woken when
a pull request, a Slack thread or a CI run changes, and then end its turn. The
feature is behind a flag that is off by default, and it needs an OpenCode
Console workspace.

The plugin cannot see these watches. So a helper that sets a watch and stops
looks, from the plugin's side, like a helper that is finished. Its parent would
be told that the helper ended without a report, and only later would the watch
wake the helper up to do the rest of its work.

## The obvious fix

The plugin already denies OpenCode's own schedule tools to helper sessions. The
obvious fix was to do the same with the watch tool: if helpers cannot set a
watch, they cannot disappear behind one. It was the first recommendation, and I
was ready to ship it.

## Running both options first

Before shipping, I ran both options side by side with a real model, DeepSeek
v4.1 Flash. The real watch feature was not available on the account I used, so
I used a stand-in plugin that mimics it. The task was the same in both runs: a
parent asks a helper to wait for a pull request's checks and report the result.

| | Watch tool allowed | Watch tool denied |
|---|---|---|
| What the helper did | Set the watch, told its parent, scheduled a check-in, ended its turn | Looked for another way to wait |
| What happened next | Woken by the watch 100 seconds later, cancelled the check-in, reported | About three minutes of searching |
| What the parent got | The result | No report by the end of the run |

**With the tool allowed**, the helper set the watch, sent its parent a progress
note, and scheduled itself a check-in with the plugin's `courier_later` tool.
Then it ended its turn. The watch woke it 100 seconds later. It cancelled the
check-in and reported, and the parent answered with the result.

The check-in is what made this work. A pending check-in is something the plugin
can see, so the helper showed as waiting, not as finished.

**With the tool denied**, the helper no longer had the tool, but it still had
the task. Told to wait for a pull request, it spent about three minutes looking
for another way to do that. It had not reported when the run ended.

## What shipped

The tool stays allowed. Every helper's brief gained one instruction on how to
wait for an outside wake-up:

1. Tell your parent.
2. Schedule yourself a check-in.
3. End your turn.
4. Once woken, cancel the check-in and report.

That is the whole change.

## What this does and does not show

This was one run per option, with one model, against a stand-in for the real
feature. That is enough to change a default. It is not proof.

## What I took from it

Taking a tool away does not take the task away. The helper was still asked to
wait for a pull request; it only lost the one direct way to do it.

A restriction without guidance produces flailing. The denied helper was not
told what to do instead, so it searched.

And test a restriction before trusting it. The ban looked safe on paper, and I
had already recommended it. It took one side-by-side run to see that it made
the outcome worse.
