import Link from "next/link"
import { useTheme } from "next-themes"
import { BsMoonFill, BsSunFill } from "react-icons/bs"

const links = [
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/blog",
    text: "Blog",
  },
  {
    url: "/projects",
    text: "Projects",
  },
]

const Header = () => {
  const { theme, setTheme } = useTheme()

  return (
    <header className="text-gray-600 body-font">
      <div className="flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="text-xl">Eric Hartline</span>
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {links.map((link) => (
            <Link key={link.text} href={link.url}>
              <a className="mr-5 hover:text-gray-900 hover:underline decoration-green">
                {link.text}
              </a>
            </Link>
          ))}
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? (
              <BsSunFill size="1em" />
            ) : (
              <BsMoonFill size="1em" />
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
