import { parseDate } from '@/util/date';
import BookmarkIcon from './ui/icons/BookmarkIcon';
import LikeIcon from './ui/icons/LikeIcon';
import { useState } from 'react';
import ToggleButton from './ui/ToggleButton';
import LikeFillIcon from './ui/icons/LikeFillIcon';
import BookmarkFillIcon from './ui/icons/BookmarkFillIcon';
import { SimplePost } from '@/model/post';
import { useSession } from 'next-auth/react';
import { useSWRConfig } from 'swr';

type Props = {
  post: SimplePost;
};

export default function ActionBar({ post }: Props) {
  const { id, likes, username, text, createdAt } = post;
  const { data: session } = useSession();
  const user = session?.user;
  const liked = user ? likes.includes(user.username) : false;
  const [bookmarked, setBookmarked] = useState(false);
  const { mutate } = useSWRConfig();

  const handleLike = (like: boolean) => {
    fetch('/api/likes', {
      method: 'PUT',
      body: JSON.stringify({ id, like }),
    }).then(() => mutate('/api/posts'));
  };

  return (
    <>
      <div className='flex justify-between px-4 my-2'>
        <ToggleButton
          toggled={liked}
          onToggle={handleLike}
          onIcon={<LikeFillIcon />}
          offIcon={<LikeIcon />}
        />
        <ToggleButton
          toggled={bookmarked}
          onToggle={setBookmarked}
          onIcon={<BookmarkFillIcon />}
          offIcon={<BookmarkIcon />}
        />
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
