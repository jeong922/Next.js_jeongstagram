import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getFollowingPostsOf } from '@/service/posts';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function GET() {
  const sesstion = await getServerSession(authOptions);
  const user = sesstion?.user;

  if (!user) {
    return new Response('Authentication error', { status: 401 });
  }

  return getFollowingPostsOf(user.username).then((data) =>
    NextResponse.json(data)
  );
}
