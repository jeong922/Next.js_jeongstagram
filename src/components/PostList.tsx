'use client';
import { SimplePost } from '@/model/post';
import useSWR from 'swr';
import PostListCard from './PostListCard';
import FadeSpinner from './ui/FadeSpinner';

export default function PostList() {
  const { data: posts, isLoading: loading } =
    useSWR<SimplePost[]>('/api/posts');
  return (
    <section>
      {loading && (
        <div className='flex justify-center w-full mt-32'>
          <FadeSpinner />
        </div>
      )}
      {posts && (
        <ul>
          {posts.map((post, index) => (
            <li key={post.id} className='mb-6'>
              <PostListCard post={post} priority={index < 2} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
