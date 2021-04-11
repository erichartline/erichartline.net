import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"
import ProjectIcon from "./ProjectIcon"

type Props = {
  project: {
    icon: string
    title: string
    description: string
    link: string
  }
  index: number
}

const ProjectItem = ({ project, index }: Props) => {
  const evenNumber = index % 2 === 0

  return (
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      {evenNumber && <ProjectIcon icon={project.icon} />}
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
          {project.title}
        </h2>
        <p className="leading-relaxed text-base">{project.description}</p>
        <Link href={project.link}>
          <a className="mt-3 text-green-700 inline-flex items-center">
            View Code <FaArrowRight className="ml-1" />
          </a>
        </Link>
      </div>
      {!evenNumber && <ProjectIcon icon={project.icon} />}
    </div>
  )
}

export default ProjectItem
