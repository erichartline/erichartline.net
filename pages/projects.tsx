import Head from "next/head"
import Layout from "../components/Layout"
import ProjectItem from "../components/ProjectItem"

const professional = [
  {
    icon: "react",
    title: "Dicty Stock Center",
    description: "Shopping web application",
    link: "#",
  },
  {
    icon: "react",
    title: "Publication UI",
    description: "Web app to display information about publications",
    link: "#",
  },
]

const Projects = () => {
  return (
    <Layout>
      <Head>
        <title>Projects - Eric Hartline</title>
      </Head>
      <h1 className="text-center text-4xl mb-4">Professional Projects</h1>
      <section className="text-gray-600 body-font">
        <div className="container py-8 mx-auto">
          {professional.map((item) => (
            <ProjectItem key={item.title} project={item} />
          ))}{" "}
        </div>
      </section>
    </Layout>
  )
}

export default Projects
