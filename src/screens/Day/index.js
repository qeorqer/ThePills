import React from "react";
import { Text, View } from "react-native";
import { t } from "i18next";

import styles from "./styles";

const DayScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text>{t("pills screen")}</Text>
    </View>
  );
};

DayScreen.navigationOptions = ({ navigation }) => {
  const day = navigation.getParam("day", "Day");

  return (
    {
      title: t(`days.${day.name || day}`),
    }
  );
};

export default DayScreen;
