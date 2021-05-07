---
title: "My 2020 Coding Year In Review"
date: "2021-03-27"
category: "Recap"
tags:
  - "recap"
  - "work"
  - "professional"
description: "2020. Yeah, it was a year alright."
---

It's a little comical that I am just now writing my 2020 year in review post, but then again, who really wants to look back at 2020? Even though the year itself was pretty awful, I did get to build and work on some cool things. Here's a quick rundown.

### Work projects

- **New user authentication system**. I started the year by working on easily my most complex project yet -- building an entirely new user authentication system. Our old auth server was solely using JWTs (JSON Web Tokens), and on the frontend it was storing these tokens in local storage to keep the user logged in. This has numerous security issues, including the potential for [CSRF](https://owasp.org/www-community/attacks/csrf) and [XSS](https://owasp.org/www-community/attacks/xss/) attacks. To solve this, we now use a combination of refresh tokens and HttpOnly cookies. I won't get into too much detail here -- it should really be its own post -- but I developed the entire process from frontend to the GraphQL layer to the backend server, and I learned a ton in the process.

- **ChatOps deployments with GitHub Actions**. One of our big goals last year was to automate as much of our deployment process as possible. We needed to find an easy way to deploy our software to our development clusters as needed. The solution was to take advantage of GitHub Actions and build our pipeline through there. I wrote some workflows using [slash-command-dispatch](https://github.com/peter-evans/slash-command-dispatch) to handle deployment through `/dispatch` commands posted in our issues and pull requests. I also wrote workflows to automatically deploy when we merged into our `staging` branch.

- **React Hooks**. I went even deeper into React Hooks last year and set up our own [hooks library](https://github.com/dictyBase/dicty-hooks). Most noteworthy are the hooks `useVirtualList` (for handling window virtualization) and `useIntersectionObserver` (for handling infinite scroll). I also finished converting our frontend apps to use the `Context/useReducer` model for handling global state.

- **Developer Documentation**. As we began to focus heavily on deployment and automation last year, it was clear we needed somewhere to store all of our documentation about the process. This was a good excuse to play around with [Gatsby](https://www.gatsbyjs.com/). I kind of have mixed feelings about Gatsby overall but it was pretty simple to build a decent-looking site right away. Ultimately I settled on the [smooth-doc](https://smooth-doc.com/) theme for our layout and added plugins as necessary (which was also very easy to do).

- **Real user beta testing**. When we finished the deployment process and moved our software to staging, we finally had some real users test out our work. Although we weren't actively promoting it at the time, several users began submitting orders through the new Stock Center site. I have to admit that it was pretty satisfying to see all of our hard work come to fruition.

I also wrote a bunch of one-off scripts, including our own custom GitHub Actions, a script to convert Draft.js to Slate.js content and a script to download and store some gene mappings into our cache. I beefed up our unit tests, finished converting our frontend apps to use TypeScript and GraphQL, and built some presentations to demonstrate my work.

### Side projects

- **freeCodeCamp APIs and Microservices Certification**. I was looking at [freeCodeCamp](https://www.freecodecamp.org/) early in the year and noticed I was only one project away from getting their APIs and Microservices certificate, so I finished it (an [exercise-tracker](https://github.com/wildlifehexagon/exercise-tracker)). When I was teaching myself how to code (back in 2016-17), I relied heavily on freeCodeCamp and earned one of their older certificates before getting a job. Since then they have added a bunch of new certificates so it was interesting to see how close I was to getting some of them based on my past work alone. I'm glad to see FCC is still around and helping thousands of people learn how to code.

- **New business site for my wife**. My wife's event planning business was hit hard by the pandemic so as a way to breathe some life into it, she started a new project built around "micro weddings". She needed a website built quickly for it so I whipped up a Gatsby site with Bulma for the styling. It was a fun little project, especially since I got to learn Bulma (new to me).

I'm also working on a really big project that I'm building from the ground up, entirely with my own ideas. I'm using it to work with tech I wouldn't otherwise use in my day-to-day job, such as Next.js, PostgreSQL and Python. I'm having a lot of fun with it.

### Summary

Overall, it was a productive year of coding even though everything else was a big ol' dumpster fire. So far 2021 is already looking much better. My goals for this year are to continue learning, improve my problem solving techniques, focus more on UI and also get a working demo for my side project. Oh, and hopefully take an actual vacation once things open up!
