import Head from "next/head"
import Layout from "../components/Layout"

const Home = () => {
  return (
    <Layout>
      <div>
        <h1 className="text-4xl">Hi, I'm Eric.</h1>
        <p className="my-4">
          I’m a web developer currently located in Chicago, IL.
        </p>
      </div>
    </Layout>
  )
}

export default Home
