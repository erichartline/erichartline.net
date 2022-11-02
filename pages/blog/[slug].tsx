import React from "react"
import { GetStaticProps, GetStaticPaths } from "next"
import Link from "next/link"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import Divider from "@components/Divider"
import Layout from "@components/Layout"
import ProgressBar from "@components/ProgressBar"
import getSlugs from "@lib/getSlugs"
import { getReadingTime } from "@lib/getReadingTime"
import { Frontmatter } from "../../types/blog"

type Props = {
  /** Frontmatter found in markdown documents */
  frontmatter?: Frontmatter
  /** Content of markdown files */
  markdownBody: string
}

const BlogPost = ({ frontmatter, markdownBody }: Props) => {
  if (!frontmatter) return <React.Fragment />

  const { title, date } = frontmatter
  const readingTime = getReadingTime(markdownBody)

  return (
    <Layout pageTitle={`${frontmatter.title}`}>
      <ProgressBar />
      <article>
        <h1 className="text-center text-3xl mb-3">{title}</h1>
        <div className="text-center text-lg mb-3">
          <em>{date}</em> · {readingTime} min read
        </div>
        <Divider />
        <div>
          <ReactMarkdown className="prose lg:prose-xl prose-red mx-auto">
            {markdownBody}
          </ReactMarkdown>
        </div>
      </article>
      <div className="text-center mt-2">
        <Link href="/blog" legacyBehavior>
          <a className="text-red-500 hover:text-red-700">
            &larr; Back to post list
          </a>
        </Link>
      </div>
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
