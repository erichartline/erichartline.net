import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "posts")

export const getSortedPostsData = () => {
  // get filenames under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const data = fileNames.map((fileName) => {
    // remove ".md" from file name to get slug
    const slug = fileName.replace(/\.md$/, "")

    // read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    // use gray-matter to parse the post metadata section
    const document = matter(fileContents)

    // Combine the data with the id
    return {
      slug,
      frontmatter: document.data,
      markdownBody: document.content,
    }
  })
  // Sort posts by date
  return data.sort((a, b) =>
    b.frontmatter.date.localeCompare(a.frontmatter.date),
  )
}
