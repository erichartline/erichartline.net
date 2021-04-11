import Head from "next/head"
import Layout from "../components/Layout"
import ProjectItem from "../components/ProjectItem"

const professional = [
  {
    icon: "react",
    title: "Dicty Stock Center",
    description: "Shopping web application",
    link: "https://github.com/dictyBase/dicty-stock-center",
  },
  {
    icon: "react",
    title: "Publication Details",
    description: "Web app to display information about publications",
    link: "https://github.com/dictyBase/publication",
  },
  {
    icon: "react",
    title: "dictyBase Homepage",
    description:
      "Web app to display main dictyBase content, including editable pages",
    link: "https://github.com/dictyBase/dicty-frontpage",
  },
  {
    icon: "react",
    title: "Gene Page",
    description: "Web app to display genomic information",
    link: "https://github.com/dictyBase/genomepage",
  },
  {
    icon: "react",
    title: "DictyAccess",
    description: "Data visualization dashboard",
    link: "https://github.com/dictyBase/dictyaccess",
  },
  {
    icon: "react",
    title: "dicty-hooks",
    description:
      "Collection of React hooks used throughout dictyBase web applications",
    link: "https://github.com/dictyBase/dicty-hooks",
  },
  {
    icon: "react",
    title: "Page Editor",
    description: "Reusable page editor built with Slatejs.",
    link: "https://github.com/dictyBase/dicty-components-page-editor",
  },
  {
    icon: "go",
    title: "GraphQL Server",
    description: "GraphQL server built using gqlgen",
    link: "https://github.com/dictyBase/graphql-server",
  },
  {
    icon: "go",
    title: "Authorization Server",
    description: "gRPC service for generating and validating JWTs",
    link: "https://github.com/dictyBase/modware-auth",
  },
]

const side = [
  {
    icon: "react",
    title: "Personal Website",
    description: "The very website you are reading right now.",
    link: "https://github.com/wildlifehexagon/nextjs-portfolio",
  },
  {
    icon: "nodejs",
    title: "World Cup 2018 CLI",
    description:
      "Node.js command line app for World Cup 2018 results and standings.",
    link: "https://github.com/wildlifehexagon/node-world-cup",
  },
]

const Projects = () => {
  return (
    <Layout>
      <Head>
        <title>Projects - Eric Hartline</title>
      </Head>
      <h1 className="text-center text-3xl mb-3">Professional Projects</h1>
      <section className="text-gray-600 body-font">
        <div className="container py-8 mx-auto">
          {professional.map((item, index) => (
            <ProjectItem key={item.title} project={item} index={index} />
          ))}{" "}
        </div>
      </section>
      <h1 className="text-center text-3xl mb-3">Side Projects</h1>
      <section className="text-gray-600 body-font">
        <div className="container py-8 mx-auto">
          {side.map((item, index) => (
            <ProjectItem key={item.title} project={item} index={index} />
          ))}{" "}
        </div>
      </section>
    </Layout>
  )
}

export default Projects
