import Head from "next/head"
import Layout from "../components/Layout"

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About - Eric Hartline</title>
      </Head>
      <div>
        <h1 className="text-4xl">About Me</h1>
        <div>
          <p className="my-4">
            I started my professional career primarily as a front end developer,
            but lately I have been working with the full stack (currently React
            on the front end, Go on the back end). I love building and learning
            new things, and I am constantly seeking to improve my skills and
            become a better programmer.
          </p>
          <h2 className="my-4 text-2xl">Current Skills</h2>
          <p>xyz</p>
          <h2 className="my-4 text-2xl">Other Interests</h2>
          <p>xyz</p>
        </div>
      </div>
    </Layout>
  )
}

export default About
