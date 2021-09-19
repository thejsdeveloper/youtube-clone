import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

import AppLoading from "expo-app-loading";

import { Navigation } from "./src/infrastructure/Navigation";
import { theme } from "./src/infrastructure/theme";

export default function App() {
  const [robotoLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if (!robotoLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
      <StatusBar />
    </SafeAreaProvider>
  );
}
