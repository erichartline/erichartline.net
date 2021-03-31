// helper function to get slugs from a list of filenames
const getSlugs = (context: __WebpackModuleApi.RequireContext) => {
  // keys are an array of slugs like './my-post.md'
  const keys = context.keys()
  // remove extraneous parts of string and only return slugs
  return keys.map((key: string) => key.replace(/^.*[\\\/]/, "").slice(0, -3))
}

export default getSlugs
