"use client"

import useReadingProgress from "hooks/useReadingProgress"

const ProgressBar = () => {
  const completionPct = useReadingProgress()

  return (
    <div
      id="scroll-progress"
      className="fixed top-0 left-0 z-50 w-full transition-transform translate-x duration-150 h-1 bg-red-400"
      style={{
        transform: `translateX(${completionPct - 100}%)`,
      }}
    />
  )
}

export default ProgressBar
