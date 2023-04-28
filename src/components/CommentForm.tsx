import { FormEvent, useState } from 'react';
import SmileIcon from './ui/icons/SmileIcon';

type Props = {
  onPostComment: (comment: string) => void;
};

export default function CommentForm({ onPostComment }: Props) {
  const [comment, setComment] = useState('');
  const buttonDisabled = comment.length === 0;
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onPostComment(comment);
    setComment('');
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='flex items-center px-2 bg-white border-t border-neutral-300'
    >
      <SmileIcon />
      <input
        className='w-full p-3 ml-2 border-none outline-none'
        type='text'
        placeholder='Add a comment...'
        required
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        className={`h-full p-3 font-bold bg-white ${
          buttonDisabled ? 'text-sky-300' : 'text-sky-500'
        }`}
        disabled={buttonDisabled}
      >
        Post
      </button>
    </form>
  );
}
