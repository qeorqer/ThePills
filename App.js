import "./i18next";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useState } from "react";
import { Provider } from "react-redux";
import { PortalProvider } from "@gorhom/portal";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import MainNavigator from "@navigation/MainNavigator";
import { store } from "@store/index";
import "./i18next";

const fetchFonts = () => {
  return Font.loadAsync({
      "henny-penny-regular": require("@fonts/HennyPenny-Regular.ttf"),
      "oswald-regular": require("@fonts/Oswald-Regular.ttf"),
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
      <PortalProvider>
          <MainNavigator />
          <StatusBar style='auto' />
      </PortalProvider>
    </Provider>
  );
};

export default gestureHandlerRootHOC(App);
