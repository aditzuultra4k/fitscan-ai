import { colors } from "@/constants/theme";
import { FoodScanResult, Goal, Habit, Meal, ProgressPoint, Workout } from "@/types";

export const dailyGoal: Goal = {
  calories: 2400,
  protein: 170,
  carbs: 250,
  fats: 75,
  waterMl: 3200
};

export const meals: Meal[] = [
  {
    id: "meal-1",
    name: "Greek yogurt bowl",
    mealType: "Breakfast",
    portion: "340 g",
    calories: 420,
    protein: 38,
    carbs: 48,
    fats: 10,
    score: 91,
    createdAt: "2026-07-03T07:42:00.000Z",
    favorite: true
  },
  {
    id: "meal-2",
    name: "Chicken quinoa plate",
    mealType: "Lunch",
    portion: "1 bowl",
    calories: 690,
    protein: 56,
    carbs: 72,
    fats: 18,
    score: 87,
    createdAt: "2026-07-03T13:10:00.000Z"
  },
  {
    id: "meal-3",
    name: "Protein smoothie",
    mealType: "Snacks",
    portion: "500 ml",
    calories: 310,
    protein: 32,
    carbs: 36,
    fats: 6,
    score: 83,
    createdAt: "2026-07-03T16:20:00.000Z"
  }
];

export const scannedFood: FoodScanResult = {
  id: "scan-preview",
  name: "Salmon rice bowl",
  mealType: "Lunch",
  portion: "460 g",
  calories: 735,
  protein: 46,
  carbs: 74,
  fats: 28,
  score: 89,
  confidence: 0.86,
  createdAt: new Date().toISOString(),
  alternatives: ["Swap mayo sauce for yogurt dill sauce", "Add cucumber for volume with minimal calories"],
  suggestion: "Strong protein meal. Keep dinner lighter in fats to stay on target."
};

export const workouts: Workout[] = [
  {
    id: "workout-1",
    title: "Upper Strength",
    muscleGroups: ["Chest", "Back", "Shoulders"],
    durationMin: 58,
    caloriesBurned: 430,
    createdAt: "2026-07-02T18:20:00.000Z",
    exercises: [
      { id: "ex-1", name: "Bench press", sets: 4, reps: 6, weightKg: 82.5, restSec: 150 },
      { id: "ex-2", name: "Pull-up", sets: 4, reps: 8, weightKg: 0, restSec: 120 },
      { id: "ex-3", name: "Seated row", sets: 3, reps: 10, weightKg: 72.5, restSec: 90 }
    ]
  }
];

export const exerciseLibrary = [
  "Back squat",
  "Romanian deadlift",
  "Bench press",
  "Incline dumbbell press",
  "Pull-up",
  "Lat pulldown",
  "Seated row",
  "Overhead press",
  "Cable lateral raise",
  "Plank"
];

export const habits: Habit[] = [
  { id: "sleep", title: "Sleep 7.5 hours", streak: 12, target: "7.5 h", completedToday: true, accent: colors.blue },
  { id: "steps", title: "Walk 9,000 steps", streak: 8, target: "9k", completedToday: false, accent: colors.green },
  { id: "sugar", title: "Quit sugar", streak: 21, target: "0 treats", completedToday: true, accent: colors.orange },
  { id: "vape", title: "Quit vaping", streak: 34, target: "clean day", completedToday: true, accent: colors.purple }
];

export const weightTrend: ProgressPoint[] = [
  { label: "Mon", value: 84.2 },
  { label: "Tue", value: 84.0 },
  { label: "Wed", value: 83.8 },
  { label: "Thu", value: 83.9 },
  { label: "Fri", value: 83.5 },
  { label: "Sat", value: 83.3 },
  { label: "Sun", value: 83.1 }
];

export const weeklyCalories: ProgressPoint[] = [
  { label: "M", value: 2200 },
  { label: "T", value: 2380 },
  { label: "W", value: 2410 },
  { label: "T", value: 2140 },
  { label: "F", value: 2270 },
  { label: "S", value: 2550 },
  { label: "S", value: 2320 }
];
