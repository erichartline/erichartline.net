import Head from "next/head"
import matter from "gray-matter"
import Layout from "@components/Layout"
import BlogPosts from "@components/BlogPosts"

const Blog = ({ posts }) => {
  return (
    <Layout>
      <Head>
        <title>Blog - Eric Hartline</title>
      </Head>
      <BlogPosts posts={posts} />
    </Layout>
  )
}

const getStaticProps = async () => {
  const posts = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3)
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
