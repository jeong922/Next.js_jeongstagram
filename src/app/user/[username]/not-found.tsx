'use client';

import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  return (
    <div className='flex flex-col items-center justify-center w-full p-3'>
      <p className='w-full mt-40 text-xl text-center'>
        사용자를 찾을 수 없습니다.
      </p>
      <div className='flex flex-col mt-10 sm:flex-row'>
        <button
          className='p-2 mr-0 text-white sm:mr-4 bg-sky-400 hover:bg-sky-500'
          onClick={() => router.back()}
        >
          이전 페이지로 돌아가기
        </button>
        <button
          className='p-2 mt-2 text-white bg-sky-400 hover:bg-sky-500 sm:mt-0'
          onClick={() => router.push('/')}
        >
          홈으로 가기
        </button>
      </div>
    </div>
  );
}
