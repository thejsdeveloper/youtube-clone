import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { colors } from "../../infrastructure/theme/colors";

export const YTLoader = () => {
  return <ActivityIndicator color={colors.ui.secondary} animating={true} />;
};
