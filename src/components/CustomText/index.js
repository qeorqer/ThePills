import { Text } from "react-native";
import { t } from "i18next";

import styles from "./styles";

const CustomText = ({ text, textStyle = {}, variables = {} }) => (
  <Text
    style={[styles.text, textStyle]}
  >
    {t(text, variables)}
  </Text>
);

export default CustomText;
