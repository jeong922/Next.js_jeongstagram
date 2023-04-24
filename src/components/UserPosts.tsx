'use client';

import { ProfileUser } from '@/model/user';
import { useState } from 'react';

import LikeIcon from './ui/icons/LikeIcon';
import BookmarkIcon from './ui/icons/BookmarkIcon';
import PostIcon from './ui/icons/PostIcon';
import PostGrid from './PostGrid';

type Props = {
  user: ProfileUser;
};

const tabs = [
  { type: 'posts', icon: <PostIcon /> },
  { type: 'saved', icon: <BookmarkIcon className='w-3 h-3' /> },
  { type: 'liked', icon: <LikeIcon className='w-3 h-3' /> },
];

export default function UserPosts({ user: { username } }: Props) {
  const [query, setQuery] = useState(tabs[0].type);

  return (
    <section>
      <ul className='flex justify-center uppercase'>
        {tabs.map(({ type, icon }) => (
          <li
            className={`p-4 mx-12 cursor-pointer border-black ${
              type === query && 'font-bold border-t'
            }`}
            key={type}
            onClick={() => setQuery(type)}
          >
            <button className='scale-150 md:scale-100'>{icon}</button>
            <span className='hidden md:inline'>{type}</span>
          </li>
        ))}
      </ul>
      <PostGrid username={username} query={query} />
    </section>
  );
}