---
path: 'hello-choralcat'
date: 2022-02-17
title: 'Hello, Choralcat 👋'
description: "What is choralcat? It's the world's first CCMS (Choral Catalog Management System)."
tags: ['beginnings', 'choralcat', 'music']
issueNumber: 13
---

[Choralcat](https://choralcat.org) is the world's first CCMS (Choral Catalog Management System). So cool! Ok, the acronym is
definitely tongue in cheek, but nonetheless it's an apt description. The impetus behind Choralcat
is my brother, [Tim](https://timkeeler.net), who is the music director for [Chanticleer](https://www.chanticleer.org).

They're moving offices and he wanted a way to digitize their music library. They've got many multiples
of filing cabinets and it's a pain to search through. Enter me. I thought it sounded like a lovely problem
and thus Choralcat (in it's current form, don't get me started on previous ideas...) was born.

![Choralcat Catalog view](/assets/images/choralcat/choralcat_screenshot.webp 'The catalog in use')

Choralcat is a rather simple application at its core. It's a relational database composed
of artists, compositions, and various ways to categorize them. You can tag compositions, add topics, etc..
You can sort, filter, and search your whole catalog. Instead of sorting through filing cabinets or
dated excel files you have a one stop shop to analyze and view all of your music.

The other cool feature is programs. You can create a musical program and then add musical numbers to the program,
rearrange the order, etc... Along with the list of pieces you will also see each piece's key and duration along with the
total duration of the program. It might be useful for some new killer programs!

![Choralcat Program view](/assets/images/choralcat/choralcat_program_screenshot.webp 'The program page')

Choralcat is currently written in [Django](https://www.djangoproject.com), using a simple sqlite database, with a smattering of
[Alpine.js](https://alpinejs.dev) and [htmx](https://htmx.org) for interactivity. It's been a pleasure to work
with and I'll have some followup posts that explore the stack further. The code is currently publicly
available [on GitHub](https://github.com/jerkeeler/choralcat).

So that's the short and sweet of Choralcat! It's a work in progress and maybe someday you will be able to sign
up and use it to track your own choral music!
