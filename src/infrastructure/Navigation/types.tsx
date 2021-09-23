import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type BottomTabParamList = {
  Home: undefined;
  Explore: undefined;
  Create: undefined;
  Subscription: undefined;
  Library: undefined;
};

export type AppBottomTabScreenProps<Screen extends keyof BottomTabParamList> =
  BottomTabScreenProps<BottomTabParamList, Screen>;

export type HomeStackParamList = {
  HomeScreen: undefined;
  VideoScreen: { videoId: string };
};

export type HomeStackNavigationPros<Screen extends keyof HomeStackParamList> =
  NativeStackNavigationProp<HomeStackParamList, Screen>;
