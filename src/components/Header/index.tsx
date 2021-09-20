import React from "react";
import { View, Text, Image } from "react-native";

import { styled } from "../../infrastructure/theme/styled-component";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import logo from ".././../../assets/images/logo.png";
import { SafeAreaViewContainer } from "../SafeAreaView";

const HeaderContainer = styled.View`
  margin: 10px;
  padding: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const IconContainer = styled.View`
  flex-direction: row;
  width: 150px;
  justify-content: space-between;
`;

export const Header = () => {
  return (
    <SafeAreaViewContainer>
      <HeaderContainer>
        <Image
          resizeMode="contain"
          style={{ width: 100, height: 25 }}
          source={logo}
        />
        <IconContainer>
          <Feather name="cast" size={24} color="white" />
          <AntDesign name="bells" size={24} color="white" />
          <AntDesign name="search1" size={24} color="white" />
          <FontAwesome name="user-circle-o" size={24} color="white" />
        </IconContainer>
      </HeaderContainer>
    </SafeAreaViewContainer>
  );
};
