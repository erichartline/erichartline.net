type Frontmatter = {
  /** Title of blog post */
  title: string
  /** Date of blog post */
  date: string
  /** Category for blog post */
  category: string
  /** List of tags to display */
  tags: string[]
  /** Description/byline for blog post */
  description: string
}

type Post = {
  /** Frontmatter found in markdown documents */
  frontmatter: Frontmatter
  /** Content of markdown files */
  markdownBody: string
  /** URL slug */
  slug: string
}

export type { Frontmatter, Post }
