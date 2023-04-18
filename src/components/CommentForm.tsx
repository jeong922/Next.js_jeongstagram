import SmileIcon from './ui/icons/SmileIcon';

export default function CommentForm() {
  return (
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
  );
}
