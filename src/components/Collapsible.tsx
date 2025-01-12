import { PropsWithChildren, useState } from "react";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";
import { ThemedView } from "./ThemedView";
import { IconSymbol } from "./IconSymbol";
import { ThemedText } from "./ThemedText";

export function Collapsible({
  children,
  title,
  wide,
}: PropsWithChildren & { title: string; wide?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? "dark";

  return (
    <ThemedView>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}
      >
        <IconSymbol
          name="chevron-right"
          size={18}
          color={theme === "light" ? "black" : "white"}
          style={{ transform: [{ rotate: isOpen ? "90deg" : "0deg" }] }}
        />

        <ThemedText type="subtitle">{title}</ThemedText>
      </TouchableOpacity>
      {isOpen && (
        <ThemedView style={wide ? styles.content0 : styles.content}>
          {children}
        </ThemedView>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  content: {
    marginTop: 6,
    marginLeft: 16,
    marginRight: 16
  },
  content0: {
    marginTop: 6,
  },
});
