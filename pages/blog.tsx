import matter from "gray-matter"
import Layout from "@components/Layout"
import PageHeader from "@components/PageHeader"
import BlogPostList from "@components/BlogPostList"
import { Post } from "../types/blog"

type Props = {
  /** List of blog post data */
  posts: Post[]
}

const Blog = ({ posts }: Props) => {
  return (
    <Layout pageTitle="Blog - Eric Hartline">
      <PageHeader
        title="Blog Posts"
        subtitle="Sporadic writings about my coding endeavors"
      />
      <BlogPostList posts={posts} />
    </Layout>
  )
}

type Value = {
  /** Full markdown file content as a concatenated string */
  default: string
}

// get list of blog post data
const getStaticProps = async () => {
  const posts = ((context) => {
    const keys = context.keys()
    // get list of all blog posts
    const values = keys.map(context) as Value[]

    // get list of slugs and return converted markdown content
    const data = keys.map((key, index) => {
      const slug = key.replace(/^.*[\\\/]/, "").slice(0, -3)
      const value = values[index]

      const document = matter(value.default)

      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })

    return data
  })(require.context("../posts", true, /\.md$/))

  return {
    props: {
      posts,
    },
  }
}

export { getStaticProps }
export default Blog
