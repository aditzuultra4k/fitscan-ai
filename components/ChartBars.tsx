import { StyleSheet, View } from "react-native";
import { colors, spacing } from "@/constants/theme";
import { Text } from "@/components/Text";
import { ProgressPoint } from "@/types";

type ChartBarsProps = {
  data: ProgressPoint[];
  color?: string;
  max?: number;
};

export function ChartBars({ data, color = colors.green, max }: ChartBarsProps) {
  const chartMax = max ?? Math.max(...data.map((item) => item.value));
  return (
    <View style={styles.chart}>
      {data.map((item) => (
        <View key={item.label} style={styles.item}>
          <View style={styles.barTrack}>
            <View style={[styles.bar, { height: `${Math.max(8, (item.value / chartMax) * 100)}%`, backgroundColor: color }]} />
          </View>
          <Text variant="caption" muted>{item.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  chart: {
    height: 170,
    flexDirection: "row",
    alignItems: "flex-end",
    gap: spacing.sm
  },
  item: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    gap: spacing.sm
  },
  barTrack: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    backgroundColor: colors.surfaceElevated,
    borderRadius: 9,
    overflow: "hidden"
  },
  bar: {
    width: "100%",
    borderRadius: 9
  }
});
