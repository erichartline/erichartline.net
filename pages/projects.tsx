import Layout from "@components/Layout"
import PageHeader from "@components/PageHeader"
import InfoCard from "@components/InfoCard"
import Divider from "@components/Divider"

const professional = [
  {
    badges: [
      "react",
      "graphql",
      "material-ui",
      "slatejs",
      "formik",
      "cypress",
      "typescript",
      "react-styleguidist",
    ],
    description:
      "Full-featured shopping web application. Catalog pages were built using custom hooks for list virtualization and infinite scrolling. I also designed and implemented dynamic product pages, built a form with a streamlined ordering process and set up page editing capabilities for authorized users. The entire app is backed up by unit tests and Cypress end-to-end testing.",
    link: "https://github.com/dictyBase/dicty-stock-center",
    title: "Dicty Stock Center",
  },
  {
    badges: [
      "react",
      "graphql",
      "material-ui",
      "slatejs",
      "typescript",
      "react-styleguidist",
    ],
    description:
      "Web app to display main dictyBase content. This includes the homepage, information pages, widgets and downloads. The main feature is HTML5 page editing, as it uses a page editor I built using Slatejs. Authorized users are able to add and edit pages for any desired routes.",
    link: "https://github.com/dictyBase/dicty-frontpage",
    title: "dictyBase Frontpage",
  },
  {
    badges: ["react", "graphql", "material-ui", "typescript"],
    description:
      "Web app to display genomic information. This has a tab-based display where each tab contains panels that display unique information about genes and their annotations.",
    link: "https://github.com/dictyBase/genomepage",
    title: "Gene Page",
  },
  {
    badges: ["react", "typescript"],
    title: "dicty-hooks",
    description:
      "Collection of React hooks used throughout dictyBase web applications. I wrote custom hooks for infinite scrolling, list virtualization, fetching data and for fetching refresh tokens.",
    link: "https://github.com/dictyBase/dicty-hooks",
  },
  {
    badges: ["slatejs", "typescript"],
    title: "Page Editor",
    description:
      "Reusable page editor built with Slatejs. It has full functionality, including basic markup, links, images, video embeds, lists, font color/size/family selections and tables. It can also convert pasted HTML directly into Slatejs content.",
    link: "https://github.com/dictyBase/dicty-components-page-editor",
  },
  {
    badges: ["go", "graphql", "gqlgen", "redis"],
    title: "GraphQL Server",
    description:
      "GraphQL server built using gqlgen. This is connected to several microservices with Redis caching and authorization middleware.",
    tools: "gqlgen, Redis",
    link: "https://github.com/dictyBase/graphql-server",
  },
  {
    badges: ["go", "grpc", "protocol buffer", "redis"],
    title: "Authorization Server",
    description:
      "gRPC service that acts as an authorization server for generating and validating JWTs.",
    tools: "gRPC, Protocol Buffer, Redis",
    link: "https://github.com/dictyBase/modware-auth",
  },
]

const side = [
  {
    badges: ["nextjs", "tailwind", "typescript"],
    title: "Personal Website",
    description:
      "The very website you are reading right now. I wanted to create a simple but fun website to host my content. Next.js and Tailwind CSS had both caught my interest so this gave me a good reason to experiment with both.",
    link: "https://github.com/wildlifehexagon/erichartline.net",
  },
  {
    badges: ["nodejs"],
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
      <h2 className="text-3xl text-gray-600">Professional</h2>
      <Divider />
      <section className="text-gray-600 body-font mb-10">
        <div className="p-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          {professional.map((item) => (
            <InfoCard
              key={item.title}
              badges={item.badges}
              description={item.description}
              link={item.link}
              title={item.title}
            />
          ))}
        </div>
      </section>
      <h2 className="text-3xl text-gray-600">Side Projects</h2>
      <Divider />
      <section className="text-gray-600 body-font">
        <div className="p-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          {side.map((item) => (
            <InfoCard
              key={item.title}
              badges={item.badges}
              description={item.description}
              link={item.link}
              title={item.title}
            />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Projects
