'use client';
import { SearchUser } from '@/model/user';
import { FormEvent, useState } from 'react';
import { FadeLoader } from 'react-spinners';
import useSWR from 'swr';
import useDebounce from '@/hook/useDebounce';
import UserSearchCard from './UserSearchCard';
import FadeSpinner from './ui/FadeSpinner';

export default function UserSearch() {
  const [keyword, setKeyword] = useState('');
  const debouncedKeyword = useDebounce(keyword);
  const {
    data: users,
    isLoading: loading,
    error,
  } = useSWR<SearchUser[]>(`/api/search/${debouncedKeyword}`);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <section className='flex flex-col items-center w-full max-w-2xl mx-auto my-4'>
      <form onSubmit={onSubmit} className='w-full mb-4'>
        <input
          className='w-full p-2 text-xl border border-gray-400 outline-none'
          type='text'
          autoFocus
          placeholder='Search for a username or name'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
      {error && <p>❗❗무언가 잘못 되었음.</p>}
      {loading && (
        <div className='flex justify-center w-full mt-32'>
          <FadeSpinner />
        </div>
      )}
      {!loading && !error && users?.length === 0 && (
        <p>일치하는 사용자가 없습니다.</p>
      )}
      <ul className='w-full p-4'>
        {users &&
          users.map((user) => (
            <li key={user.username}>
              <UserSearchCard user={user} />
            </li>
          ))}
      </ul>
    </section>
  );
}
