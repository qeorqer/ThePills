import MainNavigator from "./src/navigation/MainNavigator";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useState } from "react";
import "./i18next";

const fetchFonts = () => {
  return Font.loadAsync({
      "henny-penny": require("./assets/fonts/HennyPenny-Regular.ttf"),
    },
  );
};

const App = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  if (!isDataLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setIsDataLoaded(true)}
      onError={(err) => console.log(err)}
    />;
  }

  return (
    <>
      <StatusBar style='auto' />
      <MainNavigator />
    </>
  );
};

export default App;
