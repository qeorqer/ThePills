import { Text } from "react-native";
import { t } from "i18next";

import styles from "./styles";

const CustomText = ({ text, textStyle = {}, variables = {}, translate = true }) => (
  <Text
    style={[styles.text, textStyle]}
  >
    {translate ? t(text, variables) : text}
  </Text>
);

export default CustomText;
