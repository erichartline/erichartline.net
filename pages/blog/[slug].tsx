import React from "react"
import Link from "next/link"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import Layout from "@components/Layout"
import getSlugs from "@lib/getSlugs"
import { GetStaticProps, GetStaticPaths } from "next"
import { Frontmatter } from "../../types/blog"

type Props = {
  /** Page title for SEO purposes */
  siteTitle: string
  /** Frontmatter found in markdown documents */
  frontmatter?: Frontmatter
  /** Content of markdown files */
  markdownBody: string
}

const BlogPost = ({ siteTitle, frontmatter, markdownBody }: Props) => {
  if (!frontmatter) return <React.Fragment />

  const { title, date } = frontmatter

  return (
    <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
      <Link href="/">
        <a>Back to post list</a>
      </Link>
      <article>
        <h1>{title}</h1>
        <p>{date}</p>
        <div>
          <ReactMarkdown source={markdownBody} />
        </div>
      </article>
    </Layout>
  )
}

// get markdown file matching slug and return its data as props
const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params

  const content = await import(`../../posts/${slug}.md`)
  const data = matter(content.default)

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}

// get list of paths to render to HTML at build time
const getStaticPaths: GetStaticPaths = async () => {
  // get list of slugs for markdown posts
  const blogSlugs = ((context) => {
    return getSlugs(context)
  })(require.context("../../posts", true, /\.md$/))

  const paths = blogSlugs.map((slug: string) => `/blog/${slug}`)

  return {
    paths,
    fallback: false, // returns 404 page if path not found
  }
}

export { getStaticProps, getStaticPaths }
export default BlogPost
