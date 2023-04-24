import { AiFillHeart } from 'react-icons/ai';

type Props = {
  className?: string;
};

export default function LikeFillIcon({ className }: Props) {
  return <AiFillHeart className={className || 'w-7 h-7 text-red-700'} />;
}
