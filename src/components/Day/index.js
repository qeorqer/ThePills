import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";

import image from "@images/capsule.png";
import CustomText from "@components/CustomText";

import styles from "./styles";

const Day = ({ onPress, day }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
        <CustomText text={`daysShort.${day.name}`} textStyle={styles.text}/>
      </ImageBackground>
    </View>
  </TouchableOpacity>
);

export default Day;
