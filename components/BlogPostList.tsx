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
  const sortedPosts = posts.sort((a, b) =>
    b.frontmatter.date.localeCompare(a.frontmatter.date),
  )

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <ul>
        {sortedPosts.map((post) => {
          const { frontmatter } = post

          return (
            <li key={post.slug}>
              <div className="py-4">
                {/* add borders between stacked children */}
                <div className="-my-8 divide-y-2 divide-gray-100">
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <span className="font-semibold title-font text-red-600">
                        {frontmatter.category.toUpperCase()}
                      </span>
                      <span className="mt-1 text-gray-500 text-sm">
                        {frontmatter.date}
                      </span>
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                        <Link href={{ pathname: `/blog/${post.slug}` }}>
                          <a>{frontmatter.title}</a>
                        </Link>
                      </h2>
                      <p className="leading-relaxed">
                        {frontmatter.description}
                      </p>
                      <Link href={{ pathname: `/blog/${post.slug}` }}>
                        <a className="text-red-500 hover:text-red-700 inline-flex items-center mt-4">
                          Read &rarr;
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default BlogPostList
