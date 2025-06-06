"use client"

import SocialIcons from "./SocialIcons"
import NowPlaying from "./NowPlaying"

const Footer = () => {
  return (
    <footer className="text-gray-600 dark:text-gray-300 my-4 text-center text-lg">
      <div>© {new Date().getFullYear()} Eric Hartline</div>
      <SocialIcons />
      <NowPlaying />
    </footer>
  )
}

export default Footer
