import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { ThemedView } from "./ThemedView";
import { styl } from "../utils/styles";

export const Loader = () => {
  return (
    <ThemedView style={styl.container}>
      <ActivityIndicator animating={true} color={MD2Colors.red800} />
    </ThemedView>
  );
};
