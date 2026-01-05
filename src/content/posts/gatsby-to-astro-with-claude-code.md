---
date: 2025-01-03
title: 'How I Migrated My Personal Site from Gatsby to Astro with Claude Code'
template: post
hidden: false
thumbnail: '/thumbnails/binary.png'
slug: gatsby-to-astro-with-claude-code
tags:
  - tech
  - astro
  - gatsby
  - ai
  - claude
---

My personal site has been running on Gatsby for over four years, and I genuinely loved it.

I was a fan of Hugo and always wanted to try a react framework for building personal site, Gatsby was quite interesting then 2017(ish). By 2019, it had become the darling of the React ecosystem. The community was vibrant. There was a plugin for everything: images, SEO, RSS feeds, analytics, you name it. The Gatsby Showcase featured beautiful sites from companies and developers who'd built impressive things with the framework. The documentation was thorough. The starter templates were extravagant!

The plugin ecosystem was particularly impressive. Need syntax highlighting? There's a plugin. Want optimized images with blur-up loading? Plugin. RSS feed generation? Plugin. The community had built solutions for almost every common need, and Gatsby's architecture made it easy to compose them together. I spent hours browsing the plugin library, amazed at what people had contributed.

Gatsby Inc. was growing too. They launched Gatsby Cloud, a deployment platform optimized for Gatsby builds. The company raised funding. It felt like the project had real momentum and a sustainable future. Around the same time, Next.js was gaining traction with its hybrid static/server approach, and I learned that too. But for my personal blog, I chose Gatsby. The theming system was elegant, and I found a theme I liked from Tania Rascia that I could customize. For a content-focused site, Gatsby felt right then.

As someone who works with APIs, the GraphQL data layer seemed clever. Instead of just reading files, you'd query them. It felt like a proper architecture, even for a blog. Everything was a node in a graph. Your Markdown files, your images, your site metadata. You could query relationships between content. It was perhaps overkill for a personal site, but it felt powerful.

## I realized my mistake

The plugin ecosystem that had been Gatsby's strength became a maintenance burden. Some plugins were abandoned by their creators. Others fell behind on Gatsby version updates. When Gatsby released a new major version, you'd have to wait for plugin authors to catch up, or find alternatives, or fork and fix things yourself. Build issues crept in. A plugin that worked fine for months would suddenly cause cryptic errors after an unrelated dependency update.

What had been a blog became engineering work. I'd sit down to write a post and instead spend the evening debugging why `gatsby-plugin-sharp` was failing, or why the build was hanging, or why images weren't processing correctly. For a personal project focused on writing, this felt backwards.

Then in February 2023, Netlify acquired Gatsby. I expected this might bring renewed energy to the project. Netlify had resources and a vested interest in static site tooling. But the pace of development slowed. Gatsby Cloud was eventually sunset. Core team members moved on. GitHub issues accumulated. The community that had made Gatsby special started looking elsewhere.

My site still built, mostly. But dependencies would break between minor versions. I was one `npm install` away from a debugging session. The joy was gone.

I'd been watching Astro since it launched in 2021. The team at Astro (previously behind Snowpack) built it with a clear philosophy: ship zero JavaScript by default, support any UI framework or none at all, and treat content as a first-class concern. By version 4, Astro had matured into exactly what I wanted. Markdown files just work. No GraphQL layer. No complex plugin dependencies. The content collections API is straightforward. Build times are measured in seconds, not minutes.

I wanted to migrate, but migration projects have a way of sitting in backlogs forever. Every file to convert, every import path to update, every edge case to test. The accumulated tedium kills motivation.

## Enter Claude code

Ever since Claude code revolution, I always wanted to migrate my blog away or at least try to fix my gatsby build errors, lol!

I still dragged my feet because it was hard to prioritise against work. Claude code Desktop was the final nudge. In Oct 2025, I tried Blog migration as a test session, and damn, it worked out well. Claude code from mobile one-shotted the entire migration. All I need to do is make sure bugs are fixed.

//claude code todo - import this image well. 
public/images/post-images/gatsby-to-astro-with-claude-code/claude-code-mobile.png

I worked on claude several evenings but pushed everything to the PR in the holiday weeks. 

## My AI Code Tooling Stack

- Claude code Desktop
- Claude code on Terminal
- Traycer for Planning
- CodeRabbit for Reviews

The work happened in waves:

**Wave 1: Core Migration**

Converting layouts, components, and pages from React/JSX to Astro's `.astro` format. Rewriting the routing structure. Setting up content collections for blog posts and guides.

**Wave 2: Dead Code Cleanup**

I gave Claude Code a cleanup plan thanks to Traycer: 

//claude code todo - import this image well. 
public/images/post-images/gatsby-to-astro-with-claude-code/dead-code-traycer.png

It executed methodically, creating focused commits for each change. 62 npm packages were removed when we stripped out the React and MDX dependencies that Astro didn't need.

**Wave 3: Bug Fixes**

While the migration was one-shotted by Opus 4.5. There were subtle bugs like Dark Mode Toggle has three states, tags for the blog doesn't load

**Wave 4: Asset Cleanup**

More cruft removal:

> "Remove unused Partytown library files from public/~partytown/"

11 files deleted, 5,401 lines of code I'd added years ago for an optimization I never actually used. We also removed unused thumbnail images that had accumulated over the years.

**Wave 5: Lighthouse Optimization**

I shared a Lighthouse report PDF and asked Claude Code to fix the issues. It improved color contrast ratios for accessibility (changing `--text-muted` from `#888888` to `#595959` for WCAG AA compliance), added aria-labels to navigation and footer links, and added preconnect hints for Google Fonts to reduce render-blocking time.

**Wave 6: Final Polish**

Navbar styling tweaks, updating my contact email, adding `.claude/` to gitignore, and rewriting the README for the new Astro setup.

At one point, the conversation hit Claude Code's context limits and automatically compacted the history. Even after summarization, it remembered what we'd done, what was pending, and the decisions we'd made. I didn't have to re-explain the project.

The migration was also a good excuse to explore what AI coding tools can actually do. The answer: they're genuinely useful for this kind of work. Not because they're smarter than me at any individual task, but because they handle volume without losing focus. Converting fifty files, updating a hundred import paths, adding aria-labels to every link. These tasks are straightforward but tedious. Having them handled let me focus on decisions that required judgment.

What required my judgment: design choices (should nav links have underlines on hover?), scope control (Claude Code could have refactored more aggressively, but I kept it tight), and verifying the output worked correctly. I also asked it to scan for accidentally committed secrets before pushing, which is how we caught that `.claude/` settings should be gitignored.

After everything, Lighthouse scores landed at:

- Performance: 96
- Accessibility: 100
- Best Practices: 100
- SEO: 91 (the gap was Astro's dev toolbar, not production code)

Had it not been for Claude Code, this migration would still be on my todo list. The technical complexity wasn't the barrier. It was the accumulated tedium of a thousand small tasks. Claude Code compressed that tedium into a few evening sessions.

Gatsby served me well for four years. It introduced me to React, to GraphQL, to the JAMstack philosophy. The community built something special, and I'm grateful for it. But projects evolve, maintainers move on, and sometimes the right choice is to move to something that better fits how you work today.

Astro is that for me now. Fast builds, simple mental model, focused on content. And Claude Code made the transition possible in hours instead of weekends.

**Stack:** Astro 4, vanilla CSS, Firebase Hosting, GitHub Actions

**Source:** [github.com/aravindputrevu/aravind.dev](https://github.com/aravindputrevu/aravind.dev)
