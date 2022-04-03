import { StyleSheet } from "react-native";
import { $background, $black, $red } from "@shared/colors";

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
  },
  formContainer: {
    paddingTop: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    justifyContent: "flex-start",
    marginTop: 5,
    borderWidth: 1,
    paddingHorizontal: 5,
    borderColor: $black,
    borderRadius: 5,
    width: 180,
  }
});
