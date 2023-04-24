import React from 'react';
import Avatar from './Avatar';
import { AuthUser } from '@/model/user';

type Props = {
  user: AuthUser;
};

export default function Sidebar({ user: { name, username, image } }: Props) {
  return (
    <>
      <div className='flex items-center'>
        {image && <Avatar image={image} />}
        <div className='ml-4'>
          <p className='font-bold'>{username}</p>
          <p className='text-lg leading-4 text-gray-500'>{name}</p>
        </div>
      </div>
      <p className='mt-8 text-sm text-gray-500'>
        About · Help · Press · API · Language
      </p>
      <p className='mt-8 text-sm font-bold text-gray-500'>{`©Copyright JEONGSTAGRAM from METAL`}</p>
    </>
  );
}
