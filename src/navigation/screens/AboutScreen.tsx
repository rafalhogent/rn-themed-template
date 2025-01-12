import { StyleSheet, Image, View } from "react-native";
import { styl } from "../../utils/styles";
import { version, displayName } from "../../../package.json";
import { ThemedView } from "../../components/ThemedView";
import { ThemedText } from "../../components/ThemedText";
import MaterialIcon from "@expo/vector-icons/MaterialCommunityIcons";

export const AboutScreen = () => {
  return (
    <ThemedView style={styl.container}>
      <Image
        style={{ width: 150, height: 150, alignSelf: "center", margin: 20 }}
        source={require("../../../assets/splash-icon.png")}
      />
      <ThemedText center type="title" >
        {displayName}
      </ThemedText>
      <ThemedText center type="subtitle">
        v{version}
      </ThemedText>
      <View>
        <MaterialIcon
          name="react"
          color={"cyan"}
          size={50}
          style={{  alignSelf: "center", margin: 20 }}
        />
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({});
