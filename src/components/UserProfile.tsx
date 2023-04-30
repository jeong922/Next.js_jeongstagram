import { ProfileUser } from '@/model/user';
import Avatar from './Avatar';
import FollowButton from './FollowButton';

type Props = {
  user: ProfileUser;
};

export default function UserProfile({ user }: Props) {
  const { username, image, posts, following, followers } = user;
  const info = [
    { title: 'posts', data: posts },
    { title: 'following', data: following },
    { title: 'followers', data: followers },
  ];

  return (
    <section className='flex flex-col items-center justify-center w-full py-12 border-b md:flex-row border-neutral-300'>
      <Avatar image={image} size='xlarge' highlight />
      <div className='md:ml-10 basis-1/3'>
        <div className='flex flex-col items-center md:flex-row'>
          <h1 className='my-2 text-2xl md:mr-8'>{username}</h1>
          <FollowButton user={user} />
        </div>
        <ul className='flex gap-4 my-4'>
          {info.map(({ title, data }, index) => (
            <li key={index}>
              <span className='mr-1 font-bold'>{data}</span>
              {title}
            </li>
          ))}
        </ul>
        <p className='text-xl font-bold text-center md:text-start'>
          {username}
        </p>
      </div>
    </section>
  );
}
