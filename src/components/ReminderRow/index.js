import { View, Text } from "react-native";

import CustomText from "@components/CustomText";

import styles from "./styles";

const ReminderRow = ({ reminder }) => {
  return (
    <View style={styles.container}>
      <CustomText text={reminder.note} translate={false} />
      <CustomText text={reminder.time} translate={false} />
    </View>
  );
};

export default ReminderRow;
