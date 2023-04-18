type AvatarSize = 'small' | 'medium' | 'large';

type Props = {
  image?: string | null;
  size?: AvatarSize;
  highlight?: boolean;
};

export default function Avatar({
  image,
  size = 'large',
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

function getContainerStyle(size: AvatarSize, highlight: boolean): string {
  const base = 'rounded-full flex justify-center items-center';
  const highlightStyle = highlight
    ? 'bg-gradient-to-bl from-blue-600 via-purple-500 to-rose-300'
    : '';
  const sizeStyle = getContainerSize(size);
  return `${base} ${highlightStyle} ${sizeStyle}`;
}

function getContainerSize(size: AvatarSize): string {
  switch (size) {
    case 'small':
      return 'w-9 h-9';
    case 'medium':
      return 'w-11 h-11';
    case 'large':
      return 'w-[68px] h-[69px]';
  }
}

function getImageSizeStyle(size: AvatarSize): string {
  switch (size) {
    case 'small':
      return 'w-[34px] h-[34px] p-[0.1rem]';
    case 'medium':
      return 'w-[42px] h-[42px] p-[0.1rem]';
    case 'large':
      return 'w-16 h-16 p-[0.2rem]';
  }
}
