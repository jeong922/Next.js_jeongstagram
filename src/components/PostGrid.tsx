import PostGridCard from './PostGridCard';
import FadeSpinner from './ui/FadeSpinner';
import usePosts from '@/hook/usePosts';

export default function PostGrid() {
  const { posts, isLoading } = usePosts();

  return (
    <div>
      {isLoading && (
        <div className='flex justify-center w-full mt-32'>
          <FadeSpinner />
        </div>
      )}
      <ul className='grid grid-cols-3 gap-4 px-8 py-4'>
        {posts &&
          posts.map((post, index) => (
            <li key={post.id}>
              <PostGridCard post={post} priority={index < 6} />
            </li>
          ))}
      </ul>
    </div>
  );
}
