import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import DayScreen from "../screens/Day";
import DaysScreen from "../screens/Days";
import ProfileScreen from "../screens/Profile";
import SettingsScreen from "../screens/Settings";

const DaysNavigation = createStackNavigator({
    Days: DaysScreen,
    Day: DayScreen,
  },
  {
    initialRouteName: "Days",
  },
);

const TabNavigator = createBottomTabNavigator({
  Days: DaysNavigation,
  Profile: ProfileScreen,
  Settings: SettingsScreen,
});

export default createAppContainer(TabNavigator);
