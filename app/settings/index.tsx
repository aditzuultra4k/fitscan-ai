import { Switch, StyleSheet, View } from "react-native";
import { router } from "expo-router";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { Screen } from "@/components/Screen";
import { Text } from "@/components/Text";
import { colors, spacing } from "@/constants/theme";
import { appHref } from "@/utils/navigation";

const rows = ["Push reminders", "Meal scan confirmations", "Workout rest timer", "Weekly report"];

export default function SettingsScreen() {
  return (
    <Screen>
      <Header eyebrow="Controls" title="Settings" subtitle="Tune reminders, goals, units, privacy, and integrations." />
      {rows.map((row, index) => (
        <Card key={row} style={styles.row}>
          <View style={{ flex: 1 }}>
            <Text variant="subtitle">{row}</Text>
            <Text muted>{index === 0 ? "Notification service is ready for Expo push tokens." : "Configured locally for preview."}</Text>
          </View>
          <Switch value={index !== 1} trackColor={{ false: colors.surfaceElevated, true: colors.orangeSoft }} thumbColor={index !== 1 ? colors.orange : colors.textMuted} />
        </Card>
      ))}
      <Card style={styles.privacy}>
        <View style={{ flex: 1 }}>
          <Text variant="subtitle">Privacy Policy</Text>
          <Text muted>Review data, camera, AI estimate, and Firebase handling.</Text>
        </View>
        <Button title="Open" variant="secondary" icon="document-text-outline" onPress={() => router.push(appHref("/privacy") as never)} />
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", gap: spacing.md },
  privacy: { gap: spacing.md }
});
