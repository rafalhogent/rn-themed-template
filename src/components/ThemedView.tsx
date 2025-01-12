import { useColorScheme } from "react-native";
import { View, type ViewProps } from "react-native";

import { bgc } from "../utils/styles";

export const ThemedView = ({ style, ...otherProps }: ViewProps) => {
  const scheme = useColorScheme();

  return (
    <View
      style={[
        { backgroundColor: scheme == "dark" ? bgc.dark : bgc.light },
        style,
      ]}
      {...otherProps}
    />
  );
};
