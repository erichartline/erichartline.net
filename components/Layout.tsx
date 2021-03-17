import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import React from "react"

type Props = {
  children: React.ReactNode
  pageTitle?: string
}

const Layout = ({
  children,
  pageTitle = "Eric Hartline - Web Developer",
}: Props) => {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <div className="container w-3/4">
        <Header />
        <main className="p-5">{children}</main>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Layout
