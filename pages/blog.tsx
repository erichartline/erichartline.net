import Layout from "@components/Layout"
import PageHeader from "@components/PageHeader"
import BlogPostList from "@components/BlogPostList"
import { getSortedPostsData } from "../lib/blogPosts"
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

// get list of blog post data
const getStaticProps = async () => {
  const posts = getSortedPostsData()

  return {
    props: {
      posts,
    },
  }
}

export { getStaticProps }
export default Blog
