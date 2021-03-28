import React from "react"
import Link from "next/link"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import Layout from "../../components/Layout"
import getSlugs from "../../lib/getSlugs"

const BlogPost = ({ siteTitle, frontmatter, markdownBody }) => {
  if (!frontmatter) return <React.Fragment />

  return (
    <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
      <Link href="/">
        <a>Back to post list</a>
      </Link>
      <article>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>
        <div>
          <ReactMarkdown source={markdownBody} />
        </div>
      </article>
    </Layout>
  )
}

const getStaticProps = async ({ ...ctx }) => {
  const { slug } = ctx.params

  const content = await import(`../../posts/${slug}.md`)
  const data = matter(content.default)

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}

const getStaticPaths = async () => {
  const blogSlugs = ((context) => {
    return getSlugs(context)
  })(require.context("../../posts", true, /\.md$/))

  const paths = blogSlugs.map((slug: string) => `/blog/${slug}`)

  return {
    paths,
    fallback: false,
  }
}

export { getStaticProps, getStaticPaths }
export default BlogPost
