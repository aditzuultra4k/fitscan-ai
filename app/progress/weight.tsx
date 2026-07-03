import { StyleSheet, TextInput, View } from "react-native";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { ChartBars } from "@/components/ChartBars";
import { Header } from "@/components/Header";
import { Screen } from "@/components/Screen";
import { Text } from "@/components/Text";
import { colors, radius, spacing } from "@/constants/theme";
import { weightTrend } from "@/data/mock";

export default function WeightTrackerScreen() {
  return (
    <Screen>
      <Header eyebrow="Weight" title="Weight tracker" subtitle="Log check-ins and separate signal from daily noise." />
      <Card style={styles.card}>
        <Text variant="subtitle">Today</Text>
        <TextInput placeholder="83.1 kg" placeholderTextColor={colors.textSubtle} keyboardType="decimal-pad" style={styles.input} />
        <Button title="Save weight" icon="checkmark" />
      </Card>
      <Card style={styles.card}>
        <Text variant="subtitle">Last 7 days</Text>
        <ChartBars data={weightTrend} color={colors.green} max={86} />
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: { gap: spacing.md },
  input: {
    minHeight: 54,
    borderRadius: radius.md,
    backgroundColor: colors.surfaceElevated,
    color: colors.text,
    paddingHorizontal: spacing.md,
    fontSize: 18
  }
});
