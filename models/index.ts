export type Video = {
  id: string;
  createdAt: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  duration: number;
  user: User;
  views: number;
  tags: string[];
  likes: number;
  dislikes: number;
};

export type User = {
  readonly id?: string;
  readonly image: string;
  readonly name: string;
  readonly subscribers?: number;
};
