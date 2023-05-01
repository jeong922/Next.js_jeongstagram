import { SimplePost } from '@/model/post';
import Image from 'next/image';
import { useState } from 'react';
import ModalPotal from './ModalPotal';
import PostModal from './PostModal';
import PostDetail from './PostDetail';
import { signIn, useSession } from 'next-auth/react';

type Props = {
  post: SimplePost;
  priority: boolean;
  cachekey: string;
};

export default function PostGridCard({
  post,
  priority = false,
  cachekey,
}: Props) {
  const { image, username } = post;
  const [openModal, setOpenModal] = useState(false);
  const { data: session } = useSession();
  const handleOpenPost = () => {
    if (!session?.user) {
      return signIn();
    }
    setOpenModal(true);
  };
  return (
    <div className='relative w-full aspect-square'>
      <Image
        className='object-cover cursor-pointer'
        src={image}
        alt={`photo by ${username}`}
        fill
        sizes='650px'
        priority={priority}
        onClick={handleOpenPost}
      />
      {openModal && (
        <ModalPotal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post} cachekey={cachekey} />
          </PostModal>
        </ModalPotal>
      )}
    </div>
  );
}
