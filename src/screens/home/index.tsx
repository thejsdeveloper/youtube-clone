import React from "react";
import { View, Text } from "react-native";
import { Container } from "../../components/Container";
import { VideoList } from "./components/VideoList";

export const HomeScreen = () => {
  return (
    <Container>
      <VideoList />
    </Container>
  );
};
