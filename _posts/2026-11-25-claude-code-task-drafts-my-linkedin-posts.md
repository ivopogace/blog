---
title: "How a Claude Code scheduled task drafts my LinkedIn posts"
summary: >-
  A scheduled Claude Code task now reads a private Discord channel three times a
  day, drafts LinkedIn posts about what arrived, and publishes one only after I
  reply "post 1". Here is how each piece was set up, with the screenshots, and
  with every token kept out of the chat.
date: 2026-11-25 22:00:00 +0000
published: false
---

I wanted to turn the announcements I already read into short LinkedIn posts,
without copying links around by hand. The announcements live in public Discord
channels, and a cloud session cannot read Discord on its own: a channel can
only be read by someone who is in that server. So the plan became a small
chain, with a person at the one step that matters.

## How it fits together

<ol class="flow">
  <li><b>Public channels</b><span>news and release channels on other servers</span></li>
  <li><b>My private channel</b><span>Discord's Follow copies their posts in</span></li>
  <li><b>Scheduled task</b><span>a fresh cloud session, three times a day, reads it with a bot</span></li>
  <li><b>Drafts on my phone</b><span>a push notification and the drafts to review</span></li>
  <li><b>LinkedIn</b><span>posted through the API, only after I approve</span></li>
</ol>

The same run also checks npm for new Claude Code and opencode-courier versions
and this blog's feed, but the Discord part is what needed the most setup.

## The steps

<div class="guide" markdown="1">

<details class="step" id="step-1" open markdown="1">
<summary><span class="n">1</span> A private server that follows the channels</summary>

I made a Discord server only I am in, with one channel, `#claude-updates`.
On each announcement channel I wanted, I pressed **Follow** and picked that
channel. From then on every new post is copied into it, with its preview card.
A link I paste there myself counts as well, which was how I tested the first
run, before anything had arrived.

<figure class="shot" data-focus='[{"label":"the state message","x":0.098,"y":0.458,"w":0.514,"h":0.064}]'>
<div class="shot-view"><img src="{{ '/assets/images/claude-code-task-drafts-my-linkedin-posts/inbox.png' | relative_url }}" width="884" height="502" loading="lazy" alt="A dark chat channel named claude-updates. Two notices say I followed Claude updates and OpenCode releases into it. A link I pasted and a followed research post each carry a memo reaction. A pinned message from the bot, Update Reader, reads: linkedin-drafts state: claude-code=2.1.332 courier=1.0.0; that text is outlined in orange."></div>
<figcaption>The private channel. Redrawn from the channel's real messages, with names and IDs left out. The outlined message is the run's memory (step 6).</figcaption>
</figure>

</details>

<details class="step" id="step-2" markdown="1">
<summary><span class="n">2</span> A bot that can read it</summary>

In the Discord Developer Portal I created an application, added a bot, turned
on the **Message Content** intent (without it the bot sees messages but not
their text), and invited it to my server. Its own role allows only **View
Channel** and **Read Message History**. Sending and adding reactions come from
the server's default role. The bot never stays connected: Discord does not
call anyone when a message arrives, so a scheduled task asks it instead.

</details>

<details class="step" id="step-3" markdown="1">
<summary><span class="n">3</span> Two secrets, neither in the chat</summary>

The bot token went into the cloud environment's settings as the variable
`DISCORD_BOT_TOKEN`. The LinkedIn token went in through the secure form that a
session opens for one host, `api.linkedin.com`, and is saved as a network
secret. The session never sees it: the proxy adds the header on the way out.

<figure class="shot" data-focus='[{"label":"no Authorization header","x":0.04,"y":0.274,"w":0.77,"h":0.055}]'>
<div class="shot-view"><img src="{{ '/assets/images/claude-code-task-drafts-my-linkedin-posts/terminal.png' | relative_url }}" width="884" height="324" loading="lazy" alt="A terminal. A curl to the LinkedIn userinfo endpoint without an Authorization header returns HTTP 200. A check prints token set without printing the token, and a call to the Discord API returns the bot's name, Update Reader."></div>
<figcaption>Both checks, run in a cloud session today. Neither prints a token.</figcaption>
</figure>

</details>

<details class="step" id="step-4" markdown="1">
<summary><span class="n">4</span> A LinkedIn app and a 60-day token</summary>

LinkedIn wants every developer app linked to a company Page, even when it
only posts to a personal profile, so the app needed a Page first. Then:

1. In the app, under **Products**, request **Share on LinkedIn** and **Sign In
   with LinkedIn using OpenID Connect**.
2. In the **OAuth Token Generator**, tick `openid`, `profile` and
   `w_member_social`, and generate a token.
3. Save it as in step 3, and check it with a read-only call to `/v2/userinfo`.

