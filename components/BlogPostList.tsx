import Link from "next/link"
import { Frontmatter } from "../types/blog"

type Props = {
  posts: Array<{
    /** URL slug */
    slug: string
    /** Frontmatter from Markdown file */
    frontmatter: Frontmatter
  }>
}

const BlogPostList = ({ posts }: Props) => {
  return (
    <div>
      <ul>
        {posts &&
          posts.map((post) => {
            return (
              <li key={post.slug}>
                <Link href={{ pathname: `/blog/${post.slug}` }}>
                  <a>{post.frontmatter.title}</a>
                </Link>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default BlogPostList
