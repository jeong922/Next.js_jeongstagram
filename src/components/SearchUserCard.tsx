import { ProfileUser } from '@/model/user';
import Avatar from './Avatar';
import Link from 'next/link';

type Props = {
  user: ProfileUser;
};

export default function SearchUserCard({ user }: Props) {
  const { image, name, username, followers, following } = user;
  return (
    <Link
      href={`/user/${username}`}
      className='flex items-center w-full p-4 mb-2 bg-white border rounded-sm border-neutral-300 hover:bg-neutral-50'
    >
      <Avatar image={image} />
      <div className='ml-2 text-neutral-500'>
        <p className='font-bold leading-4 text-black'>{username}</p>
        <p>{name}</p>
        <p className='text-sm leading-4'>{`${followers} followers ${following} following`}</p>
      </div>
    </Link>
  );
}
