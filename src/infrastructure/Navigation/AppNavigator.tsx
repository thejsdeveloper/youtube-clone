import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Foundation, Ionicons, MaterialIcons } from "@expo/vector-icons";

import { AppBottomTabScreenProps, BottomTabParamList } from "./types";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../theme/colors";
import { HomeStackNavigator } from "./HomeStack";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export const AppNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: colors.ui.primary,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={() => ({
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <MaterialIcons name="home-filled" size={24} color={color} />
            ) : (
              <MaterialIcons name="home-filled" size={24} color={color} />
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
