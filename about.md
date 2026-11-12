---
layout: page
title: About
summary: Who writes this blog, and where else to find the work.
permalink: /about/
---

I'm Ivo Pogaçe, a full-stack developer in Wiesbaden, focused on Java, Spring
Boot and Angular. This is where I write about the software I build when there
is a story worth telling.

## What I work on

In my free time I build open-source tools for AI coding agents and contribute
to other open-source projects. My main one is
[opencode-courier](https://github.com/ivopogace/opencode-courier), an OpenCode
plugin that lets AI coding sessions hand work to each other. The
[projects page]({{ '/projects/' | relative_url }}) lists it with the posts
written about it.

## What to expect here

Notes on the software I build: what I tried, what broke, and what I changed
because of it. I post when there is a story, not on a schedule. The
[list of posts]({{ '/' | relative_url }}) has everything so far, and there is
an [Atom feed]({{ '/feed.xml' | relative_url }}) if you want to hear about new
ones without checking back.

## Elsewhere

{% if site.github_url and site.github_url != "" -%}
- [GitHub]({{ site.github_url }}), where the code lives
{% endif -%}
{% if site.linkedin_url and site.linkedin_url != "" -%}
- [LinkedIn]({{ site.linkedin_url }}), where I announce new posts
{% endif %}
