import { scannedFood } from "@/data/mock";
import { FoodScanResult, Goal } from "@/types";

export async function estimateFoodFromPhoto(_photoUri: string): Promise<FoodScanResult> {
  await new Promise((resolve) => setTimeout(resolve, 900));
  return {
    ...scannedFood,
    id: `scan-${Date.now()}`,
    createdAt: new Date().toISOString()
  };
}

export async function getMealSuggestions(remaining: Goal) {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return [
    `Lean dinner: turkey, potatoes, greens for about ${Math.max(350, Math.round(remaining.calories * 0.45))} calories.`,
    `Protein top-up: skyr with berries adds about ${Math.min(40, remaining.protein)} g protein.`,
    "Keep fats moderate for the next meal and bias carbs around training."
  ];
}

export async function askCoach(message: string) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return `Based on your logs, I would keep today simple: hit protein first, add a 30 minute walk, and adjust dinner around your remaining calories. You asked: "${message}"`;
}
