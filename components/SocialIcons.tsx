"use client"

import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const links = [
  {
    name: "GitHub",
    url: "https://github.com/erichartline",
    icon: <FaGithub size="1em" className="text-gray-800 dark:text-gray-200" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/erichartline/",
    icon: <FaLinkedin size="1em" className="text-blue-700" />,
  },
]

const SocialIcons = () => {
  return (
    <div className="flex flex-row justify-center mt-2">
      {links.map((item) => (
        <Link key={item.name} href={item.url} className="mr-2">
          {item.icon}
        </Link>
      ))}
    </div>
  )
}

export default SocialIcons
