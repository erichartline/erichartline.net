import Link from "next/link"

type Props = {
  posts: Array<{
    slug: string
    frontmatter: {
      title: string
    }
  }>
}

const BlogPosts = ({ posts }: Props) => {
  return (
    <div>
      {!posts && <div>No posts!</div>}
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

export default BlogPosts
