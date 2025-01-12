import { useColorScheme } from "react-native";
import { View, type ViewProps } from "react-native";
import { ThemedText } from "./ThemedText";
import Slider from "@react-native-community/slider";

export type SliderProps = {
  min: number;
  max: number;
  step: number;
  onValChange: (value: any) => void;
  valueRef: number;
  label?: string;
  initialVal?: number
};

export const ThemedSlider = (props: SliderProps) => {
  const scheme = useColorScheme();

  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        marginVertical: 10,
        marginRight: 25,
      }}
    >
      <ThemedText>{props.label} </ThemedText>
      <Slider
        style={{ flexGrow: 1 }}
        onValueChange={(value) => {
          props.onValChange(value);
        }}
        value={props.initialVal}
        minimumValue={props.min}
        maximumValue={props.max}
        step={1}
        minimumTrackTintColor={scheme == "dark" ? "orange" : "black"}
        maximumTrackTintColor={scheme == "dark" ? "white" : "black"}
        thumbTintColor="red"
      />
      <ThemedText>{props.valueRef}</ThemedText>
    </View>
  );
};
