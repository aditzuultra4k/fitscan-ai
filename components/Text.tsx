import { ReactNode } from "react";
import { StyleSheet, Text as RNText, TextProps as RNTextProps } from "react-native";
import { colors } from "@/constants/theme";

type TextProps = RNTextProps & {
  children: ReactNode;
  variant?: "hero" | "title" | "subtitle" | "body" | "caption" | "metric";
  muted?: boolean;
};

export function Text({ children, variant = "body", muted, style, ...props }: TextProps) {
  return (
    <RNText style={[styles.base, styles[variant], muted && styles.muted, style]} {...props}>
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  base: {
    color: colors.text,
    fontWeight: "500",
    letterSpacing: 0
  },
  hero: {
    fontSize: 42,
    lineHeight: 46,
    fontWeight: "800"
  },
  title: {
    fontSize: 26,
    lineHeight: 32,
    fontWeight: "800"
  },
  subtitle: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "700"
  },
  body: {
    fontSize: 15,
    lineHeight: 21
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "600"
  },
  metric: {
    fontSize: 32,
    lineHeight: 36,
    fontWeight: "800"
  },
  muted: {
    color: colors.textMuted
  }
});
