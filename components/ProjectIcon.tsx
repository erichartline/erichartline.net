import { FaReact } from "react-icons/fa"

const ProjectIcon = ({ icon }: { icon: string }) => {
  return (
    <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
      {icon === "react" && <FaReact size="5em" color="#61DAFB" />}
    </div>
  )
}

export default ProjectIcon
