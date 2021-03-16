---
title: 'My 2018 Coding Year In Review'
date: '2019-03-17'
category: 'Recap'
tags:
  - 'recap'
  - 'work'
  - 'professional'
description: "2018 was my first full year as a professional web developer. Here's a recap of what it was like."
---

Last year was a major one for me, both personally and professionally. From a personal perspective, my wife and I bought our first house and also found out we are going to be parents for the first time -- our little girl is due to arrive this summer! From a professional perspective, 2018 was my first full year as a salaried web developer. For my first blog post on my new Gatsby-built website, it seemed fitting to look back at my coding year in review.

Initially, I started writing this post by going month-by-month. That proved exhausting and not very fulfilling. Also, who would want to read that much?? So let's go with some fun bullet points instead.

### Cool things I built

- **DictyAccess**, a dashboard application built with React. The idea here was to set up a place where we could display all sorts of data in a visually appealing way (i.e. pie charts, bar graphs, info boxes, etc.). At first, this was just used as a demo to show off what we could do with it, but later I added some real [Circos](http://circos.ca/) graphs -- circular visualizations meant to show a "bird's eye" view of different chromosomes and their genes. This application is still a work in progress, but it has a ton of potential once the back end is 100% ready and loaded.

- **Genomepage**, a React app for displaying genomic information. This was built using Material-UI for styling and Redux for state management. Since the back end wasn't ready, I could only display two of the tabs. One for gene summary information and one for [Gene Ontology](http://geneontology.org/) (GO) annotations, which leads me to...

- **Kubeless serverless functions** using Node.js. These kind of blew my mind. Rather than writing up Helm charts and Dockerfiles in order to deploy into our local Kubernetes cluster, I learned how to write and deploy Kubeless functions instead. This simplified the process a bit, allowing me to whip up some quick back end endpoints for uploading and retrieving genomic data.

- **Full-featured custom rich text editor** using Slate.js. This was a fun project. If a logged in user had editing privileges, they could directly edit any of our pages using my editor. I wrote plugins from scratch for all of its different features, including basic bold/italics/etc., text alignment, images, videos, tables and font families/sizes. Speaking of the login system...

- I wrote a couple of **reusable React libraries** to help streamline our login system throughout our applications. One was for displaying the user login buttons/interface, and the other was for putting all of our reusable Redux content and middleware into one location. I also integrated user roles and permissions into our applications, and wrote a Node.js script for loading user content into the database. We also had some existing libraries that I customized as needed, including a complete overhaul of the header and footer designs.

- I wrote numerous scripts for reading and writing different data, primarily in Node.js but later in Golang as well (more on that later). Some involved uploading files to Minio, others integrated Redis for caching keys and values.

- I wrote a few paragraphs for an [NIH](https://www.nih.gov/) grant. Our organization relies on government funding, and every four years we have to write and submit a grant for review. My first year on the team happened to be a grant renewal year, so that has been a wild experience. I helped write out how we planned to incorporate the aforementioned Slate.js rich text editor into our user interface and described some of its technical details.

That's not even close to everything I built or worked on last year, but those are what stood out to me the most.

### Cool things I learned

Wow, where do I even begin here? Going into this job, I worked almost exclusively in the front end, and I had less than a year's worth of experience with React. Let's put it this way: I had never even heard of Kubernetes or Helm. I had no idea what Docker was. Yet by the end of the year I had set up an entire local Kubernetes cluster with Minikube and written several Dockerfiles and Helm charts.

- So yeah, **DevOps**. I still feel like a noob when it comes to this stuff, but at least I have an understanding of this now. I know enough to be able to deploy applications and Kubeless functions into my cluster and update them as necessary. I can write Dockerfiles and work with the Docker daemon inside Minikube as needed.

- **Golang**. With the pressures of getting our new database ready for grant submission, it was high time for me to learn a new language and help out on the back end. Go was our language of choice, so if I wanted to help out I needed to learn it. This actually might be my favorite thing I started last year, as I feel like understanding another language has helped me become a better developer. I'm obviously not an expert after just a couple months of usage, but I have been able to dig in and write some working code, including the back end database (ArangoDB) integration for our stock ordering system. That was a great feeling, as I have always wanted to be a more well-rounded developer.

- **GraphQL schema**. As our data started getting more and more complex, my supervisor made the decision to start using GraphQL for our new system. I was used as the "guinea pig" of sorts to start writing out schema for our data, and I wrote up a demo Node.js GraphQL server that wrapped our existing REST user API. This was a neat little experiment, and I'm excited about using GraphQL more extensively in 2019, especially on the client side.

- **All sorts of "little" things** necessary for certain applications and scripts. Redis, Minio, Ingress. Lots of cool React libraries like Slate.js, Material-UI, React Styleguidist and Flow. Not to mention getting more experience with Redux, React Router and just React in general.

### Challenges I had

- Like most junior developers (or any developers, I suppose) are familiar with, the dreaded Imposter Syndrome reared its ugly head from time to time. This was especially noticeable in February, the month after I was hired into a full-time salary position. The work grew more difficult -- no longer was I just refactoring existing code, now I needed to start building things myself. I started to wonder, was I really cut out for this? I really didn't want to mess up this opportunity so I spent more time outside of work practicing and building side projects. As I got more experience, I started to feel better.
- The pressure of not knowing whether or not our grant would be renewed. One thing I was hoping to be done with when moving on from freelance work was not having to worry about having my contract(s) renewed -- oops. My work situation is still pretty similar to that, as our jobs aren't guaranteed unless we get government funding. A bit stressful, to say the least.
- Working almost entirely remotely. I'm used to remote work -- that's not an issue itself -- but it's a little more challenging as a junior developer since you can't just go over and talk to your colleague when you need help. Sure, we use Slack and get on voice calls, but those sometimes feel impersonal by comparison. We make it work though.

### Summary

That pretty much covers my first year as a professional web developer! It was exciting, invigorating and a little scary all at once, but totally worth it. I had a fun time recapping it and can't wait to see what 2019 has in store. Until next time...