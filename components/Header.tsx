import { StyleSheet, View } from "react-native";
import { colors, spacing } from "@/constants/theme";
import { Text } from "@/components/Text";

type HeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function Header({ eyebrow, title, subtitle }: HeaderProps) {
  return (
    <View style={styles.header}>
      {eyebrow ? <Text variant="caption" style={styles.eyebrow}>{eyebrow}</Text> : null}
      <Text variant="title">{title}</Text>
      {subtitle ? <Text muted>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    gap: spacing.xs,
    paddingTop: spacing.sm
  },
  eyebrow: {
    color: colors.orange
  }
});
