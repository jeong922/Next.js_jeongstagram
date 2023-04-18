import { SimplePost } from '@/model/post';
import Avatar from './Avatar';
import LikeIcon from './ui/icons/LikeIcon';
import BookmarkIcon from './ui/icons/BookmarkIcon';
import Image from 'next/image';
import { parseDate } from '@/util/date';
import SmileIcon from './ui/icons/SmileIcon';

type Props = {
  post: SimplePost;
};

export default function PostListCard({ post }: Props) {
  const { userImage, username, image, createdAt, likes, text } = post;
  return (
    <article>
      <div className='flex items-center p-2'>
        <Avatar image={userImage} size='medium' highlight />
        <span className='ml-2 font-bold text-gray-900'>{username}</span>
      </div>
      <Image
        className='object-cover w-full aspect-square'
        src={image}
        alt={`photo by ${username}`}
        width={500}
        height={500}
      />

      <div className='flex justify-between px-4 my-2'>
        <LikeIcon />
        <BookmarkIcon />
      </div>
      <div className='px-4 py-1'>
        <p className='mb-2 text-sm font-bold'>{`${likes?.length ?? 0} ${
          likes?.length > 1 ? 'likes' : 'like'
        }`}</p>

        <div>
          <span className='mr-1 font-bold'>{username}</span>
          <span>{text}</span>
        </div>
        <p className='my-2 text-xs text-neutral-500'>{parseDate(createdAt)}</p>
      </div>
      <form className='flex items-center px-2 bg-white border-t border-neutral-300'>
        <SmileIcon />
        <input
          className='w-full p-3 ml-2 border-none outline-none'
          type='text'
          placeholder='Add a comment...'
        />
        <button className='h-full p-3 font-bold bg-white text-sky-500'>
          Post
        </button>
      </form>
    </article>
  );
}
