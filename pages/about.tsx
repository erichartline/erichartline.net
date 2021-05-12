import Head from "next/head"
import Image from "next/image"
import Layout from "@components/Layout"
import PageHeader from "@components/PageHeader"

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About - Eric Hartline</title>
      </Head>
      <div>
        <PageHeader
          title="About Me"
          subtitle="I'm Eric Hartline, web developer and fan of all things tech."
        />
        <div className="pt-1 w-4/5">
          <Image
            src="/images/eric-cropped.jpeg"
            alt="Photo of Eric Hartline"
            width={600}
            height={400}
          />
          <p className="pl-1">
            <em>
              Photo by <a href="https://www.tuanhbui.com/">Tuan H. Bui</a>
            </em>
          </p>
          <p className="my-4">
            I've been working professionally as a web developer since 2017, but
            it was a long and winding road to get to that point. When I was
            younger, we always had a PC in our home. I spent a lot of time
            playing around with MS-DOS, then Windows 3.1, then Windows 95... you
            get the idea. I really enjoyed playing different games, everything
            from Chip's Challenge to Wolfenstein 3D. I started to get curious as
            to how video games were made and ended up buying my first
            programming book --{" "}
            <a
              className="text-red-500"
              href="https://books.google.com/books/about/Teach_Yourself_QBasic_in_21_Days.html?id=k4WFaB6AtBYC">
              Teach Yourself QBasic in 21 Days
            </a>
            . I wrote a few small programs, one of which was a Mad Libs game
            (rather amazingly, I found a{" "}
            <a
              className="text-red-500"
              href="http://www.petesqbsite.com/reviews/misc/madlibs.html">
              copy of my game online
            </a>
            , complete with an accompanying review that tears it to shreds).
          </p>
          <p className="my-4">
            In high school, I started to build websites. Primarily just plain
            HTML/CSS, but I dabbled with PHP to build a music review website. I
            also got a job at the local newspaper as their Webmaster. I was in
            charge of their daily news updates, and I also redesigned their
            website. Everything was trending in the direction of me going to
            college for computer science but in my senior year of high school I
            decided to switch gears. I ended up getting a Bachelor's Degree in
            Music Industry Management instead.
          </p>
          <p className="my-4">
            Fast forward seven years or so. After working various freelance gigs
            post-college, I was getting the web dev itch again. I built some
            Wordpress and static HTML/CSS websites for local businesses, then
            discovered{" "}
            <a className="text-red-500" href="https://www.freecodecamp.org/">
              freeCodeCamp
            </a>{" "}
            and started working my way through its curriculum. I also joined the{" "}
            <a className="text-red-500" href="https://chingu.io/">
              Chingu
            </a>{" "}
            dev community and worked on a couple of team projects to get some
            hands-on coding experience. Shortly after, I was brought on as a
            temporary web developer at Northwestern University before being
            hired full-time as an associate developer just three months later.
          </p>
          <h2 className="mt-4 text-xl">Tech Skills</h2>
          <p>
            <em>React, GraphQL, Go, Node.js, Docker, Kubernetes</em>
          </p>
          <h2 className="mt-4 text-xl">Other Interests</h2>
          <p>
            <em>Music, movies, video games, sports, traveling</em>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
