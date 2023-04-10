type Props = {
  image?: string | null;
};

export default function Avatar({ image }: Props) {
  return (
    <div className='rounded-full w-9 h-9 bg-gradient-to-bl from-blue-600 via-purple-500 to-rose-300'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image ?? undefined}
        alt='user profile'
        className='rounded-full p-[0.1rem]'
        referrerPolicy='no-referrer'
      />
    </div>
  );
}
