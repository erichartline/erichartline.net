import PageHeader from "@/components/PageHeader"
import InfoCard from "@/components/InfoCard"
import Divider from "@/components/Divider"

export const metadata = {
  title: "Projects - Eric Hartline",
}

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
      "Full-featured shopping web application. Catalog pages were built using custom hooks for list virtualization and infinite scrolling. I also designed and implemented dynamic product pages, built a form with a streamlined ordering process and set up page editing capabilities for authorized users. The entire app is backed up by unit tests using React Testing Library and end-to-end testing using Cypress.",
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
      "Collection of custom React hooks used throughout dictyBase web applications. I wrote custom hooks for infinite scrolling, list virtualization, fetching data and for fetching refresh tokens.",
    link: "https://github.com/dictyBase/dicty-hooks",
  },
  {
    badges: ["slatejs", "typescript"],
    title: "Page Editor",
    description:
      "Page editor library built with Slatejs. It has full functionality, including basic markup, links, images, video embeds, lists, font color/size/family selections and tables. It can also convert pasted HTML directly into Slatejs content.",
    link: "https://github.com/dictyBase/dicty-components-page-editor",
  },
  {
    badges: ["go", "graphql", "gqlgen", "redis"],
    title: "GraphQL Server",
    description:
      "GraphQL server connected to several microservices. Includes middleware for user authorization and Redis caching.",
    link: "https://github.com/dictyBase/graphql-server",
  },
  {
    badges: ["go", "grpc", "protocol buffer", "redis"],
    title: "Authorization Server",
    description:
      "gRPC service that acts as an authorization server for generating and validating JWTs.",
    link: "https://github.com/dictyBase/modware-auth",
  },
]

const side = [
  {
    badges: ["nextjs", "tailwind", "typescript"],
    title: "Personal Website",
    description:
      "The very website you are reading right now. This is a place for me to experiment with different technologies and APIs.",
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

const presentations = [
  {
    badges: [
      "mdx-deck",
      "code surfer",
      "react-testing-library",
      "mock service worker",
    ],
    title: "RTL + MSW = !!!",
    description:
      "A presentation about frontend testing that I gave to the Hireology engineering team during their Engineering Talks event.",
    link: "https://github.com/wildlifehexagon/rtl-deck",
  },
]

export default function Projects() {
  return (
    <div className="text-gray-800 dark:text-gray-200">
      <PageHeader
        title="Projects"
        subtitle="Select projects I've worked on in the last few years."
      />
      <h2 className="text-3xl text-gray-700 dark:text-gray-300 font-semibold hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300">Professional</h2>
      <Divider />
      <section className="text-gray-600 dark:text-gray-300 body-font mb-12">
        <div className="p-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
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
      <h2 className="text-3xl text-gray-700 dark:text-gray-300 font-semibold hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300">Side Projects</h2>
      <Divider />
      <section className="text-gray-600 dark:text-gray-300 body-font mb-12">
        <div className="p-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
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
      <h2 className="text-3xl text-gray-700 dark:text-gray-300 font-semibold hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300">Presentations</h2>
      <Divider />
      <section className="text-gray-600 dark:text-gray-300 body-font mb-12">
        <div className="p-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {presentations.map((item) => (
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
    </div>
  )
}
