import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

export const ExpandIcon = () => {
  return (
    <View
      style={{
        height: 20,
        width: 20,
      }}
    >
      <View
        style={{
          position: "absolute",
          top: 0,
        }}
      >
        <MaterialIcons name="keyboard-arrow-up" size={15} color="white" />
      </View>
      <View
        style={{
          position: "absolute",
          top: 10,
        }}
      >
        <MaterialIcons name="keyboard-arrow-down" size={15} color="white" />
      </View>
    </View>
  );
};
