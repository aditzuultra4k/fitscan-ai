import LoginScreen from "@/app/auth/login";
import SignUpScreen from "@/app/auth/signup";
import CoachScreen from "@/app/coach";
import DashboardScreen from "@/app/dashboard";
import HabitTrackerScreen from "@/app/habits";
import MealHistoryScreen from "@/app/nutrition/history";
import NutritionScreen from "@/app/nutrition";
import OnboardingScreen from "@/app/onboarding";
import PremiumScreen from "@/app/premium";
import PrivacyPolicyScreen from "@/app/privacy";
import ProfileScreen from "@/app/profile";
import ProgressScreen from "@/app/progress";
import ProgressPhotosScreen from "@/app/progress/photos";
import WeightTrackerScreen from "@/app/progress/weight";
import BarcodeScannerScreen from "@/app/scanner/barcode";
import FoodScannerScreen from "@/app/scanner/food";
import SettingsScreen from "@/app/settings";
import WaterTrackerScreen from "@/app/water";
import WorkoutTrackerScreen from "@/app/workouts";
import ExerciseLibraryScreen from "@/app/workouts/library";

export default function PublicBaseRoute() {
  const pathname = typeof window === "undefined" ? "" : window.location.pathname;
  const route = pathname.replace(/^\/fitscan-ai\/?/, "").replace(/^\/+|\/+$/g, "");

  switch (route) {
    case "":
    case "onboarding":
      return <OnboardingScreen />;
    case "auth/login":
      return <LoginScreen />;
    case "auth/signup":
      return <SignUpScreen />;
    case "dashboard":
      return <DashboardScreen />;
    case "nutrition":
      return <NutritionScreen />;
    case "nutrition/history":
      return <MealHistoryScreen />;
    case "scanner/food":
      return <FoodScannerScreen />;
    case "scanner/barcode":
      return <BarcodeScannerScreen />;
    case "workouts":
      return <WorkoutTrackerScreen />;
    case "workouts/library":
      return <ExerciseLibraryScreen />;
    case "progress":
      return <ProgressScreen />;
    case "progress/photos":
      return <ProgressPhotosScreen />;
    case "progress/weight":
      return <WeightTrackerScreen />;
    case "water":
      return <WaterTrackerScreen />;
    case "habits":
      return <HabitTrackerScreen />;
    case "coach":
      return <CoachScreen />;
    case "profile":
      return <ProfileScreen />;
    case "settings":
      return <SettingsScreen />;
    case "privacy":
      return <PrivacyPolicyScreen />;
    case "premium":
      return <PremiumScreen />;
    default:
      return <OnboardingScreen />;
  }
}
