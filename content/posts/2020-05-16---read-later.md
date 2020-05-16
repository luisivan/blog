---
title: Notion as a read later app
date: "2020-05-16"
template: "post"
draft: false
slug: "read-later"
category: "Productivity"
tags:
  - Tools
description: "How to use Notion as a drop-in replacement for apps like Pocket or Instapaper"
socialImage: /media/read-later/list.png
---

I was using [Pocket](http://getpocket.com/) which is nicely integrated with Firefox. Unfortunately, they have now introduced a paid plan if you reach more than five highlights — which may happen in just a single post!

Since that seemed a bit ridiculous to me, I started looking into alternatives.

I am a [Notion](https://notion.so) maximalist — it's a **tool to make your own tools**!

And, of course, Notion can be purposed to create a read later app.

Before jumping into it, I want to do a quick recap of other tools that I analyzed before deciding. Keep in mind that offline support and parsing websites into an easily readable format are key factors for me.

[Hypothesis](http://hypothes.is) is super interesting because of its collaborative nature. However, it lacks offline support and just lets you annotate on top of websites, instead of parsing their content.

[Instapaper](https://www.instapaper.com/) is cool, but it also has a paid plan similar to Pocket's.

## Saving pages

Turns out that Notion has an [amazing browser extension](https://www.notion.so/web-clipper) that enables you to save any site to it. It also works in iOS and Android.

It lets you save websites to a Notion database with the following parameters:

- Title of the page as the ID property
- URL of the page as a link property
- Content of the page as the content of the item

<img style="max-width: 320px" src="/media/read-later/clipper.png">

With some tweaks, my read later database ends up looking something like this:

![](/media/read-later/list.png)

And this is how an article looks like:

![](/media/read-later/post.png)

Obviously there's text and the actual body of the article after the image.

The properties are the interesting part. I added the following:

- **Tags**: So that I can filter by them later.
- **External highlights**: This is for other kinds of content, for example ebooks. I would then put there the URL to my Kindle highlights.
- **Knowledge**: This is a relation to another database that stores the knowledge that I extract from different sources. This usually looks like one-liner summaries with a further explanation of the piece of knowledge written with by own words — that way, I make sure I understood it.

This is just one of the parts of my new Notion-powered learning system. Specifically, this is the way that sources get inputted for them to be read, understood and summarized. Then I have other parts that I use to build more actionable knowledge for the day to day.

Previously, I was using Pocket + [Readwise](https://readwise.io/) — but for my needs, Notion can replace them!