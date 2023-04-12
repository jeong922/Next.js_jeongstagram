type Props = {
  image?: string | null;
  size?: 'small' | 'normal';
  highlight?: boolean;
};

export default function Avatar({
  image,
  size = 'normal',
  highlight = false,
}: Props) {
  return (
    <div className={getContainerStyle(size, highlight)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image ?? undefined}
        alt='user profile'
        className={`bg-white object-cover rounded-full ${getImageSizeStyle(
          size
        )}`}
        referrerPolicy='no-referrer'
      />
    </div>
  );
}

function getContainerStyle(size: string, highlight: boolean): string {
  const base = 'rounded-full flex justify-center items-center';
  const highlightStyle = highlight
    ? 'bg-gradient-to-bl from-blue-600 via-purple-500 to-rose-300'
    : '';
  const sizeStyle = size === 'small' ? 'w-9 h-9' : 'w-[68px] h-[69px]';
  return `${base} ${highlightStyle} ${sizeStyle}`;
}

function getImageSizeStyle(size: string): string {
  return size === 'small'
    ? 'w-[34px] h-[34px] p-[0.1rem]'
    : 'w-16 h-16 p-[0.2rem]';
}
