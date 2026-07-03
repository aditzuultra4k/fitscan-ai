import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { MetricCard } from "@/components/MetricCard";
import { Screen } from "@/components/Screen";
import { Text } from "@/components/Text";
import { colors, spacing } from "@/constants/theme";
import { appHref } from "@/utils/navigation";

export default function ProfileScreen() {
  return (
    <Screen>
      <Header eyebrow="Account" title="Profile" subtitle="Goals, subscription, achievements, and personal settings." />
      <Card style={styles.profile}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={32} color="#111" />
        </View>
        <View style={{ flex: 1 }}>
          <Text variant="subtitle">Adrian</Text>
          <Text muted>Cutting phase · 184 cm · 83.1 kg</Text>
        </View>
      </Card>
      <View style={styles.row}>
        <MetricCard label="Achievements" value={28} accent={colors.yellow} />
        <MetricCard label="Records" value={14} accent={colors.red} />
      </View>
      <Button title="Settings" variant="secondary" icon="settings-outline" onPress={() => router.push(appHref("/settings") as never)} />
      <Button title="Privacy Policy" variant="secondary" icon="document-text-outline" onPress={() => router.push(appHref("/privacy") as never)} />
      <Button title="Premium" icon="diamond-outline" onPress={() => router.push(appHref("/premium") as never)} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  profile: { flexDirection: "row", alignItems: "center", gap: spacing.md },
  avatar: { width: 64, height: 64, borderRadius: 24, backgroundColor: colors.orange, alignItems: "center", justifyContent: "center" },
  row: { flexDirection: "row", gap: spacing.md }
});
