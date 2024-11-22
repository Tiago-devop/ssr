import React from "react";
import Link from "next/link";
import { Post } from "types/Post"
import PostCard from "@/components/PostCard";

interface HomeProps {
  posts: Post[]
}

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts: posts.slice(0,10)
    }
  }
}

const Home: React.FC<HomeProps> = ({ posts }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
      {posts.map(post => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <div className="cursor-pointer">
            <PostCard post={post} />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Home;