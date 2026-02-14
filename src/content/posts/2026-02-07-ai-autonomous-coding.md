---
slug: 'two-and-a-half-hours-to-raymond'
date: 2026-02-07
title: 'Two and a Half Hours to Raymond'
description: 'How I used AI to build a tool that creates Animal Crossing amiibos for any villager I want, in a single evening.'
draft: false
tags: ['ai', 'programming']
issueNumber: 1
---

Animal Crossing: New Horizons just dropped a massive [new update](https://animalcrossing.nintendo.com/new-horizons/update-3-0/), so naturally I wanted to start over on a fresh island. If you've ever played Animal Crossing, you know the pain: getting the villagers you actually want to live on your island is a _mission_. You visit mystery islands, you trade with friends and strangers, you hope and pray. With over [417 villagers](https://nookipedia.com/wiki/List_of_villagers#By_game) in the game, finding your favorites takes forever.

But there's a shortcut — amiibos. Those little figurines Nintendo sells have NFC chips in them. When the Switch reads one, it can influence the game you're playing. In Animal Crossing, scanning an amiibo invites that villager to your island. Problem solved, right?

Not quite. For Animal Crossing, you can't buy individual villager amiibo — you buy packs of amiibo cards and hope the villager you want is in there. It's still a lottery. You _can_ buy individual cards on eBay, but how do I get one of the most popular Animal Crossing villagers, Raymond? His card goes for up to \$80! I'm not about to spend that when the game itself is only \$60.

But amiibo are just NFC tags, right? Could I write one myself and load whatever villager I wanted?

## The Old Way

The answer is yes — technically. But I didn't know anything about NFC. Not the communication protocol, not how to read and write raw bytes to those tiny chips, nothing. And even if I figured out NFC, I'd still need to reverse-engineer the amiibo data format — which Nintendo doesn't officially document, of course. That's a niche rabbit hole of community wikis and hobbyist research. To pull this off, I'd have to spend hours of my free time reading NFC documentation and researching compatible hardware. Then dig through forums for the amiibo format and hunt down packages in my favorite programming language. Hours, if not days, just to figure out where to start.

And that's just the research. Then I'd need to actually write the software. I don't have the time — or the desire — to spend long chunks of my day on a hobby project like this. Realistically, I'd be working in one or two hour sessions on weekends or after work. At that pace, this easily would have stretched into months before I had something I was happy with. I'd probably start a repo, hit a wall in the first session, and not touch it again for weeks.

That's a lot of free time to spend on Animal Crossing villagers. I never would have attempted it.

## Enter AI

This is where AI enters the picture. I opened up Claude and started asking questions. What is NFC and how does it work? From there it mentioned NDEF, a data format I didn't even know existed, and I dug into that. Then I interrogated it about amiibos and it went off and found GitHub repositories like [pyamiibo](https://github.com/tobywf/pyamiibo) and [amiitool](https://github.com/socram8888/amiitool), and scoured forums. I also learned there are apps that already do this — but of course they cost money, and the whole point was to do this myself and not pay someone else. Well, except Anthropic I guess.

After thirty minutes of back and forth, I had a high-level understanding of NFC, NDEF (the data format my phone understands), and how amiibos actually work under the hood. I ordered the hardware. Thirty minutes. That's all it took to get past the research phase that would have taken me days.

When the hardware arrived, I fired up Claude Code (with Opus 4.5) and pointed it at the notes from the earlier session, which I'd had Claude synthesize and save to a markdown file. Two hours later — split across two working sessions — I had a working CLI written in Python using the click and rich packages as the only two external dependencies.

And the thing works! It's a full-featured CLI that can read and write arbitrary bytes from any NFC tag, read and write NDEF blobs, and write any amiibo I want. I can tap a tag with my phone and it opens a URL — how cool is that? The code isn't perfect style-wise, but it works and that's what matters for a personal side project.[^1]

Now I've got Raymond on my island. And any other villagers I want in the future!

## The Unlock

AI let me take an idea, figure out if it was even doable, and then just _do it_. Two and a half hours from "I wonder if this is possible" to a working side project. I would not have done this otherwise. Full stop.

This is what people mean when they talk about "custom software." I'm willing to try things now. Things I would've talked myself out of before are suddenly worth a couple hours of my evening. That's huge.

You still need to know the fundamentals, though. I had to understand Python and software architecture well enough to tell it to split the code into sane modules. I had to verify it wasn't calling out to some unexpected external API. You can't just blindly trust the output. But you don't have to write it all yourself either, and that makes all the difference.

It's only going to get better from here (according to the AI labs at least). I'll be curious to see if we get the same level of productivity gains in the corporate world, where wrong code can cost money or even lives. But for personal projects? The barrier certainly just got a whole lot lower. What else have I been putting off that's actually just a couple hours of focused work now?

[^1]: I'm not posting the repo publicly because, well, Nintendo. But if you're curious about the code, feel free to reach out.
