import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import DayScreen from "../screens/Day";
import DaysScreen from "../screens/Days";
import ProfileScreen from "../screens/Profile";
import SettingsScreen from "../screens/Settings";
import { $background, $black } from "../shared/colors";
import SettingsIcon from "../../assets/icons/settings.svg";
import ProfileIcon from "../../assets/icons/profile.svg";
import DaysIcon from "../../assets/icons/days.svg";

const DaysNavigation = createStackNavigator({
    Days: DaysScreen,
    Day: DayScreen,
  },
  {
    initialRouteName: "Days",
  },
);

const TabNavigator = createBottomTabNavigator({
      Days: {
        screen: DaysNavigation,
        navigationOptions: {},
      },
      Profile: ProfileScreen,
      Settings: SettingsScreen,
    },
    {
      tabBarOptions: {
        style: {
          backgroundColor: $background,
          borderTopColor: $black,
          paddingVertical: 5,
          justifyContent: "center",
        },
        showLabel: false,
      },
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          switch (navigation.state.routeName) {
            default:
            case "Days":
              return <DaysIcon width={30} height={30} style={!focused && { opacity: 0.5 }} />;
            case "Profile":
              return <ProfileIcon width={30} height={30} style={!focused && { opacity: 0.5 }} />;
            case "Settings":
              return <SettingsIcon width={30} height={30} style={!focused && { opacity: 0.5 }} />;
          }
        },
      }),
    })
;

export default createAppContainer(TabNavigator);
