import { ThemeProvider } from "next-themes"
import { Analytics } from "@vercel/analytics/react"
import "tailwindcss/tailwind.css"

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  )
}

export default MyApp
