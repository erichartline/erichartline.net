import Link from "next/link"

const links = [
  {
    name: "GitHub",
    url: "https://github.com/wildlifehexagon",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/wildlifehexagon",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/erichartline/",
  },
]

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font my-4 text-center">
      © {new Date().getFullYear()} Eric Hartline
      <div className="mt-2">
        {links.map((item) => (
          <Link key={item.name} href={item.url}>
            <a className="mr-2">{item.name}</a>
          </Link>
        ))}
      </div>
    </footer>
  )
}

export default Footer
