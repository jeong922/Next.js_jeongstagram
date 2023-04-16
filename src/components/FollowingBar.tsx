'use client';
import { DetailUser } from '@/model/user';
import Link from 'next/link';
import { BeatLoader } from 'react-spinners';
import useSWR from 'swr';
import Avatar from './Avatar';
import ScrollableBar from './ui/ScrollableBar';

export default function FollowingBar() {
  const { data, isLoading: loading, error } = useSWR<DetailUser>('/api/me');
  const users = data?.following;
  // const users = undefined;
  // const users = data?.following && [
  //   ...data?.following,
  //   ...data?.following,
  //   ...data?.following,
  // ];
  return (
    <section className='flex items-center justify-center w-full p-4 mb-4 rounded-lg shadow-sm shadow-neutral-300 min-h-[90px] overflow-x-auto'>
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
