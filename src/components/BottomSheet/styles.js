import { Dimensions, StyleSheet } from "react-native";

import { $white } from "@shared/colors";

export default StyleSheet.create({
  container: {
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
    backgroundColor: $white,
    borderRadius: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    fontSize: 18,
  },
});
