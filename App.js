import "./i18next";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useState } from "react";
import { Provider } from "react-redux";

import MainNavigator from "./src/navigation/MainNavigator";
import { store } from "./src/store/index";

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
    <Provider store={store}>
      <StatusBar style='auto' />
      <MainNavigator />
    </Provider>
  );
};

export default App;
