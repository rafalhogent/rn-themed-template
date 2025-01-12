import { TouchableOpacity, useColorScheme } from "react-native";
import { Text, StyleSheet } from "react-native";

export interface ToggleProps {
  label?: string;
  on?: boolean;
  onPress?: () => void;
}

export const Toggle = (props: ToggleProps) => {
  const scheme = useColorScheme();

  const getStyle = () => {
    return scheme == "dark"
      ? {
          ...style.base,
          color: props.on ? "yellow" : "lightgrey",
          borderColor: "grey",
          backgroundColor: props.on ? "brown" : undefined,
        }
      : {
          ...style.base,
          color: props.on ? "white" : "#48444e",
          borderColor: "grey",
          backgroundColor: props.on ? "darkred" : undefined,
        };
  };
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={getStyle()}>{props.label}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  base: {
    fontSize: 12,
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
  },
});
