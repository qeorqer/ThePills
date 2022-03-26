import React from "react";
import { View, Text, Button } from "react-native";

import styles from "./styles";

const DaysScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text>Pills page</Text>
      <Button title='Navigate to pill' onPress={() => navigation.navigate("Day")} />
    </View>
  );
};

DaysScreen.navigationOptions = (props) => ({
  title: "Stuff",
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerShown: false,
});

export default DaysScreen;
