import { StyleSheet, View } from "react-native";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { ChartBars } from "@/components/ChartBars";
import { Header } from "@/components/Header";
import { MetricCard } from "@/components/MetricCard";
import { Screen } from "@/components/Screen";
import { Text } from "@/components/Text";
import { colors, spacing } from "@/constants/theme";
import { weightTrend } from "@/data/mock";
import { bmi } from "@/utils/math";

export default function ProgressScreen() {
  return (
    <Screen>
      <Header eyebrow="Progress" title="Body tracking" subtitle="Weight, photos, measurements, BMI, estimates, and timeline." />
      <View style={styles.row}>
        <MetricCard label="Weight" value="83.1" unit="kg" accent={colors.green} />
        <MetricCard label="BMI" value={bmi(83.1, 184)} accent={colors.blue} />
      </View>
      <Card style={styles.card}>
        <Text variant="subtitle">Weight trend</Text>
        <ChartBars data={weightTrend} color={colors.green} max={86} />
      </Card>
      <Card style={styles.card}>
        <Text variant="subtitle">Progress photos</Text>
        <View style={styles.photoGrid}>
          {[1, 2, 3].map((item) => <View key={item} style={styles.photoSlot} />)}
        </View>
        <Button title="Add photo" icon="camera-outline" />
      </Card>
      <Card style={styles.card}>
        <Text variant="subtitle">Transformation timeline</Text>
        <Text muted>Body fat estimate down 1.8% over the last 6 weeks. Training consistency is the strongest signal.</Text>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: spacing.md },
  card: { gap: spacing.md },
  photoGrid: { flexDirection: "row", gap: spacing.sm },
  photoSlot: { flex: 1, aspectRatio: 0.72, borderRadius: 18, backgroundColor: colors.surfaceElevated, borderWidth: 1, borderColor: colors.border }
});
