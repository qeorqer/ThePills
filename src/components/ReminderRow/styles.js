import { StyleSheet } from "react-native";

import { $white } from "@shared/colors";

export default StyleSheet.create({
  container: {
    width: "80%",
    minHeight: 50,
    backgroundColor: $white,
    flexDirection: "row",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
});
