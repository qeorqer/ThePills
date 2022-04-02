import React from "react";
import { Text, View } from "react-native";
import { t } from "i18next";

import CustomText from "../../components/CustomText";
import HeaderButton from "../../components/HeaderButton";
import ReminderRow from "../../components/ReminderRow";

import styles from "./styles";

const DayScreen = ({ navigation }) => {
  const { reminders } = navigation.getParam("day");
  return (
    <View style={styles.container}>
      {
        reminders.length ? (
          <>
            <CustomText text='your reminders' textStyle={styles.emptyStateText} />
            {reminders.map((reminder) => <ReminderRow reminder={reminder} key={reminder.id} />)}
          </>
        ) : (
          <CustomText text='no reminders state' textStyle={styles.emptyStateText} />
        )
      }
    </View>
  );
};

DayScreen.navigationOptions = ({ navigation }) => {
  const day = navigation.getParam("day", "Day");

  return (
    {
      title: t(`days.${day.name || day}`),
      headerRight: () => <HeaderButton />,
    }
  );
};

export default DayScreen;
