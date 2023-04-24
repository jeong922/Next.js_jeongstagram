import { BsBookmarkFill } from 'react-icons/bs';

type Props = {
  className?: string;
};

export default function BookmarkFillIcon({ className }: Props) {
  return <BsBookmarkFill className={className || 'w-6 h-6'} />;
}
