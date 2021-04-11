import Link from "next/link"
import { FaArrowRight, FaReact } from "react-icons/fa"

type Props = {
  project: {
    icon: string
    title: string
    description: string
    link: string
  }
}

const ProjectItem = ({ project }: Props) => {
  return (
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        {project.icon === "react" && <FaReact size="5em" color="#61DAFB" />}
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
          {project.title}
        </h2>
        <p className="leading-relaxed text-base">{project.description}</p>
        <Link href={project.link}>
          <a className="mt-3 text-indigo-500 inline-flex items-center">
            View Code <FaArrowRight className="ml-1" />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default ProjectItem
