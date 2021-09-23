import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeStackParamList } from "./types";
import { HomeScreen } from "../../screens/home";
import { Header } from "../../components/Header";

const HomeStack = createStackNavigator<HomeStackParamList>();

export const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        header: () => <Header />,
      }}
    >
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};
