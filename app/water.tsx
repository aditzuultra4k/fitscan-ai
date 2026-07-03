import { StyleSheet, View } from "react-native";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { ProgressRing } from "@/components/ProgressRing";
import { Screen } from "@/components/Screen";
import { Text } from "@/components/Text";
import { colors, spacing } from "@/constants/theme";
import { dailyGoal } from "@/data/mock";

export default function WaterTrackerScreen() {
  const current = 2100;
  return (
    <Screen>
      <Header eyebrow="Hydration" title="Water tracker" subtitle="Keep hydration aligned with training and meal timing." />
      <Card style={styles.center}>
        <ProgressRing value={current / dailyGoal.waterMl} label="water" color={colors.blue} size={180} />
        <Text variant="metric">{current} ml</Text>
        <Text muted>Goal {dailyGoal.waterMl} ml</Text>
      </Card>
      <View style={styles.row}>
        <Button title="Add 250 ml" icon="add" style={styles.button} />
        <Button title="Add 500 ml" variant="secondary" icon="add-circle-outline" style={styles.button} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  center: { alignItems: "center", gap: spacing.md },
  row: { flexDirection: "row", gap: spacing.sm },
  button: { flex: 1 }
});
