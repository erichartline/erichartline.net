import Link from "next/link"
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"

const links = [
  {
    name: "GitHub",
    url: "https://github.com/wildlifehexagon",
    icon: <FaGithub color="#181717" />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/wildlifehexagon",
    icon: <FaTwitter color="#1DA1F2" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/erichartline/",
    icon: <FaLinkedin color="#0A66C2" />,
  },
]

const SocialIcons = () => {
  return (
    <div className="flex flex-row justify-center mt-2">
      {links.map((item) => (
        <Link key={item.name} href={item.url}>
          <a className="mr-2">{item.icon}</a>
        </Link>
      ))}
    </div>
  )
}

export default SocialIcons
