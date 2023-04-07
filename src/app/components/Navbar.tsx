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

type Props = {
  font: string;
};

export default function Navbar({ font }: Props) {
  const pathname = usePathname();
  return (
    <div className='flex items-center justify-between px-6'>
      <Link href='/' className='text-3xl font-bold'>
        <h1 className={font}>Jeongstagram</h1>
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
          <ColroButton text='Sign in' onClick={() => {}} />
        </ul>
      </nav>
    </div>
  );
}