The token lasts 60 days, and refresh tokens are only for approved partners.

</details>

<details class="step" id="step-5" markdown="1">
<summary><span class="n">5</span> The scheduled task</summary>

The task runs at 06:36, 12:36 and 18:36 Berlin time, not on the hour,
because jobs set exactly on the hour can be delayed. Each run starts a fresh session and
follows eight numbered steps: check the LinkedIn token, check npm and the blog
feed, read the channel, draft, record what was drafted, notify me, ask, and
post only on a clear yes.

<figure class="shot" data-focus='[{"label":"the schedule","x":0.04,"y":0.209,"w":0.921,"h":0.125}]'>
<div class="shot-view"><img src="{{ '/assets/images/claude-code-task-drafts-my-linkedin-posts/task.png' | relative_url }}" width="884" height="487" loading="lazy" alt="A card for the scheduled task LinkedIn drafts. Schedule: CRON_TZ=Europe/Berlin 36 6,12,18 * * *, every day at 06:36, 12:36 and 18:36. Each run starts a fresh cloud session, sends a push notification, and has the DISCORD_BOT_TOKEN variable and the api.linkedin.com network secret. The first lines of the prompt say to post only after explicit approval."></div>
<figcaption>The task's settings and the start of its prompt.</figcaption>
</figure>

</details>

<details class="step" id="step-6" markdown="1">
<summary><span class="n">6</span> A memory without a database</summary>

The first version had no memory. A missed run lost its items, and a manual
run drafted the same article twice. Discord now holds the state. Every message
that has been drafted gets a 📝 reaction from the bot, so the next run skips
it. The last versions drafted live in one message the bot wrote and I pinned:
`linkedin-drafts state: claude-code=2.1.332 courier=1.0.0`. A run reads it
first and rewrites it after drafting.

</details>

<details class="step" id="step-7" markdown="1">
<summary><span class="n">7</span> Review on the phone, then post</summary>

When a run has drafts, I get a push notification, and the session waits.

<figure class="shot shot-narrow" data-focus='[{"label":"the notification","x":0.07,"y":0.435,"w":0.86,"h":0.414}]'>
<div class="shot-view"><img src="{{ '/assets/images/claude-code-task-drafts-my-linkedin-posts/notify.png' | relative_url }}" width="444" height="350" loading="lazy" alt="A phone lock screen at 18:38 with a notification: 1 LinkedIn draft ready for review, Migrating our Messages API to Rust, followed by the status of each check."></div>
<figcaption>The notification from the run of 25 November, redrawn with its real text.</figcaption>
</figure>

<figure class="shot" data-focus='[{"label":"the status line","x":0.04,"y":0.108,"w":0.921,"h":0.086},{"label":"the question","x":0.04,"y":0.875,"w":0.603,"h":0.073}]'>
<div class="shot-view"><img src="{{ '/assets/images/claude-code-task-drafts-my-linkedin-posts/run.png' | relative_url }}" width="884" height="587" loading="lazy" alt="The run's reply. A status line with a check mark for LinkedIn, npm, courier, blog and Discord. A three-line draft about the Messages API moving to Rust, its link, the quotes it is based on, and the closing question: Reply post 1, post all etc. to publish on LinkedIn, or tell me what to change."></div>
<figcaption>The same run's reply. Every draft lists the quotes it rests on.</figcaption>
</figure>

On "post 1", the session builds the request with `json.dumps` and sends it to
`/rest/posts`. LinkedIn's post text is a small markup language, so characters
such as `(`, `#` and `_` must be escaped, and hashtags go in as templates.
Try it:

<div class="escaper">
<label for="esc-text">Post text</label>
<textarea id="esc-text" rows="3">Verification is the new bottleneck (for agent-written code).</textarea>
<label for="esc-tags">Hashtags</label>
<input id="esc-tags" value="#Anthropic #Rust #AI">
<p class="escaper-out">What the request sends as <code>commentary</code>:</p>
<output for="esc-text esc-tags"></output>
</div>

</details>

<details class="step" id="step-8" markdown="1">
<summary><span class="n">8</span> A reminder before the token runs out</summary>

A second, one-time scheduled task fires a few days before the 60 days are up.
It lists the steps to make a new token, opens the secure form again, and checks
the new one with the same read-only call. It does not post anything.

</details>

</div>

## What it taught me

Most of the work went into what the session must not do: print a token, post
without a yes, or draft the same thing twice. Reactions and one pinned message
turned out to be enough memory for a job like this. The screenshots are redrawn
from one run's real output and the channel's real messages, not captured from
the apps, and they show drafts, not a published post.

<script src="{{ '/assets/js/guide.js' | relative_url }}" defer></script>
