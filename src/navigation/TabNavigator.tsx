import { StyleSheet, useColorScheme, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { clr } from "../utils/styles";

import { useRoute } from "@react-navigation/native";
import { ExampleTabScreen } from "./screens/ExampleTabScreen";
import { ExampleTabScreen2 } from "./screens/ExampleTabScreen2";
import { RegisterScreen } from "./screens/RegisterScreen";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {

  const scheme = useColorScheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: scheme == "dark" ? clr.dark : clr.light,
      }}
    >
      <Tab.Screen
        name={ExampleTabScreen.name}
        component={ExampleTabScreen}
        initialParams={{}}
        options={{
          title: "Example 1",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcon name="information" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={ExampleTabScreen2.name}
        component={ExampleTabScreen2}
        initialParams={{}}
        options={{
          title: "Example 2",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcon name='web-clock' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={RegisterScreen.name}
        component={RegisterScreen}
        initialParams={{}}
        options={{
          title: "Register",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcon name='account' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});
