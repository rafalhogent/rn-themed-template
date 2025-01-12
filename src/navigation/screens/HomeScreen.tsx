import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { styl } from "../../utils/styles";
import { useNavigation } from "@react-navigation/native";
import { ThemedView } from "../../components/ThemedView";
import { ThemedText } from "../../components/ThemedText";

import { NavigationProps, StackNaviScreens } from "../types";

export interface ListItemProps {
  id: string;
  label: string;
  description?: string;
  nav?: StackNaviScreens;
}

const lista: ListItemProps[] = [
  { id: "1", label: "Tab-Navigator", nav: "TabNavigator" },
  { id: "3", label: "About", nav: "AboutScreen" },
];

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProps["navigation"]>();

  return (
    <ThemedView style={styl.container}>
      <FlatList
        data={lista}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styl.listItem}
              key={item.id}
              onPress={() => {
                if (item.nav) navigation.navigate(item.nav);
              }}
            >
              <ThemedView style={{ padding: 10 }}>
                <ThemedText type="title" style={{ textAlign: "center" }}>
                  {item.label}
                </ThemedText>
              </ThemedView>
            </TouchableOpacity>
          );
        }}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({});
