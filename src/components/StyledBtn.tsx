import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  Text,
} from "react-native";
import React from "react";

interface StyledButtonProps extends TouchableOpacityProps {
  label?: string;
}

const StyledBtn = (props: StyledButtonProps) => {
  return (
    <TouchableOpacity {...props} style={{ ...styles.filled }} activeOpacity={0.7}>
      <Text style={styles.txt}>{props.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  filled: {
    color: "white",
    backgroundColor: "#5656dd",
    padding: 12,
    borderRadius: 24,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    
  },
  txt: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export default StyledBtn;
