import React from "react";

import { Groups } from "./src/screens/Groups";
import { Loading } from "@components/Loading";

import { ThemeProvider } from "styled-components/native";
import theme from "@theme/index";
import { ActivityIndicator, StatusBar } from "react-native";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}
