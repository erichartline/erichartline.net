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
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <span className="font-semibold title-font text-red-600 dark:text-red-400">
                        {frontmatter.category.toUpperCase()}
                      </span>
                      <span className="mt-1 text-gray-500 dark:text-gray-400 text-sm">
                        {frontmatter.date}
                      </span>
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-gray-900 dark:text-white title-font mb-2">
                        <Link href={`/blog/${post.slug}`} className="hover:underline">
                          {frontmatter.title}
                        </Link>
                      </h2>
                      <p className="leading-relaxed">
                        {frontmatter.description}
                      </p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 inline-flex items-center mt-4"
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
