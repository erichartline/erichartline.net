import Header from "../components/Header"
import Footer from "../components/Footer"

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
