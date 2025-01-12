import { StackScreenProps } from "@react-navigation/stack";
// import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type StackNavigatorParams = {
  HomeScreen: undefined;
  AboutScreen: undefined;
  TabNavigator: undefined;
};

export type StackNaviScreens = keyof StackNavigatorParams;

export type NavigationProps = StackScreenProps<StackNavigatorParams>;
