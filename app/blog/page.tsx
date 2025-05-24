import { getSortedPostsData } from "@/lib/blogPosts"
import BlogPostList from "@/components/BlogPostList"

export const metadata = {
  title: "Blog",
  description: "Blog posts by Eric Hartline",
}

export default function Blog() {
  const posts = getSortedPostsData()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <BlogPostList posts={posts} />
    </div>
  )
}