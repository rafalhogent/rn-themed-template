import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./screens/HomeScreen";
import { AboutScreen } from "./screens/AboutScreen";
import { TabNavigator } from "./TabNavigator";
import { StackNavigatorParams } from "./types";

export const MainStackNavigator = () => {
  const Stack = createStackNavigator<StackNavigatorParams>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        animation: "slide_from_left",
        presentation: "transparentModal",
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{ title: "About" }}
      />
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ title: "Tabs" }}
      />
    </Stack.Navigator>
  );
};
