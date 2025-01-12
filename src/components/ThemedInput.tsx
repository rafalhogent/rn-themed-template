import { TextInput, TextInputProps, useColorScheme, View } from "react-native";
import { clr } from "../utils/styles";

export interface InputProps extends TextInputProps {
  fillrow?: boolean;
}
export const ThemedInput = (props: InputProps) => {
  const scheme = useColorScheme();

  const color = scheme == "dark" ? clr.dark : clr.light;
  const placeholdercolor = scheme == "dark" ? "#989" : "grey";

  return (
    <TextInput
    {...props}
    placeholderTextColor={placeholdercolor}
    style={{
      color,
      fontSize: 16,
      width: props.fillrow ? undefined : "100%",
      flexGrow: 1,
      padding: 12,
      borderWidth: 1,
      borderColor: "grey",
      borderRadius: 12,
    }}
    onChangeText={props.onChangeText}
  />
  );
};
