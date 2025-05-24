import { Analytics } from "@vercel/analytics/react"
import ThemeProviderWrapper from "../components/ThemeProviderWrapper"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "./globals.css"

export const metadata = {
  title: {
    default: "Eric Hartline - Frontend Software Engineer",
    template: "%s | Eric Hartline",
  },
  description: "Frontend Software Engineer",
  icons: {
    shortcut: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProviderWrapper>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <Header />
            <main className="p-5">{children}</main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}
