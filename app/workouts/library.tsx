import { StyleSheet, View } from "react-native";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { Screen } from "@/components/Screen";
import { Text } from "@/components/Text";
import { colors, spacing } from "@/constants/theme";
import { exerciseLibrary } from "@/data/mock";

export default function ExerciseLibraryScreen() {
  return (
    <Screen>
      <Header eyebrow="Exercises" title="Library" subtitle="Build sessions from common lifts and muscle groups." />
      <View style={styles.grid}>
        {exerciseLibrary.map((exercise) => (
          <Card key={exercise} style={styles.item}>
            <Text>{exercise}</Text>
            <Text variant="caption" muted>Strength · history ready</Text>
          </Card>
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  grid: { flexDirection: "row", flexWrap: "wrap", gap: spacing.sm },
  item: { width: "48.5%", minHeight: 92, justifyContent: "space-between", backgroundColor: colors.surface }
});
