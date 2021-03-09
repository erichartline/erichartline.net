import Header from "../components/Header"
import Footer from "../components/Footer"

type Props = {
  /** Any React children */
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="container w-3/4">
      <Header />
      <main className="p-5">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
