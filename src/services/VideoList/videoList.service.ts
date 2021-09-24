import data from "../../../assets/data/videos.json";
import { Video } from "../../../models";
import { delayResolve } from "../../utils";
const videos = data as unknown as Video[];

export const fetchVideos = async () => {
  return delayResolve(videos, 500);
};
