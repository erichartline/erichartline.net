import Header from "../components/Header"

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>

      <footer>footer!</footer>
    </div>
  )
}

export default Layout
