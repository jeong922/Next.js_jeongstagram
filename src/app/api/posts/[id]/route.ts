import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getPost } from '@/service/posts';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

type Context = {
  params: { id: string };
};

export async function GET(request: NextRequest, context: Context) {
  const sesstion = await getServerSession(authOptions);
  const user = sesstion?.user;

  if (!user) {
    return new Response('Authentication error', { status: 401 });
  }

  return getPost(context.params.id).then((data) => NextResponse.json(data));
}
