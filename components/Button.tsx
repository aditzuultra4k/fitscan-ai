import { ComponentProps } from "react";
import { Pressable, StyleSheet, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, radius, spacing } from "@/constants/theme";
import { Text } from "@/components/Text";

type IconName = ComponentProps<typeof Ionicons>["name"];

type ButtonProps = {
  title: string;
  onPress?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  icon?: IconName;
  style?: ViewStyle;
};

export function Button({ title, onPress, variant = "primary", icon, style }: ButtonProps) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.base, styles[variant], pressed && styles.pressed, style]}>
      {icon ? <Ionicons name={icon} size={18} color={variant === "primary" ? "#111" : colors.text} /> : null}
      <Text variant="caption" style={[styles.label, variant === "primary" && styles.primaryLabel]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: 52,
    borderRadius: radius.md,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: spacing.sm,
    paddingHorizontal: spacing.md
  },
  primary: {
    backgroundColor: colors.orange
  },
  secondary: {
    backgroundColor: colors.surfaceElevated,
    borderWidth: 1,
    borderColor: colors.border
  },
  ghost: {
    backgroundColor: "transparent"
  },
  pressed: {
    opacity: 0.78,
    transform: [{ scale: 0.99 }]
  },
  label: {
    textTransform: "uppercase"
  },
  primaryLabel: {
    color: "#111"
  }
});
