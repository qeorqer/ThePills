import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

import Day from "../../components/Day";

import styles from "./styles";

const DaysScreen = ({ navigation }) => {
  const { days } = useSelector((state) => state.days)

  const handlePress = (day) => {
    navigation.navigate("Day", { day });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
          {days.map((day) => <Day key={day.name} day={day} handlePress={() => handlePress(day)} />)}
      </View>
    </SafeAreaView>
  );
};

DaysScreen.navigationOptions = {
  headerShown: false,
};

export default DaysScreen;
