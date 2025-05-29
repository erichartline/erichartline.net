"use client"

import Link from "next/link"
import { Post } from "../types/blog"

type Props = {
  posts: Post[]
}

const BlogPostList = ({ posts }: Props) => {
  return (
    <section className="text-gray-600 dark:text-gray-300 body-font overflow-hidden">
      <ul>
        {posts.map((post) => {
          const { frontmatter } = post

          return (
            <li key={post.slug}>
              <div className="py-4">
                {/* add borders between stacked children */}
                <div className="-my-8 divide-y-2 divide-gray-100 dark:divide-gray-800">
                  <div className="py-8 flex flex-wrap md:flex-nowrap transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 p-4 rounded-lg">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <span className="font-semibold title-font text-red-600 dark:text-red-400 px-2 py-1 rounded bg-red-100 dark:bg-red-900 inline-block w-fit">
                        {frontmatter.category.toUpperCase()}
                      </span>
                      <span className="mt-3 text-gray-500 dark:text-gray-400 text-sm">
                        {frontmatter.date}
                      </span>
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-gray-900 dark:text-white title-font mb-3 transition-colors duration-300 hover:text-red-600 dark:hover:text-red-400">
                        <Link href={`/blog/${post.slug}`} className="hover:no-underline">
                          {frontmatter.title}
                        </Link>
                      </h2>
                      <p className="leading-relaxed text-gray-600 dark:text-gray-300 mb-4">
                        {frontmatter.description}
                      </p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 inline-flex items-center mt-2 font-medium transition-transform duration-300 hover:translate-x-1"
                      >
                        Read &rarr;
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
