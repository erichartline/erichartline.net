import Link from "next/link"

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="text-xl">Eric Hartline</span>
          </a>
        </Link>
        {/* move links to left and add socials to end */}
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/blog">
            <a className="mr-5 hover:text-gray-900">Blog</a>
          </Link>
          <Link href="/about">
            <a className="mr-5 hover:text-gray-900">About</a>
          </Link>
          <Link href="/projects">
            <a className="mr-5 hover:text-gray-900">Projects</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
