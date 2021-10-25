import Image from "next/image"
import matter from "gray-matter"
import Layout from "../components/Layout"
import BlogPostList from "@components/BlogPostList"
import { Post } from "../types/blog"

type Props = {
  /** List of blog post data */
  posts: Post[]
}

const Home = ({ posts }: Props) => {
  return (
    <Layout>
      <div>
        <div className="flex flex-row mt-4">
          <div>
            <h1 className="text-4xl">Hi, I'm Eric.</h1>
            <p className="my-4">
              I am a software engineer currently located in Chicago, IL. This is
              my home on the internet.
            </p>
            <p className="my-4">
              Pretty much everything you'll find here is related to coding (or
              more specifically, web development). If you want to contact me,
              hit me up on any of the social media links at the bottom of this
              page.
            </p>
          </div>
          <div>
            <Image
              src="/images/eric-cropped.jpeg"
              alt="Photo of Eric Hartline"
              width={600}
              height={400}
            />
          </div>
        </div>
        <h2 className="text-3xl text-gray-700 mt-16">Latest Blog Post</h2>
        <div className="my-4">
          <BlogPostList posts={posts.slice(-1)} />
        </div>
      </div>
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

export default Home
