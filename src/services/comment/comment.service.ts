import { delayResolve } from "../../utils";
import commentData from "../../../assets/data/comments.json";
import { Comment } from "../../../models";

const comments = commentData as unknown as Comment[];

export const fetchComments = (videoId: string) => {
  return delayResolve(comments, 500);
};
