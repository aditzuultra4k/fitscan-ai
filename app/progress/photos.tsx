import { StyleSheet, View } from "react-native";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { Screen } from "@/components/Screen";
import { Text } from "@/components/Text";
import { colors, spacing } from "@/constants/theme";

export default function ProgressPhotosScreen() {
  return (
    <Screen>
      <Header eyebrow="Photos" title="Progress photos" subtitle="Build a private visual timeline with consistent angles." />
      <View style={styles.grid}>
        {["Front", "Side", "Back", "Latest"].map((label) => (
          <Card key={label} style={styles.slot}>
            <View style={styles.placeholder} />
            <Text variant="caption">{label}</Text>
          </Card>
        ))}
      </View>
      <Button title="Add photo" icon="camera-outline" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  grid: { flexDirection: "row", flexWrap: "wrap", gap: spacing.sm },
  slot: { width: "48.5%", gap: spacing.sm },
  placeholder: { aspectRatio: 0.72, borderRadius: 18, backgroundColor: colors.surfaceElevated, borderWidth: 1, borderColor: colors.border }
});
