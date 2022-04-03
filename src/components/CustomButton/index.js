import { TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";

import CustomText from "@components/CustomText";

import styles from "./styles";

const CustomButton = ({ title, onPress, titleStyle, buttonStyle }) => {

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, buttonStyle]}>
        <CustomText text={title} textStyle={titleStyle} />
      </View>
    </TouchableOpacity>
  );

};

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  titleStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
};

CustomButton.defaultProps = {
  titleStyle: {},
  buttonStyle: {},
};

export default CustomButton;
