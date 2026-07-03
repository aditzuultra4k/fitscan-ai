import { StyleSheet, View } from "react-native";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { Screen } from "@/components/Screen";
import { Text } from "@/components/Text";
import { colors, spacing } from "@/constants/theme";
import { useMeals } from "@/services/mealStore";

export default function MealHistoryScreen() {
  const { meals } = useMeals();

  return (
    <Screen>
      <Header eyebrow="Meals" title="History" subtitle="Review past meals, scores, and saved favorites." />
      {meals.length === 0 ? (
        <Card style={styles.card}>
          <Text variant="subtitle">No meals yet</Text>
          <Text muted>Add food from the calorie tracker or save an AI scan to build your history.</Text>
        </Card>
      ) : null}
      {meals.map((meal) => (
        <Card key={meal.id} style={styles.card}>
          <View>
            <Text variant="subtitle">{meal.name}</Text>
            <Text muted>{meal.mealType} · {meal.portion}</Text>
          </View>
          <View style={styles.metrics}>
            <Text variant="caption">{meal.calories} cal</Text>
            <Text variant="caption" style={{ color: colors.green }}>{meal.protein} g protein</Text>
            <Text variant="caption" style={{ color: colors.blue }}>{meal.carbs} g carbs</Text>
            <Text variant="caption" style={{ color: colors.orange }}>{meal.fats} g fats</Text>
          </View>
        </Card>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: { gap: spacing.md },
  metrics: { flexDirection: "row", flexWrap: "wrap", gap: spacing.sm }
});
