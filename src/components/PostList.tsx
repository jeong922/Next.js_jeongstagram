'use client';
import { SimplePost } from '@/model/post';
import useSWR from 'swr';
import Avatar from './Avatar';

export default function PostList() {
  const { data: posts, isLoading: loading } =
    useSWR<SimplePost[]>('/api/posts');
  return (
    <section>
      <ul>
        {posts &&
          posts.map((post) => (
            <li key={post.id}>
              <div>
                <Avatar image={post.userImage} highlight />
                <span>{post.username}</span>
              </div>
              <div>post 이미지 들어갈 자리</div>
              <div>
                <div>라이크 버튼, 북마크 버튼 들어갈 자리</div>
                <p>{post.likes}</p>
              </div>
              <div>
                <div>
                  <p>{post.username}</p>
                  <p>{post.text}</p>
                </div>
                <p>{post.createdAt}</p>
              </div>
              <form>
                <input type='text' />
                <button>Post</button>
              </form>
            </li>
          ))}
      </ul>
    </section>
  );
}
