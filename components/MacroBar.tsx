import { StyleSheet, View } from "react-native";
import { colors, radius, spacing } from "@/constants/theme";
import { Text } from "@/components/Text";
import { percent } from "@/utils/math";

type MacroBarProps = {
  label: string;
  value: number;
  goal: number;
  color: string;
  unit?: string;
};

export function MacroBar({ label, value, goal, color, unit = "g" }: MacroBarProps) {
  return (
    <View style={styles.wrap}>
      <View style={styles.row}>
        <Text variant="caption">{label}</Text>
        <Text variant="caption" muted>
          {value}/{goal} {unit}
        </Text>
      </View>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${percent(value, goal) * 100}%`, backgroundColor: color }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    gap: spacing.xs
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  track: {
    height: 9,
    borderRadius: radius.sm,
    backgroundColor: colors.surfaceElevated,
    overflow: "hidden"
  },
  fill: {
    height: "100%",
    borderRadius: radius.sm
  }
});
