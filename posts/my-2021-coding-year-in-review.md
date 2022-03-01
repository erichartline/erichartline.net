---
title: "My 2021 Coding Year In Review"
date: "2022-03-01"
category: "Recap"
tags:
  - "recap"
  - "work"
  - "professional"
description: "My biggest year of change professionally."
---

This was the biggest year of my professional career. In July, I decided to leave dictyBase and explore new opportunities. In early August, I officially joined [Hireology](https://hireology.com/) as a Front End Software Engineer. It was a bittersweet moment because I truly did cherish my time at dictyBase and I will forever be grateful to them for taking a chance on me when I was a very green junior developer. At the same time, it was time to move on, and Hireology has proven to be an awesome fit for me. I am now part of an amazing engineering team, and I am very excited to see what the future holds here.

### Work projects

- **Rich text editor library.** The last project I worked on at dictyBase was to finish overhauling a [page editor library](https://github.com/dictyBase/dicty-components-page-editor) built using Slate.js. This was a huge undertaking that consisted of migrating from the old Slate 0.4x format to 0.5x. This more recent version of Slate had entirely new data structures, switched to TypeScript and included React Hooks. The changes were so significant that I ended up writing this library from scratch rather than trying to refactor our existing version. This meant that I could use a clean "slate" (sorry, had to...) and write all of the plugins from scratch (previously I had used existing third-party plugins for some of the more complicated features like lists and tables). This also meant that I needed to write a script to convert the old 0.4x data to the new 0.5x. This wasn't as simple as using a premade migration tool since our existing data structure had quite a few differences that needed to be accounted for. I learned a lot from this overhaul, but hopefully Slate is done with breaking updates like this.

- **Catalog search improvements.** I started a demo app to redesign the Dicty Stock Center's catalog search, this one using Material-UI's [Chip](https://mui.com/components/chips/) components to store different filters within a search box. This was intended as a proof-of-concept and I don't know if it was ever implemented, but it was a fun project all the same.

- **GraphQL schema and types library.** Previously all dictyBase GraphQL schema was stored in its own repo, but I converted it into a library that generated typings for all queries and mutations using [@graphql-codegen](https://www.graphql-code-generator.com/). This codegen was an awesome tool and I would wholeheartedly recommend it for any type of GraphQL project.

During my last months at dictyBase, I also redesigned the site's footer and added a privacy policy, among many other things that I'm sure I am forgetting.

As far as my 2021 months at Hireology, I got my feet wet with some design cleanup before quickly moving into a pretty big new feature for automated interview scheduling (more details on that in the [company blog post](https://hireology.com/blog/just-launched-interview-scheduling-candidate-search-and-mobile-app-enhancements/)). This was an awesome project to work on together as a team, and it was a great introduction into their collaboration process. That blog post also highlights improvements to the candidate search platform, which I spent quite a bit of time on at the beginning of this year (2022).

### Side Projects

Unfortunately, I didn't get to do too many side projects this year. I played around quite a bit with this website (which will always be a work in progress) and also wrote some scripts to parse through some datasets, but the big side project I had high hopes for last year kind of got scrapped.

2022 is already proving to be much more fruitful on this front, and I actually have a brand new blog post planned to cover one such venture. Finally, a non-year-in-review post! 😅

### Summary

2021 was a year of some pretty big changes for me professionally, but it was also incredibly exciting and I am feeling super optimistic about my future. I have found that I really enjoy collaborating with my teammates and also teaching and helping with concepts that I am familiar with (especially testing!). My goals for this year are to continue to grow as an engineer, bring value and insight to my team and company, and maybe even build a better-looking personal website (!).
