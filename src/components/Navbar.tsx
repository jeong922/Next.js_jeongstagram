'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import HomeIcon from './ui/icons/HomeIcon';
import HomeFillIcon from './ui/icons/HomeFillIcon';
import SearchIcon from './ui/icons/SearchIcon';
import SearchFillIcon from './ui/icons/SearchFillIcon';
import NewIcon from './ui/icons/NewIcon';
import NewFillIcon from './ui/icons/NewFillIcon';
import ColroButton from './ui/ColroButton';
import { useSession, signIn, signOut } from 'next-auth/react';
import { dancingScript } from './ui/font/font';

const menu = [
  {
    herf: '/',
    icon: <HomeIcon />,
    clickedIcon: <HomeFillIcon />,
  },
  {
    herf: '/search',
    icon: <SearchIcon />,
    clickedIcon: <SearchFillIcon />,
  },
  {
    herf: '/new',
    icon: <NewIcon />,
    clickedIcon: <NewFillIcon />,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <div className='flex items-center justify-between px-6'>
      <Link href='/' className='text-3xl font-bold'>
        <h1 className={dancingScript.className}>Jeongstagram</h1>
      </Link>
      <nav>
        <ul className='flex items-center gap-4 p-4'>
          {menu.map((item) => (
            <li key={item.herf}>
              <Link href={item.herf}>
                {pathname === item.herf ? item.clickedIcon : item.icon}
              </Link>
            </li>
          ))}
          {session ? (
            <ColroButton
              text='Sign out'
              onClick={() => signOut()}
              size='small'
            />
          ) : (
            <ColroButton text='Sign in' onClick={() => signIn()} size='small' />
          )}
        </ul>
      </nav>
    </div>
  );
}
