import React, { createContext, useState, useEffect, useContext } from "react";
import { Video } from "../../../models";
import { fetchVideos } from "./videoList.service";

type ContextValueProps = {
  videos: Video[];
  loading: boolean;
  error: string | null;
  getVideoById: (vidoeId: string) => Video | undefined;
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
  }, []);

  const getVideoById = (videoId: string) => {
    const video = videos.find((v) => v.id === videoId);
    if (video) {
      return video;
    }
    setError(`Video is not available`);
  };

  return (
    <VideoListContext.Provider value={{ videos, loading, error, getVideoById }}>
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
