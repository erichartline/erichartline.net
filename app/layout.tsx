import React from "react"
import { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { Analytics } from "@vercel/analytics/react"
import Header from "@components/Header"
import Footer from "@components/Footer"
import "tailwindcss/tailwind.css"

export const metadata: Metadata = {
  description: "Frontend developer thoughts from Eric Hartline.",
  title: "Eric Hartline - Frontend Software Engineer",
}

type Props = {
  children: React.ReactNode
  pageTitle?: string
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/favicon.ico" />
      <body>
        <ThemeProvider attribute="class">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <Header />
            <main className="p-5">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
