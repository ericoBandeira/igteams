import React from "react";

import { Groups } from "./src/screens/Groups";
import { ThemeProvider } from "styled-components/native";
import theme from "@theme/index";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  );
}
