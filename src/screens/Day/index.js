import React from "react";
import { Text, View } from "react-native";

import styles from "./styles";
import { useTranslation } from "react-i18next";

const DayScreen = ({ navigation }) => {
  const { t } = useTranslation();

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
      title: day.name,
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerTitleAlign: "center",
    }
  );
};

export default DayScreen;
