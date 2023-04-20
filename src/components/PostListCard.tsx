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

type Props = {
  post: SimplePost;
  priority?: boolean;
};

export default function PostListCard({ post, priority = false }: Props) {
  const { userImage, username, image, createdAt, likes, text } = post;
  const [openModal, setOpenModal] = useState(false);
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
      <ActionBar
        likes={likes}
        username={username}
        text={text}
        createdAt={createdAt}
      />
      <CommentForm />
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
