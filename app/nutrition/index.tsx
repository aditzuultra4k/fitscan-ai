import { useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { MacroBar } from "@/components/MacroBar";
import { Screen } from "@/components/Screen";
import { Text } from "@/components/Text";
import { colors, radius, spacing } from "@/constants/theme";
import { dailyGoal } from "@/data/mock";
import { useMeals } from "@/services/mealStore";
import { MealType } from "@/types";

const mealTypes: MealType[] = ["Breakfast", "Lunch", "Dinner", "Snacks"];

export default function NutritionScreen() {
  const { totals, addMeal, mealsByType, totalForType, resetMeals } = useMeals();
  const [mealType, setMealType] = useState<MealType>("Breakfast");
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fats, setFats] = useState("");

  function addManualFood() {
    addMeal({
      name: name.trim() || "Custom food",
      mealType,
      portion: "1 serving",
      calories: Number(calories) || 0,
      protein: Number(protein) || 0,
      carbs: Number(carbs) || 0,
      fats: Number(fats) || 0,
      score: 80
    });
    setName("");
    setCalories("");
    setProtein("");
    setCarbs("");
    setFats("");
  }

  return (
    <Screen>
      <Header eyebrow="Nutrition" title="Calorie tracker" subtitle="Start from zero and add each food to its meal." />
      <Card style={styles.cardGap}>
        <View style={styles.row}>
          <Text variant="metric">{totals.calories}</Text>
          <Text muted>of {dailyGoal.calories} calories</Text>
        </View>
        <MacroBar label="Protein" value={totals.protein} goal={dailyGoal.protein} color={colors.green} />
        <MacroBar label="Carbs" value={totals.carbs} goal={dailyGoal.carbs} color={colors.blue} />
        <MacroBar label="Fats" value={totals.fats} goal={dailyGoal.fats} color={colors.orange} />
      </Card>

      <Card style={styles.cardGap}>
        <Text variant="subtitle">Add food</Text>
        <View style={styles.segmented}>
          {mealTypes.map((type) => (
            <Pressable key={type} onPress={() => setMealType(type)} style={[styles.segment, mealType === type && styles.segmentActive]}>
              <Text variant="caption" style={mealType === type && styles.segmentTextActive}>
                {type}
              </Text>
            </Pressable>
          ))}
        </View>
        <TextInput value={name} onChangeText={setName} placeholder="Food name" placeholderTextColor={colors.textSubtle} style={styles.input} />
        <View style={styles.inputGrid}>
          <TextInput value={calories} onChangeText={setCalories} placeholder="Calories" placeholderTextColor={colors.textSubtle} keyboardType="numeric" style={styles.smallInput} />
          <TextInput value={protein} onChangeText={setProtein} placeholder="Protein" placeholderTextColor={colors.textSubtle} keyboardType="numeric" style={styles.smallInput} />
          <TextInput value={carbs} onChangeText={setCarbs} placeholder="Carbs" placeholderTextColor={colors.textSubtle} keyboardType="numeric" style={styles.smallInput} />
          <TextInput value={fats} onChangeText={setFats} placeholder="Fats" placeholderTextColor={colors.textSubtle} keyboardType="numeric" style={styles.smallInput} />
        </View>
        <View style={styles.actions}>
          <Button title={`Add to ${mealType}`} icon="add" style={styles.action} onPress={addManualFood} />
          <Button title="Reset day" variant="secondary" icon="refresh" style={styles.action} onPress={resetMeals} />
        </View>
      </Card>

      {mealTypes.map((type) => {
        const mealTotal = totalForType(type);
        const typeMeals = mealsByType(type);
        return (
          <Card key={type} style={styles.cardGap}>
            <View style={styles.mealHeader}>
              <Text variant="subtitle">{type}</Text>
              <Text variant="caption" muted>
                {mealTotal.calories} cal
              </Text>
            </View>
            {typeMeals.length === 0 ? <Text muted>No food added yet.</Text> : null}
            {typeMeals.map((meal) => (
              <View key={meal.id} style={styles.mealRow}>
                <View>
                  <Text>{meal.name}</Text>
                  <Text variant="caption" muted>
                    {meal.portion} · {meal.protein}P {meal.carbs}C {meal.fats}F
                  </Text>
                </View>
                <Text variant="caption">{meal.calories} cal</Text>
              </View>
            ))}
          </Card>
        );
      })}
    </Screen>
  );
}

const styles = StyleSheet.create({
  cardGap: { gap: spacing.md },
  row: { flexDirection: "row", alignItems: "flex-end", gap: spacing.sm },
  input: {
    minHeight: 52,
    borderRadius: radius.md,
    backgroundColor: colors.surfaceElevated,
    color: colors.text,
    paddingHorizontal: spacing.md
  },
  smallInput: {
    width: "48.5%",
    minHeight: 52,
    borderRadius: radius.md,
    backgroundColor: colors.surfaceElevated,
    color: colors.text,
    paddingHorizontal: spacing.md
  },
  inputGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm
  },
  segmented: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm
  },
  segment: {
    minHeight: 40,
    paddingHorizontal: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: "center"
  },
  segmentActive: {
    backgroundColor: colors.orange,
    borderColor: colors.orange
  },
  segmentTextActive: {
    color: "#111"
  },
  actions: { flexDirection: "row", gap: spacing.sm },
  action: { flex: 1 },
  mealHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  mealRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: spacing.md,
    paddingVertical: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.border
  }
});
