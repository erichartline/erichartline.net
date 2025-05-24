import Image from "next/image"
import matter from "gray-matter"
import BlogPostList from "@/components/BlogPostList"

async function getPosts() {
  const fs = require('fs');
  const path = require('path');
  
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  
  const posts = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    const slug = filename.replace(/\.md$/, '');
    const document = matter(fileContents);
    
    return {
      frontmatter: document.data,
      markdownBody: document.content,
      slug,
    };
  });
  
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  
  return (
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
  )
}