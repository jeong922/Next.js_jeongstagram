export type Comment = {
  comment: string;
  username: string;
  image: string;
};

// Omit : 원하는 타입 빼기
export type SimplePost = Omit<FullPost, 'comments'> & {
  comment: number;
};

export type FullPost = {
  id: string;
  username: string;
  userImage: string;
  image: string;
  likes: string[];
  text: string;
  comments: Comment[];
  createdAt: string;
};
