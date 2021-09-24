import React, { createContext, useState, useEffect, useContext } from "react";
import { Video, Comment } from "../../../models";
import { fetchComments } from "../comment/comment.service";
import { fetchVideos } from "./videoList.service";

type ContextValueProps = {
  videos: Video[];
  loading: boolean;
  error: string | null;
  getVideoById: (vidoeId: string) => Video | undefined;
  getCommentsByVideoId: (vidoeId: string) => Promise<Comment[]>;
};
const VideoListContext = createContext<ContextValueProps | null>(null);

export const VideoListContextProvider: React.FC = ({ children }) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getVideos = async () => {
      try {
        setLoading(true);
        const data = await fetchVideos();
        setLoading(false);
        setVideos(data);
      } catch (e) {
        setError("Error while fetching videos");
        setLoading(false);
        console.log("Error while fetching videos ->", e);
      }
    };
    getVideos();

    () => {
      setLoading(false);
      setError(null);
      setVideos([]);
    };
  }, []);

  const getVideoById = (videoId: string) => {
    const video = videos.find((v) => v.id === videoId);
    if (video) {
      return video;
    }
    setError(`Video is not available`);
  };

  const getCommentsByVideoId = async (videoId: string) => {
    return fetchComments(videoId);
  };

  return (
    <VideoListContext.Provider
      value={{ videos, loading, error, getVideoById, getCommentsByVideoId }}
    >
      {children}
    </VideoListContext.Provider>
  );
};

export const useVideoListContext = () => {
  const context = useContext(VideoListContext);

  if (context) {
    return context;
  }

  throw new Error(`useVideoListContext is used outside of VideoListContext`);
};
