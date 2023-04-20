import { parseDate } from '@/util/date';
import BookmarkIcon from './ui/icons/BookmarkIcon';
import LikeIcon from './ui/icons/LikeIcon';

type Props = {
  likes: string[];
  username: string;
  text?: string;
  createdAt: string;
};

export default function ActionBar({ likes, username, text, createdAt }: Props) {
  return (
    <>
      <div className='flex justify-between px-4 my-2'>
        <LikeIcon />
        <BookmarkIcon />
      </div>
      <div className='px-4 py-1'>
        {text && (
          <p className='mb-2 text-sm font-bold'>{`${likes?.length ?? 0} ${
            likes?.length > 1 ? 'likes' : 'like'
          }`}</p>
        )}

        <div>
          <span className='mr-1 font-bold'>{username}</span>
          <span>{text}</span>
        </div>
        <p className='my-2 text-xs text-neutral-500'>{parseDate(createdAt)}</p>
      </div>
    </>
  );
}
