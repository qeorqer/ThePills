import React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Day from "../../components/Day";

import { days } from "./utils";
import styles from "./styles";

const DaysScreen = ({ navigation }) => {
  const handlePress = (day) => {
    navigation.navigate("Day", { day });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          {days.map((day) => <Day key={day.name} day={day} handlePress={() => handlePress(day)} />)}
        </View>
      </View>
    </SafeAreaView>
  );
};

DaysScreen.navigationOptions = {
  headerShown: false,
};

export default DaysScreen;
