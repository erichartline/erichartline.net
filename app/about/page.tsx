import PageHeader from "@/components/PageHeader"

export const metadata = {
  title: "About - Eric Hartline",
}

export default function About() {
  return (
    <div className="text-gray-800 dark:text-gray-200">
      <PageHeader
        title="About Me"
        subtitle="I'm Eric Hartline, web developer and fan of all things tech."
      />
      <div>
        <h2 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">My Background</h2>
        <hr className="border-0 bg-gray-400 dark:bg-gray-600 h-px" />
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
            className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
            href="https://books.google.com/books/about/Teach_Yourself_QBasic_in_21_Days.html?id=k4WFaB6AtBYC">
            Teach Yourself QBasic in 21 Days
          </a>
          . I wrote a few small programs, one of which was a Mad Libs game
          (rather amazingly, I found a{" "}
          <a
            className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
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
          <a
            className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
            href="https://www.freecodecamp.org/">
            freeCodeCamp
          </a>{" "}
          and started working my way through its curriculum. I also joined the{" "}
          <a
            className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
            href="https://chingu.io/">
            Chingu
          </a>{" "}
          dev community and worked on a couple of team projects to get some
          hands-on coding experience. Shortly after, I was brought on as a
          temporary web developer at Northwestern University before being
          hired full-time as an associate developer just three months later.
        </p>
        <p className="my-4">
          Currently, I am working at Hireology as a front end software
          engineer.
        </p>
        <h2 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">Tech Skills</h2>
        <hr className="border-0 bg-gray-400 dark:bg-gray-600 h-px" />
        <p className="my-4">
          <em>React, GraphQL, Go, Node.js, Docker, Kubernetes</em>
        </p>
        <h2 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">Other Interests</h2>
        <hr className="border-0 bg-gray-400 dark:bg-gray-600 h-px" />
        <p className="my-4">
          <em>Music, movies, video games, sports, traveling</em>
        </p>
      </div>
    </div>
  )
}
