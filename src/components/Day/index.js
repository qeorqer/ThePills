import React from "react";
import { View, Text, TouchableOpacity,ImageBackground } from "react-native";
import image from '../../../assets/images/capsule.png'
import styles from "./styles";

const Day = ({ handlePress, day }) => (
  <TouchableOpacity onPress={handlePress}>
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>{day.title}</Text>
      </ImageBackground>
    </View>
  </TouchableOpacity>
);

export default Day;
