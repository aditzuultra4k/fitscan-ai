export type MealType = "Breakfast" | "Lunch" | "Dinner" | "Snacks";

export type MacroSummary = {
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
};

export type Meal = MacroSummary & {
  id: string;
  name: string;
  mealType: MealType;
  portion: string;
  score: number;
  confidence?: number;
  createdAt: string;
  favorite?: boolean;
};

export type Goal = MacroSummary & {
  waterMl: number;
};

export type Workout = {
  id: string;
  title: string;
  muscleGroups: string[];
  durationMin: number;
  caloriesBurned: number;
  exercises: ExerciseLog[];
  createdAt: string;
};

export type ExerciseLog = {
  id: string;
  name: string;
  sets: number;
  reps: number;
  weightKg: number;
  restSec: number;
};

export type Habit = {
  id: string;
  title: string;
  streak: number;
  target: string;
  completedToday: boolean;
  accent: string;
};

export type ProgressPoint = {
  label: string;
  value: number;
};

export type FoodScanResult = Meal & {
  alternatives: string[];
  suggestion: string;
};
