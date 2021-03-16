import Head from "next/head"
import Image from "next/image"
import Layout from "../components/Layout"

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About - Eric Hartline</title>
      </Head>
      <div className="mx-16">
        <h1 className="text-4xl">About Me</h1>
        <div className="pt-1">
          <Image
            src="/images/eric-cropped.jpeg"
            alt="Photo of Eric Hartline"
            width={650}
            height={420}
          />
          <p>
            Photo by <a href="https://www.tuanhbui.com/">Tuan H. Bui</a>
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
            <a href="https://books.google.com/books/about/Teach_Yourself_QBasic_in_21_Days.html">
              Teach Yourself QBasic in 21 Days
            </a>
            . I wrote a few small programs, one of which was a Mad Libs game
            (rather amazingly, I found a{" "}
            <a href="http://www.petesqbsite.com/reviews/misc/madlibs.html">
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
            discovered freeCodeCamp and started working my way through its
            curriculum. I also joined the Chingu dev community and worked on a
            couple team projects to get some hands-on coding experience. Shortly
            after, I was brought on as a temporary web developer at Northwestern
            University before being hired full-time as an associate developer
            just three months later.
          </p>
          <h2 className="my-4 text-2xl">Tech Skills</h2>
          <ul className="pl-8 list-disc">
            <li>React</li>
            <li>GraphQL</li>
            <li>Go</li>
            <li>Node.js</li>
            <li>Docker</li>
            <li>Kubernetes</li>
          </ul>
          <h2 className="my-4 text-2xl">Other Interests</h2>
          <ul className="pl-8 list-disc">
            <li>Music</li>
            <li>Movies</li>
            <li>Video Games</li>
            <li>Sports</li>
            <li>Traveling</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default About
