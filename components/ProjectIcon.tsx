import { FaReact } from "react-icons/fa"
import { FaNodeJs } from "react-icons/fa"
import GoIcon from "./GoIcon"

type Props = {
  icon: string
  color: string
}

const ProjectIcon = ({ icon, color }: Props) => {
  return (
    <div
      className={`sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-${color} flex-shrink-0`}>
      {icon === "react" && <FaReact size="5em" color="#61DAFB" />}
      {icon === "go" && <GoIcon color="#7fd5ea" />}
      {icon === "nodejs" && <FaNodeJs size="5em" />}
    </div>
  )
}

export default ProjectIcon
