import { TouchableOpacity } from "react-native";

import CloseIcon from "@icons/close.svg";

import styles from './styles'

const CloseButton = ({ handlePress, style }) => (
  <TouchableOpacity onPress={handlePress} style={styles.container}>
    <CloseIcon width={20} height={20} />
  </TouchableOpacity>
);

export default CloseButton;
