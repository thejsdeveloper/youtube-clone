import React from "react";
import { Column } from "../../components/Atoms";
import { VideoList } from "./components/VideoList";

export const HomeScreen = () => {
  return (
    <Column background="primary">
      <VideoList />
    </Column>
  );
};
