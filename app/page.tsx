import Image from "next/image"
import matter from "gray-matter"
import BlogPostList from "@/components/BlogPostList"
import Divider from "@/components/Divider"

async function getPosts() {
  const fs = require('fs');
  const path = require('path');

  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map(filename => {
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
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="text-gray-800 dark:text-gray-200">
      <div className="flex flex-col md:flex-row mt-8 gap-8 items-center">
        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm <span className="text-red-600 dark:text-red-400">Eric</span>.
          </h1>
          <p className="my-4 text-lg">
            I am a software engineer currently located in Chicago, IL. This is
            my home on the internet.
          </p>
          <p className="my-4 text-lg">
            Pretty much everything you'll find here is related to coding (or
            more specifically, web development). If you want to contact me,
            hit me up on any of the social media links at the bottom of this
            page.
          </p>
        </div>
        <div className="md:w-1/3 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
          <Image
            src="/images/eric-cropped.jpeg"
            alt="Photo of Eric Hartline"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl text-gray-700 dark:text-gray-300 font-semibold hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300">Latest Blog Post</h2>
        <Divider />
        <div className="my-4">
          <BlogPostList posts={posts.slice(-1)} />
        </div>
      </div>
    </div>
  )
}
