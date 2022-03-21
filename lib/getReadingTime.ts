export const getReadingTime = (content) => {
  // Medium uses 275 wpm for their general calculation,
  // but I'm going slightly lower based on expected tech content/code/etc
  const wordsPerMinute = 250
  // calculate total number of words in content
  const words = content.trim().split(" ").length

  return Math.ceil(words / wordsPerMinute)
}
