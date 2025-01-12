import { styl } from "../../utils/styles";
import { ThemedView } from "../../components/ThemedView";
import { ThemedText } from "../../components/ThemedText";
import { Loader } from "../../components/Loader";
import { View } from "react-native";

export const ExampleTabScreen2 = () => {
  return (
    <ThemedView style={styl.container}>
      <ThemedText center type="subtitle">
        Example Tab screen 2
      </ThemedText>
      <View style={{margin: 35}}>
        <Loader />
      </View>
    </ThemedView>
  );
};
