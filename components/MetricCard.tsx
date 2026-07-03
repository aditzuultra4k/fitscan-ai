import { StyleSheet, View } from "react-native";
import { colors, spacing } from "@/constants/theme";
import { Card } from "@/components/Card";
import { Text } from "@/components/Text";

type MetricCardProps = {
  label: string;
  value: string | number;
  unit?: string;
  accent?: string;
};

export function MetricCard({ label, value, unit, accent = colors.orange }: MetricCardProps) {
  return (
    <Card style={styles.card}>
      <View style={[styles.dot, { backgroundColor: accent }]} />
      <Text variant="metric">{value}</Text>
      <Text variant="caption" muted>{label}{unit ? `, ${unit}` : ""}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minHeight: 128,
    gap: spacing.xs
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginBottom: spacing.sm
  }
});
