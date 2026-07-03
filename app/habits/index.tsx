import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { MetricCard } from "@/components/MetricCard";
import { Screen } from "@/components/Screen";
import { Text } from "@/components/Text";
import { colors, spacing } from "@/constants/theme";
import { habits } from "@/data/mock";

export default function HabitTrackerScreen() {
  return (
    <Screen>
      <Header eyebrow="Habits" title="Daily systems" subtitle="Sleep, mood, steps, quit trackers, streaks, missions, XP, and levels." />
      <View style={styles.row}>
        <MetricCard label="Level" value={18} unit="athlete" accent={colors.orange} />
        <MetricCard label="XP today" value={640} accent={colors.purple} />
      </View>
      {habits.map((habit) => (
        <Card key={habit.id} style={styles.habit}>
          <View style={[styles.status, { backgroundColor: habit.accent }]}>
            <Ionicons name={habit.completedToday ? "checkmark" : "ellipse-outline"} size={18} color="#111" />
          </View>
          <View style={styles.habitText}>
            <Text variant="subtitle">{habit.title}</Text>
            <Text muted>{habit.streak} day streak · target {habit.target}</Text>
          </View>
        </Card>
      ))}
      <Card style={styles.card}>
        <Text variant="subtitle">Daily missions</Text>
        <Text muted>Complete water, steps, and meal scan to unlock today's achievement badge.</Text>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: spacing.md },
  habit: { flexDirection: "row", alignItems: "center", gap: spacing.md },
  status: { width: 38, height: 38, borderRadius: 19, alignItems: "center", justifyContent: "center" },
  habitText: { flex: 1, gap: spacing.xs },
  card: { gap: spacing.md }
});
