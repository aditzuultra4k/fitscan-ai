import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { Screen } from "@/components/Screen";
import { Text } from "@/components/Text";
import { colors, spacing } from "@/constants/theme";

const perks = ["Unlimited AI food scans", "Adaptive calorie adjustments", "Advanced progress analytics", "Personal record intelligence", "Priority coaching context"];

export default function PremiumScreen() {
  return (
    <Screen>
      <Header eyebrow="FitScan AI+" title="Premium" subtitle="Unlock deeper coaching and unlimited scan intelligence." />
      <Card style={styles.price}>
        <Text variant="metric">$9.99</Text>
        <Text muted>per month</Text>
        <Button title="Start premium" icon="diamond-outline" />
      </Card>
      {perks.map((perk) => (
        <Card key={perk} style={styles.perk}>
          <Ionicons name="checkmark-circle" size={22} color={colors.green} />
          <Text>{perk}</Text>
        </Card>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  price: { alignItems: "center", gap: spacing.md },
  perk: { flexDirection: "row", alignItems: "center", gap: spacing.md }
});
