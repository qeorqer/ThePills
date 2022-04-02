import { StyleSheet } from "react-native";
import { $background } from "../../shared/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: $background,
    paddingTop: 50,
  },
  emptyStateText: {
    fontSize: 18,
    marginBottom: 10,
  }
});
