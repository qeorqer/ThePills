import { TouchableOpacity } from "react-native";

import PlusIcon from "@icons/plus.svg";

import styles from './styles'

const CustomHeaderButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <PlusIcon width={20} height={20} fill={'red'}/>
  </TouchableOpacity>
);

export default CustomHeaderButton;
