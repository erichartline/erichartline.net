import { Metadata } from "next"
import ReactMarkdown from "react-markdown"
import { getPostBySlug, getSortedPostsData } from "@/lib/blogPosts"

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: "Post Not Found",
    }
  }
  
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  }
}

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: Props) {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return <div>Post not found</div>
  }
  
  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold mb-4">{post.frontmatter.title}</h1>
      <div className="mb-4">
        <span className="text-red-600 dark:text-red-400 font-semibold">
          {post.frontmatter.category.toUpperCase()}
        </span>
        <span className="mx-2">•</span>
        <span className="text-gray-500 dark:text-gray-400">{post.frontmatter.date}</span>
      </div>
      <ReactMarkdown>{post.markdownBody}</ReactMarkdown>
    </article>
  )
}