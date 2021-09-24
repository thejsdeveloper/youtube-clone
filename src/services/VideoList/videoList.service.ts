import data from "../../../assets/data/videos.json";
import { Video } from "../../../models";
const videos = data as unknown as Video[];

export const fetchVideos = async () => {
  return Promise.resolve(videos);
};
