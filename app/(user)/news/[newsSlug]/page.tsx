import useSWR, { mutate } from 'swr';
import { useState } from 'react';

const fetcher = (url: string) => fetch(url).then(res => res.json());

interface Post {
  id: number;
  title: string;
  content: string | null;
  published: boolean;
  createdAt: string;
}

export default function Home() {
  const { data, error } = useSWR<Post[]>('/api/posts', fetcher);

  const [newPost, setNewPost] = useState({ title: '', content: '', published: false });

  const addPost = async () => {
    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      mutate('/api/posts');
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  if (error) return <div>Failed to load posts</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>{post.published ? 'Published' : 'Not Published'}</p>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          value={newPost.content || ''}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        <label>
          Published:
          <input
            type="checkbox"
            checked={newPost.published}
            onChange={(e) => setNewPost({ ...newPost, published: e.target.checked })}
          />
        </label>
        <button onClick={addPost}>Add Post</button>
      </div>
    </div>
  );
}