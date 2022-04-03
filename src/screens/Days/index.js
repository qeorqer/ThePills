import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";

import Day from "@components/Day";
import { selectDays } from "@store/selectors/days";

import styles from "./styles";

const DaysScreen = ({ navigation, days }) => {
  const handlePress = (day) => {
    navigation.navigate("Day", { day });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
          {days.map((day) => <Day key={day.name} day={day} onPress={() => handlePress(day)} />)}
      </View>
    </SafeAreaView>
  );
};

DaysScreen.navigationOptions = {
  headerShown: false,
};

const mapStateToProps = (state) => ({
  days: selectDays(state)
})

export default connect(mapStateToProps, {})(DaysScreen);
