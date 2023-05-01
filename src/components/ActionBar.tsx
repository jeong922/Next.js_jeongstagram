import { parseDate } from '@/util/date';
import BookmarkIcon from './ui/icons/BookmarkIcon';
import LikeIcon from './ui/icons/LikeIcon';
import ToggleButton from './ui/ToggleButton';
import LikeFillIcon from './ui/icons/LikeFillIcon';
import BookmarkFillIcon from './ui/icons/BookmarkFillIcon';
import { Comment, SimplePost } from '@/model/post';
import usePosts from '@/hook/usePosts';
import useMe from '@/hook/useMe';
import CommentForm from './CommentForm';

type Props = {
  post: SimplePost;
  children?: React.ReactNode;
  onComment: (comment: Comment) => void;
  cachekey: string;
};

export default function ActionBar({
  post,
  children,
  onComment,
  cachekey,
}: Props) {
  const { id, likes, createdAt } = post;
  const { user, setBookmark } = useMe();
  const { setLike } = usePosts(cachekey);

  const liked = user ? likes.includes(user.username) : false;
  const bookmarked = user?.bookmarks.includes(id) ?? false;

  const handleLike = (like: boolean) => {
    user && setLike(post, user.username, like);
  };

  const handleBookmark = (bookmark: boolean) => {
    user && setBookmark(id, bookmark);
  };

  const handleComment = (comment: string) => {
    user && onComment({ comment, username: user.username, image: user.image });
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
          onToggle={handleBookmark}
          onIcon={<BookmarkFillIcon />}
          offIcon={<BookmarkIcon />}
        />
      </div>
      <div className='px-4 py-1'>
        <p className='mb-2 text-sm font-bold'>{`${likes?.length ?? 0} ${
          likes?.length > 1 ? 'likes' : 'like'
        }`}</p>
        {children}
        <p className='my-2 text-xs text-neutral-500'>{parseDate(createdAt)}</p>
      </div>
      <CommentForm onPostComment={handleComment} />
    </>
  );
}
