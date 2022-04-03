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
  },
  button: {
    marginTop: 5,
  },
  selectTimeContainer: {
    marginLeft: 10,
    flex: 1,
    justifyContent: "space-between",
  },
  text: {
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 5,
    flex: 1,
  },
  saveButton: {
    minWidth: 80,
  },
  cancelButton: {
    minWidth: 70,
  },
});
