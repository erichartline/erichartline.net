import { useEffect, useState } from "react"

const useReadingProgress = () => {
  const [completion, setCompletion] = useState(0)

  useEffect(() => {
    const updateScrollCompletion = () => {
      // get number of pixels currently scrolled vertically
      const currentProgress = window.scrollY
      // calculate total scroll height available
      const scrollHeight = document.body.scrollHeight - window.innerHeight
      // now calculate percentage of that scroll height currently completed
      if (scrollHeight) {
        setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100)
      }
    }

    window.addEventListener("scroll", updateScrollCompletion)

    return () => {
      window.removeEventListener("scroll", updateScrollCompletion)
    }
  }, [])

  return completion
}

export default useReadingProgress
