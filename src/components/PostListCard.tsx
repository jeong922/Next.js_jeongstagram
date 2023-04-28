'use client';

import { SimplePost } from '@/model/post';
import Avatar from './Avatar';
import Image from 'next/image';
import CommentForm from './CommentForm';
import ActionBar from './ActionBar';
import { useState } from 'react';
import ModalPotal from './ModalPotal';
import PostModal from './PostModal';
import PostDetail from './PostDetail';
import PostUserAvatar from './PostUserAvatar';
import usePosts from '@/hook/usePosts';

type Props = {
  post: SimplePost;
  priority?: boolean;
};

export default function PostListCard({ post, priority = false }: Props) {
  const { userImage, username, image, comments, text } = post;
  const [openModal, setOpenModal] = useState(false);
  const { postComment } = usePosts();
  const handlePostComment = (comment: string) => {
    postComment(post, comment);
  };

  return (
    <article className='overflow-hidden rounded-lg shadow-md'>
      <PostUserAvatar image={userImage} username={username} />
      <Image
        className='object-cover w-full cursor-pointer aspect-square'
        src={image}
        alt={`photo by ${username}`}
        width={500}
        height={500}
        priority={priority}
        onClick={() => setOpenModal(true)}
      />
      <ActionBar post={post}>
        <div>
          <span className='mr-1 font-bold'>{username}</span>
          <span>{text}</span>
        </div>

        {comments > 1 && (
          <button
            className='my-2 font-bold text-sky-500'
            onClick={() => setOpenModal(true)}
          >{`View all ${comments} comments`}</button>
        )}
      </ActionBar>
      <CommentForm onPostComment={handlePostComment} />
      {openModal && (
        <ModalPotal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post} />
          </PostModal>
        </ModalPotal>
      )}
    </article>
  );
}
