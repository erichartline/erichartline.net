import Link from "next/link"

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font my-4 text-center">
      <p className="my-4">© {new Date().getFullYear()} Eric Hartline</p>
    </footer>
  )
}

export default Footer
