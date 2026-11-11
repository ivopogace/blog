---
layout: page
title: About
summary: Who writes this blog, and where else to find the work.
permalink: /about/
---

I'm Ivo Pogaçe. I write software, and this is where I write about it when
there is a story worth telling.

{% comment %}
Draft. Add here, in a sentence or two: what you do for work and where you are
based. Leave out anything you would rather not publish. This note is not
published.
{% endcomment %}

## What I work on

One of the projects I maintain is
[opencode-courier](https://github.com/ivopogace/opencode-courier), an OpenCode
plugin that lets AI coding sessions spawn helper sessions and be woken by their
reports.

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
