import { StyleSheet, TextInput, View } from "react-native";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { MetricCard } from "@/components/MetricCard";
import { Screen } from "@/components/Screen";
import { Text } from "@/components/Text";
import { colors, radius, spacing } from "@/constants/theme";
import { workouts } from "@/data/mock";

export default function WorkoutTrackerScreen() {
  const latest = workouts[0];
  return (
    <Screen>
      <Header eyebrow="Training" title="Workout tracker" subtitle="Log sets, reps, weight, rest, and progressive overload notes." />
      <View style={styles.row}>
        <MetricCard label="This week" value={4} unit="sessions" accent={colors.green} />
        <MetricCard label="Burned" value={1620} unit="cal" accent={colors.red} />
      </View>
      <Card style={styles.card}>
        <Text variant="subtitle">Create workout</Text>
        <TextInput placeholder="Workout name" placeholderTextColor={colors.textSubtle} style={styles.input} />
        <Button title="Start workout" icon="play" />
      </Card>
      <Card style={styles.card}>
        <Text variant="subtitle">{latest.title}</Text>
        <Text muted>{latest.durationMin} min · {latest.caloriesBurned} calories · {latest.muscleGroups.join(", ")}</Text>
        {latest.exercises.map((exercise) => (
          <View key={exercise.id} style={styles.exercise}>
            <Text>{exercise.name}</Text>
            <Text variant="caption" muted>{exercise.sets} sets · {exercise.reps} reps · {exercise.weightKg} kg · {exercise.restSec}s rest</Text>
          </View>
        ))}
      </Card>
      <Card style={styles.card}>
        <Text variant="subtitle">Progressive overload</Text>
        <Text muted>Bench press is ready for a 2.5 kg increase if warm-up speed feels normal.</Text>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: spacing.md },
  card: { gap: spacing.md },
  input: {
    minHeight: 52,
    borderRadius: radius.md,
    backgroundColor: colors.surfaceElevated,
    color: colors.text,
    paddingHorizontal: spacing.md
  },
  exercise: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: spacing.sm,
    gap: spacing.xs
  }
});
