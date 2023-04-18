'use client';
import { SimplePost } from '@/model/post';
import useSWR from 'swr';
import { FadeLoader } from 'react-spinners';
import PostListCard from './PostListCard';

export default function PostList() {
  const { data: posts, isLoading: loading } =
    useSWR<SimplePost[]>('/api/posts');
  return (
    <section>
      {loading && (
        <div className='flex justify-center mt-32'>
          <FadeLoader color='rgb(79 70 229)' />
        </div>
      )}
      {posts && (
        <ul>
          {posts.map((post) => (
            <li key={post.id} className='mb-6'>
              <PostListCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
