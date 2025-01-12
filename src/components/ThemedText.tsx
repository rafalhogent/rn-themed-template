import { Text, type TextProps, StyleSheet } from "react-native";
import { useColorScheme } from "react-native";
import { clr } from "../utils/styles";

export type ThemedTextProps = TextProps & {
  color?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
  center?: boolean;
};

export function ThemedText({
  style,
  color,
  center,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const scheme = useColorScheme();
  const txtColor = color ?? (scheme == "dark" ? clr.dark : clr.light);

  return (
    <Text
      style={[
        {
          color: txtColor,
          alignSelf: center ? "center" : undefined,
          textAlign: center ? "center" : undefined,
          margin: 2,
        },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
});
