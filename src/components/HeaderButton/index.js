import { TouchableOpacity } from "react-native";

import PlusIcon from "@icons/plus.svg";

import styles from './styles'

const CustomHeaderButton = ({ handlePress }) => (
  <TouchableOpacity onPress={handlePress} style={styles.container}>
    <PlusIcon width={20} height={20} fill={'red'}/>
  </TouchableOpacity>
);

export default CustomHeaderButton;
