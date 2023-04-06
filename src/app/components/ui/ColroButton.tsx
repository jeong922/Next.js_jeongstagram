type Props = {
  text: string;
  onClick: () => void;
};

export default function ColroButton({ text, onClick }: Props) {
  return (
    <div className='p-[0.15rem] rounded-md bg-gradient-to-bl from-blue-600 via-purple-500 to-rose-300'>
      <button
        onClick={onClick}
        className='text-base bg-white rounded-sm p-[0.3rem] hover:opacity-90 transition-opacity'
      >
        {text}
      </button>
    </div>
  );
}
