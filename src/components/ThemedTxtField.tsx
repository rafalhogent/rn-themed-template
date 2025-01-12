import { TextInputProps, View } from "react-native";
import { ThemedInput } from "./ThemedInput";
import { ThemedText } from "./ThemedText";

export interface TxtFieldProps extends TextInputProps {
  errorLabel?: string;
}

export const ThemedTxtField = (props: TxtFieldProps) => {
  return (
    <View style={{marginVertical: 5}}>
      <View style={{ flexDirection: "row", marginBottom: 4 }}>
        <ThemedInput {...props} />
      </View>
        <ThemedText color="red"> {props.errorLabel} </ThemedText>
    </View>
  );
};
