import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { colors } from "../../infrastructure/theme/colors";

export const YTLoader = () => {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {
          backgroundColor: colors.ui.primary,
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
      <ActivityIndicator color={colors.ui.secondary} animating={true} />
    </View>
  );
};
