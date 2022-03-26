import React from "react";

import MainNavigator from "./src/navigation/MainNavigator";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <MainNavigator />
      <StatusBar />
    </>
  );
}
