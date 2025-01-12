import { ThemedView } from "./ThemedView";
import { styl } from "../utils/styles";
import { ThemedText } from "./ThemedText";

export interface ErrorViewProps {
  message?: string;
}
export const ErrorView = ({ message }: ErrorViewProps) => {
  return (
    <ThemedView style={styl.container}>
      <ThemedText center type="subtitle">
        {"The was an error"}
      </ThemedText>
      <ThemedText center type="subtitle">
        {message ?? "Something gone wrong"}
      </ThemedText>
    </ThemedView>
  );
};
