import { styl } from "../../utils/styles";
import { ThemedView } from "../../components/ThemedView";
import { ThemedText } from "../../components/ThemedText";
import { View } from "react-native";
import StyledBtn from "../../components/StyledBtn";

export const ExampleTabScreen = () => {
  return (
    <ThemedView style={styl.container}>
      <ThemedText center type="subtitle">
        Example Tab screen 1
      </ThemedText>
      <View style={{ margin: 45 }}>
        <StyledBtn label="Example Btn" />
      </View>
    </ThemedView>
  );
};
