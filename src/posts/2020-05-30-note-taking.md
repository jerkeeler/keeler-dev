---
path: "personal-knowledge-database"
date: "2020-05-31"
title: "My Personal Knowledge Database"
description: "How does one retain knowledge through time? How can I effectively archive the things that I know for future use? This is how I answer those questions."
tags: ["note taking"]
draft: true
---
For a long time I have been fascinated with what I deem, "knowledge hacks." Various ways to learn, understand, and store my personal knowledge. Most recently, I've been thinking about the way I store and access my notes. This has been at the forefront of my mind with the impending start of my Ph.D.

To that end, I want my notes to end up becoming a "second brain" of sorts. A personal wiki of all my knowledge that I can come back to, refer to, and peruse. This includes notes on general topics such as: note taking, math, paleontology, and other broad categories. But, this also includes notes on articles, web pages, and newspapers.

I realize this may sound redundant and this is what Google and other search engines are for, but, this collection of notes is a way for me to **actively** synthesize *my* knowledge in *my* words. Ideally, this makes it easier for me to revisit a topic. It also allows me to make my own connections and links between various topics, papers, and articles.

I want my notes to be linked to each other and to become a "knowledge graph". This idea, and how I've decided to take my notes,  was heavily inspired by [Niklas Luhmann's](https://en.wikipedia.org/wiki/Niklas_Luhmann) [Zettelkasten](https://en.wikipedia.org/wiki/Zettelkasten) (slip box).  With technology today, I can traverse my knowledge graph by perusing through my notes, similar to how Luhmann connected his note cards. Along with Luhmann, my system is heavily inspired by [Roam Research](https://roamresearch.com/), which offers a web based note taking system to build up a personal knowledge graph.  I believe a knowledge graph is an integral aspect of my knowledge system. It will allow me to make and maintain connections between topics and find connections that are not obvious off when I first create the note.

## My System

In my knowledge system notes are like atoms. Each note has a **single purpose**. A note is like a lego. I can bind notes together by linking them to each other. Topics are comprised of notes. Topics, normally comprised via tags or some hierarchical folder structure in other systems, are built by linking notes to each other.

For example, let's say I want to take notes on calculus, specifically limits. I will have one note called "Limits" which contains links to other topics such as "Factorization" or "Trig Identities" if they are used within that note. The "Limits" note is therefore implicitly a part of that knowledge graph and I can easily jump back and forth between it and whatever it links to.

An important point is that the links between notes are **bi-directional**. This means if I go to "Factorization" I can see all of the notes that link to "Factorization," including "Limits." This is referred to as "backlinks" in software such as Roam. These bi-directional links allow me to navigate my knowledge database and view connections that I come up with. I think it's important that I am the one to make these connections. In that way, my notes end up mirroring my own thought process and how I connect things together!

As you may have noticed what I designate as a note above, is a discrete, **synthesized** subject. A note is **not** about: meetings, books, todos, etc... I treat my collection of notes as a **living wiki**. That is the main purpose of my notes. However, I still want to take notes on articles, meetings, and superfluous items. To that end I've split my notes into three categories:

1. Permanent (wiki style, described above)
2. Articles
3. Daily

### Article Notes

Article notes are raw notes that I have about a given article, book, or paper. These notes contain my thoughts, salient points, quotes, etc... from these sources. They also contain some metadata: published date, read date, link. These notes can link out to other notes, permanent or article. If the new note provides a profounder understanding of a given subject I may then update my permanent note a particular subject.

Article notes are a powerful tool. Since I'm linking to relevant notes inside of my article notes, I can easily see how various articles and papers are related to different subjects. Through the use of backlinks I can go to a permanent note and find all of the article notes that mention it.

I believe I will find this invaluable as I start my Ph.D. as it will allow me to easily see how various papers and topics are connected.

### Daily Notes

Daily notes, are the final tool in my toolbox. They are for all of the miscellaneous notes that I may want to make. That could be a reminders, quotes someone said, etc... They are titled with the date like "2020-05-31" and contain the random notes for that date.

Importantly, most of my permanent notes will not link to daily notes. Daily notes may link to article and permanent notes, however. Daily notes contain notes about meetings, code snippets, etc... Daily notes should be reviewed at the end of the day to see if any of the information contained therein should be moved to my todo list (I use [Things](https://culturedcode.com/things/)) or if the information should be distilled and put into a permanent note.

## Tech
There are a variety of tools that work with my system, but none of them are perfect. Here are all of the tools that I evaluated while I was refining and building out my system:

* [Obsidian](https://obsidian.md/)
* [Notion](https://www.notion.so/)
* [Roam Research](https://roamresearch.com/)
* [iaWriter](https://ia.net/writer)

All of them have their pros and cons, but I won't list them here.

For me, I ended up using [Bear](https://bear.app/) as my note taking app of choice and the place to store my knowledge database.  What I was looking for in a note taking and knowledge database solution:

* The ability to wholly own the files, store them locally and no third party login or sync
* Mobile app
* Markdown files to make future edits easy if I need to move platforms
* Beautiful editor,  not a plain markdown editor, but one that has at least a little bit of WYSISWYG
* Links and back links to other notes

Bear hits all of these marks, except the last. Bear does not, currently, support backlinks. The devs have stated that it is one of their most requested features and that they are looking into to supporting it. However, Bear does have the ability to link to notes using `[[Note Title]]` syntax and shortcuts to move back and forth between notes. On top of that,  Bear stores notes in an SQLite database and there are many  community tools for automatically generating and inserting backlinks. So, for now, Bear is a suitable piece of software for me.

## The Future
So, that is how my knowledge database and personal note taking is going to work for the foreseeable future. So far I have been pretty happy with my decision and how it is going. I already see the results in my day to day. I hope to revisit this in a few months to see how things are progressing and see what edits I have made to my system.
