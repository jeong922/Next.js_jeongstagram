'use client';

import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  return (
    <div>
      <p>사용자를 찾을 수 없습니다.</p>
      <button onClick={() => router.back()}>이전 페이지로 돌아가기</button>
    </div>
  );
}
