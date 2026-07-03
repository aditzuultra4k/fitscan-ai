import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Card } from "@/components/Card";
import { ChartBars } from "@/components/ChartBars";
import { Header } from "@/components/Header";
import { MacroBar } from "@/components/MacroBar";
import { MetricCard } from "@/components/MetricCard";
import { ProgressRing } from "@/components/ProgressRing";
import { Screen } from "@/components/Screen";
import { Text } from "@/components/Text";
import { colors, spacing } from "@/constants/theme";
import { dailyGoal, weeklyCalories } from "@/data/mock";
import { useMeals } from "@/services/mealStore";
import { MealType } from "@/types";
import { percent } from "@/utils/math";

const shortcuts = [
  { title: "AI scan", href: "/scanner/food", icon: "scan-outline" },
  { title: "Barcode", href: "/scanner/barcode", icon: "barcode-outline" },
  { title: "Workout", href: "/workouts", icon: "barbell-outline" },
  { title: "Coach", href: "/coach", icon: "chatbubble-ellipses-outline" }
] as const;

export default function DashboardScreen() {
  const { totals, totalForType } = useMeals();
  const mealTypes: MealType[] = ["Breakfast", "Lunch", "Dinner", "Snacks"];

  return (
    <Screen>
      <Header eyebrow="Today" title="Dashboard" subtitle="Your calories, macros, movement, and streaks in one place." />
      <Card style={styles.heroCard}>
        <View style={styles.heroTop}>
          <View>
            <Text muted>Calories logged</Text>
            <Text variant="metric">{totals.calories}</Text>
            <Text variant="caption" muted>{Math.max(0, dailyGoal.calories - totals.calories)} remaining</Text>
          </View>
          <ProgressRing value={percent(totals.calories, dailyGoal.calories)} label="calories" color={colors.red} />
        </View>
        <MacroBar label="Protein" value={totals.protein} goal={dailyGoal.protein} color={colors.green} />
        <MacroBar label="Carbs" value={totals.carbs} goal={dailyGoal.carbs} color={colors.blue} />
        <MacroBar label="Fats" value={totals.fats} goal={dailyGoal.fats} color={colors.orange} />
      </Card>
      <Card style={styles.cardGap}>
        <View style={styles.cardTitleRow}>
          <Text variant="subtitle">Meals today</Text>
          <Pressable onPress={() => router.push("/nutrition")}>
            <Text variant="caption" style={{ color: colors.orange }}>Add food</Text>
          </Pressable>
        </View>
        {mealTypes.map((mealType) => {
          const mealTotal = totalForType(mealType);
          return (
            <View key={mealType} style={styles.mealSummaryRow}>
              <Text>{mealType}</Text>
              <Text variant="caption" muted>{mealTotal.calories} cal · {mealTotal.protein}P {mealTotal.carbs}C {mealTotal.fats}F</Text>
            </View>
          );
        })}
      </Card>
      <View style={styles.grid}>
        {shortcuts.map((item) => (
          <Pressable key={item.title} style={styles.shortcut} onPress={() => router.push(item.href)}>
            <Ionicons name={item.icon} size={22} color={colors.orange} />
            <Text variant="caption">{item.title}</Text>
          </Pressable>
        ))}
      </View>
      <View style={styles.row}>
        <MetricCard label="Water" value="2.1" unit="L" accent={colors.blue} />
        <MetricCard label="Streak" value={34} unit="days" accent={colors.green} />
      </View>
      <Card style={styles.cardGap}>
        <Text variant="subtitle">Weekly calories</Text>
        <ChartBars data={weeklyCalories} color={colors.orange} max={dailyGoal.calories} />
      </Card>
      <Card style={styles.cardGap}>
        <Text variant="subtitle">Next best action</Text>
        <Text muted>Scan dinner before eating, then add 28 g protein to stay on pace without overshooting fats.</Text>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  heroCard: {
    gap: spacing.md
  },
  heroTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm
  },
  shortcut: {
    width: "48.5%",
    minHeight: 88,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 18,
    padding: spacing.md,
    justifyContent: "space-between"
  },
  row: {
    flexDirection: "row",
    gap: spacing.md
  },
  cardGap: {
    gap: spacing.md
  },
  cardTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  mealSummaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: spacing.md,
    paddingTop: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.border
  }
});
