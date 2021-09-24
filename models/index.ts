export type Video = {
  id: string;
  createdAt: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  duration: number;
  user: {
    name: string;
    image: string;
    subscribers: number;
  };
  views: number;
  tags: string[];
  likes: number;
  dislikes: number;
};
