import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { Meal, MealType } from "@/types";
import { sumMacros } from "@/utils/math";

type MealDraft = Omit<Meal, "id" | "createdAt" | "score"> & {
  score?: number;
};

type MealStore = {
  meals: Meal[];
  totals: ReturnType<typeof sumMacros>;
  addMeal: (meal: MealDraft) => void;
  mealsByType: (mealType: MealType) => Meal[];
  totalForType: (mealType: MealType) => ReturnType<typeof sumMacros>;
  resetMeals: () => void;
};

const MealContext = createContext<MealStore | undefined>(undefined);

export function MealProvider({ children }: { children: ReactNode }) {
  const [meals, setMeals] = useState<Meal[]>([]);

  const totals = useMemo(() => sumMacros(meals), [meals]);

  function addMeal(meal: MealDraft) {
    setMeals((current) => [
      {
        ...meal,
        id: `meal-${Date.now()}`,
        createdAt: new Date().toISOString(),
        score: meal.score ?? 80
      },
      ...current
    ]);
  }

  function mealsByType(mealType: MealType) {
    return meals.filter((meal) => meal.mealType === mealType);
  }

  function totalForType(mealType: MealType) {
    return sumMacros(mealsByType(mealType));
  }

  return (
    <MealContext.Provider value={{ meals, totals, addMeal, mealsByType, totalForType, resetMeals: () => setMeals([]) }}>
      {children}
    </MealContext.Provider>
  );
}

export function useMeals() {
  const context = useContext(MealContext);
  if (!context) {
    throw new Error("useMeals must be used inside MealProvider");
  }
  return context;
}
