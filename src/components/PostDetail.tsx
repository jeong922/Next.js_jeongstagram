import { SimplePost } from '@/model/post';
import Image from 'next/image';
import PostUserAvatar from './PostUserAvatar';
import Avatar from './Avatar';
import ActionBar from './ActionBar';
import useFullPost from '@/hook/useFullPost';

type Props = {
  post: SimplePost;
};

export default function PostDetail({ post }: Props) {
  const { id, userImage, username, image } = post;
  const { post: data, postComment } = useFullPost(id);
  const comments = data?.comments;

  return (
    <section className='flex w-full h-full'>
      <div className='relative basis-3/5'>
        <Image
          className='object-cover'
          src={image}
          alt={`photo by ${username}`}
          priority
          fill
          sizes='650px'
        />
      </div>
      <div className='flex flex-col w-full basis-2/5'>
        <PostUserAvatar image={userImage} username={username} />
        <ul className='h-full p-4 mb-1 overflow-y-auto border-t border-gray-200'>
          {comments &&
            comments.map(
              ({ image, username: commentUsername, comment }, index) => (
                <li key={index} className='flex items-center mb-2'>
                  <Avatar
                    image={image}
                    size='small'
                    highlight={commentUsername === username}
                  />
                  <div className='ml-2'>
                    <span className='mr-1 font-bold'>{commentUsername}</span>
                    <span>{comment}</span>
                  </div>
                </li>
              )
            )}
        </ul>
        <ActionBar post={post} onComment={postComment} />
      </div>
    </section>
  );
}
