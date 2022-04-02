import { TouchableOpacity } from "react-native";

import PlusIcon from "../../../assets/icons/plus.svg";

import styles from './styles'

const CustomHeaderButton = ({ handlePress }) => (
  <TouchableOpacity onPress={handlePress} style={styles.container}>
    <PlusIcon width={20} height={20} />
  </TouchableOpacity>
);

export default CustomHeaderButton;
