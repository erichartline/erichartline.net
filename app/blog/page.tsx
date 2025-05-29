import { getSortedPostsData } from "@/lib/blogPosts"
import BlogPostList from "@/components/BlogPostList"
import Divider from "@/components/Divider"
import PageHeader from "@/components/PageHeader"


export const metadata = {
  title: "Blog",
  description: "Blog posts by Eric Hartline",
}

export default function Blog() {
  const posts = getSortedPostsData()

  return (
    <div className="text-gray-800 dark:text-gray-200">
      <PageHeader
        title="Blog"
        subtitle="Thoughts, ideas, and experiences from my journey as a software engineer."
      />
      <h2 className="text-3xl text-gray-700 dark:text-gray-300 font-semibold hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300">Latest Posts</h2>
      <Divider />
      <BlogPostList posts={posts} />
    </div>
  )
}
