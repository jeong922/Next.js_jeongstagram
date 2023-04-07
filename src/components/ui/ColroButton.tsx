type Props = {
  text: string;
  onClick: () => void;
  size: 'small' | 'big';
};

export default function ColroButton({ text, onClick, size = 'small' }: Props) {
  return (
    <div
      className={`rounded-md bg-gradient-to-bl from-blue-600 via-purple-500 to-rose-300 ${
        size === 'big' ? 'p-[0.3rem]' : 'p-[0.15rem]'
      }`}
    >
      <button
        onClick={onClick}
        className={`bg-white rounded-md hover:opacity-90 transition-opacity ${
          size === 'big' ? 'p-4 text-2xl' : 'p-[0.3rem] text-base'
        }`}
      >
        {text}
      </button>
    </div>
  );
}
