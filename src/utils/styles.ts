import { Button, StyleSheet, Text, View } from "react-native";

export const darkBgc = "#212";
export const lightBgc = "#FFF";

export const bgc = {
  dark: "#212",
  light: "#FFF",
};

export const clr = {
  dark: "orange",
  light: "black",
};

export const styl = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'stretch',
    justifyContent: "center",
    padding: 5,
  },
  containerTop: {
    flex: 1,
  },
  listItem: {
    display: "flex",
    margin: 0,
    marginVertical: 20,
    padding: 10,
  },
  h1: {
    fontSize: 30,
    fontWeight: "800",
  },
  h3: {
    fontSize: 20,
    fontWeight: "800",
    textAlign: "center",
  },
  txt: {
    fontSize: 16,
  },
});

export const darkStyle = StyleSheet.create({});
