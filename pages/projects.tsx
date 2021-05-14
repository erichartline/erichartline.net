import Layout from "@components/Layout"
import PageHeader from "@components/PageHeader"
import ProjectItem from "@components/ProjectItem"

const professional = [
  {
    icon: "react",
    title: "Dicty Stock Center",
    description:
      "Full-featured shopping web application. Catalog pages were built using custom hooks for list virtualization and infinite scrolling. I also designed and implemented dynamic product pages, built a form with a streamlined ordering process and set up page editing capabilities for authorized users. The entire app is backed up by unit tests and Cypress end-to-end testing.",
    tools:
      "Apollo Client, Material-UI, Slatejs, Formik, Cypress, TypeScript, React Styleguidist",
    link: "https://github.com/dictyBase/dicty-stock-center",
  },
  {
    icon: "react",
    title: "dictyBase Homepage",
    description:
      "Web app to display main dictyBase content. This includes the homepage, information pages, widgets and downloads. The main feature is HTML5 page editing, as it uses a page editor I built using Slatejs. Authorized users are able to add and edit pages for any desired routes.",
    tools:
      "Apollo Client, Material-UI, Slatejs, TypeScript, React Styleguidist",
    link: "https://github.com/dictyBase/dicty-frontpage",
  },
  {
    icon: "react",
    title: "Gene Page",
    description:
      "Web app to display genomic information. This has a tab-based display where each tab contains panels that display unique information about genes and their annotations.",
    tools: "Apollo Client, Material-UI, TypeScript",
    link: "https://github.com/dictyBase/genomepage",
  },
  {
    icon: "react",
    title: "dicty-hooks",
    description:
      "Collection of React hooks used throughout dictyBase web applications. I wrote custom hooks for infinite scrolling, list virtualization, fetching data and for fetching refresh tokens.",
    link: "https://github.com/dictyBase/dicty-hooks",
  },
  {
    icon: "react",
    title: "Page Editor",
    description:
      "Reusable page editor built with Slatejs. It has full functionality, including basic markup, links, images, video embeds, lists, font color/size/family selections and tables. It can also convert pasted HTML directly into Slatejs content.",
    link: "https://github.com/dictyBase/dicty-components-page-editor",
  },
  {
    icon: "go",
    title: "GraphQL Server",
    description:
      "GraphQL server built using gqlgen. This is connected to several microservices with Redis caching and authorization middleware.",
    tools: "gqlgen, Redis",
    link: "https://github.com/dictyBase/graphql-server",
  },
  {
    icon: "go",
    title: "Authorization Server",
    description:
      "gRPC service that acts as an authorization server for generating and validating JWTs.",
    tools: "gRPC, Protocol Buffer, Redis",
    link: "https://github.com/dictyBase/modware-auth",
  },
]

const side = [
  {
    icon: "react",
    title: "Personal Website",
    description:
      "The very website you are reading right now. I wanted to create a simple but fun website to host my content. Next.js and Tailwind CSS had both caught my interest so this gave me a good reason to experiment with both.",
    link: "https://github.com/wildlifehexagon/nextjs-portfolio",
  },
  {
    icon: "nodejs",
    title: "World Cup 2018 CLI",
    description:
      "Node.js command line app for World Cup 2018 results and standings. I did this over a weekend to gain more experience building CLIs.",
    link: "https://github.com/wildlifehexagon/node-world-cup",
  },
]

const Projects = () => {
  return (
    <Layout pageTitle="Projects - Eric Hartline">
      <PageHeader
        title="Projects"
        subtitle="Select projects I've worked on in the last few years."
      />
      <h2 className="text-3xl mb-3 text-gray-600">Professional</h2>
      <hr className="border-0 bg-gray-400 h-px" />
      <section className="text-gray-600 body-font">
        <div className="container py-8 mx-auto">
          {professional.map((item, index) => (
            <ProjectItem key={item.title} project={item} index={index} />
          ))}{" "}
        </div>
      </section>
      <h2 className="text-3xl mb-3 text-gray-600">Side Projects</h2>
      <hr className="border-0 bg-gray-400 h-px" />
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
