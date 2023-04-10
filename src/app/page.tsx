import FollowingBar from '@/components/FollowingBar';
import PostList from '@/components/PostList';
import Sidebar from '@/components/Sidebar';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Home() {
  // 서버 컴포넌트 일때는 getServerSession으로 사용자 정보를 받아와야 함
  // 클라이언트 컴포넌트 일때는 useSession으로 사용자 정보를 받아와야 함
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    redirect('/auth/signin');
  }

  return (
    <section className='flex flex-col w-full md:flex-row max-w-[850px] p-4 mx-auto'>
      <div className='w-full basis-3/4'>
        <FollowingBar />
        <PostList />
      </div>
      <div className='basis-1/4'>
        <Sidebar user={user} />
      </div>
    </section>
  );
}
