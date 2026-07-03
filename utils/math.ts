import { MacroSummary } from "@/types";

export function sumMacros(items: MacroSummary[]): MacroSummary {
  return items.reduce(
    (total, item) => ({
      calories: total.calories + item.calories,
      protein: total.protein + item.protein,
      carbs: total.carbs + item.carbs,
      fats: total.fats + item.fats
    }),
    { calories: 0, protein: 0, carbs: 0, fats: 0 }
  );
}

export function percent(value: number, goal: number) {
  if (!goal) return 0;
  return Math.min(1, value / goal);
}

export function bmi(weightKg: number, heightCm: number) {
  const heightM = heightCm / 100;
  return Number((weightKg / (heightM * heightM)).toFixed(1));
}
