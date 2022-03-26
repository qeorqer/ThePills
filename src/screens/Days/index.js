import React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import Day from "../../components/Day";

import { days } from "./utils";
import styles from "./styles";

const DaysScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          {days.map((day) => <Day key={day.name} day={day} handlePress={() => console.log(123)} />)}
        </View>
      </View>
    </SafeAreaView>
  );
};

DaysScreen.navigationOptions = (props) => ({
  title: "Stuff",
  headerStyle: {
    backgroundColor: "#f4511e",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerShown: false,
});

export default DaysScreen;
