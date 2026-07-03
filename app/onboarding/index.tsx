import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Screen } from "@/components/Screen";
import { Text } from "@/components/Text";
import { colors, radius, spacing } from "@/constants/theme";
import { appHref } from "@/utils/navigation";

export default function OnboardingScreen() {
  return (
    <Screen scroll={false}>
      <View style={styles.hero}>
        <LinearGradient colors={["rgba(255,138,42,0.28)", "rgba(53,208,127,0.08)", "transparent"]} style={StyleSheet.absoluteFill} />
        <View style={styles.brandMark}>
          <View style={styles.brandPulse} />
        </View>
        <Text variant="hero">FitScan AI</Text>
        <Text muted style={styles.copy}>
          Track meals, training, body progress, and habits with a camera-first nutrition coach built for precision.
        </Text>
      </View>
      <Card style={styles.card}>
        <Text variant="subtitle">Scan a plate. Confirm the macros. Keep moving.</Text>
        <Text muted>
          AI food estimation, barcode logging, workouts, photos, weight trends, streaks, and coaching all live in one quiet daily dashboard.
        </Text>
        <Button title="Get started" icon="arrow-forward" onPress={() => router.push(appHref("/auth/login") as never)} />
        <Button title="Preview dashboard" variant="secondary" icon="phone-portrait-outline" onPress={() => router.replace(appHref("/dashboard") as never)} />
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: {
    flex: 1,
    padding: spacing.lg,
    justifyContent: "center",
    gap: spacing.md
  },
  brandMark: {
    width: 92,
    height: 92,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surfaceGlass,
    alignItems: "center",
    justifyContent: "center"
  },
  brandPulse: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.orange
  },
  copy: {
    maxWidth: 340
  },
  card: {
    margin: spacing.md,
    gap: spacing.md
  }
});
