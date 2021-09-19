import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Foundation, Ionicons } from "@expo/vector-icons";

import TabOneScreen from "../../../screens/TabOneScreen";
import { AppBottomTabScreenProps, BottomTabParamList } from "../../../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export const AppNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={TabOneScreen}
        options={({ navigation }: AppBottomTabScreenProps<"Home">) => ({
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color={color} />
          ),
        })}
      />

      <BottomTab.Screen
        name="Explore"
        component={TabOneScreen}
        options={({ navigation }: AppBottomTabScreenProps<"Explore">) => ({
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <Ionicons name="compass-outline" size={24} color={color} />
          ),
        })}
      />
    </BottomTab.Navigator>
  );
};
