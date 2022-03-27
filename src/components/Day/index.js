import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import image from "../../../assets/images/capsule.png";
import CustomText from "../CustomText";

import styles from "./styles";

const Day = ({ handlePress, day }) => (
  <TouchableOpacity onPress={handlePress}>
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
        <CustomText text={`daysShort.${day.name}`} textStyle={styles.text}/>
      </ImageBackground>
    </View>
  </TouchableOpacity>
);

export default Day;
