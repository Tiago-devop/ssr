import React from 'react';
import { Post } from "types/Post";

interface PostDetailProps {
  post: Post;
}

export async function getServerSideProps({ params }: { params: { id: string }}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const post = await response.json();

  return {
    props: {
      post
    }
  }
}

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
  return (
    <div className='container mx-auto p-4'>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default PostDetail;