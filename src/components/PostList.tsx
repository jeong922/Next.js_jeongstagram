'use client';

import PostListCard from './PostListCard';
import FadeSpinner from './ui/FadeSpinner';
import usePosts from '@/hook/usePosts';

export default function PostList() {
  const { posts, isLoading: loading } = usePosts();
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
