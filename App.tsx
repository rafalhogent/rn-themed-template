import { StatusBar } from "expo-status-bar";
import { MainStackNavigator } from "./src/navigation/MainStackNavigator";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./src/store";
import { Provider } from "react-redux";

export default function App() {
  const colorScheme = useColorScheme();
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer
          theme={colorScheme == "dark" ? DarkTheme : undefined}
        >
          <StatusBar style={"auto"} />
          <PaperProvider
            theme={colorScheme == "dark" ? MD3DarkTheme : MD3LightTheme}
          >
            <MainStackNavigator />
          </PaperProvider>
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
}
