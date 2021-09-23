import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeStackParamList } from "./types";
import { HomeScreen } from "../../screens/home";
import { Header } from "../../components/Header";
import { VideoScreen } from "../../screens/VideoScreen";

const HomeStack = createStackNavigator<HomeStackParamList>();

export const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        header: () => <Header />,
      }}
    >
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen
        name="VideoScreen"
        component={VideoScreen}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};
