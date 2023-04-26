'use client';

import Link from 'next/link';
import { BeatLoader } from 'react-spinners';
import Avatar from './Avatar';
import ScrollableBar from './ui/ScrollableBar';
import useMe from '@/hook/useMe';

export default function FollowingBar() {
  const { user, isLoading: loading, error } = useMe();
  const users = user?.following;

  return (
    <section className='flex items-center justify-center w-full p-4 mb-4 min-h-[90px] overflow-x-auto border-b border-neutral-300 relative z-0'>
      {loading ? (
        <BeatLoader size={8} color='rgb(79 70 229)' />
      ) : (
        (!users || users.length === 0) && <p>{`You don't have followings`}</p>
      )}
      {users && users.length > 0 && (
        <ScrollableBar>
          {users.map(({ image, username }) => (
            <Link
              key={username}
              className='flex flex-col items-center w-20'
              href={`/user/${username}`}
            >
              <Avatar image={image} highlight />
              <p className='w-full overflow-hidden text-sm text-center text-ellipsis'>
                {username}
              </p>
            </Link>
          ))}
        </ScrollableBar>
      )}
    </section>
  );
}
