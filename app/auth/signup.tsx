import { StyleSheet, TextInput } from "react-native";
import { router } from "expo-router";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { Screen } from "@/components/Screen";
import { colors, radius, spacing } from "@/constants/theme";

export default function SignUpScreen() {
  return (
    <Screen>
      <Header eyebrow="Start strong" title="Create account" subtitle="Set goals once, then let your day revolve around better decisions." />
      <Card style={styles.form}>
        <TextInput placeholder="Name" placeholderTextColor={colors.textSubtle} style={styles.input} />
        <TextInput placeholder="Email" placeholderTextColor={colors.textSubtle} style={styles.input} autoCapitalize="none" keyboardType="email-address" />
        <TextInput placeholder="Password" placeholderTextColor={colors.textSubtle} style={styles.input} secureTextEntry />
        <Button title="Create account" icon="person-add-outline" onPress={() => router.replace("/dashboard")} />
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  form: {
    gap: spacing.md
  },
  input: {
    minHeight: 54,
    borderRadius: radius.md,
    backgroundColor: colors.surfaceElevated,
    borderWidth: 1,
    borderColor: colors.border,
    color: colors.text,
    paddingHorizontal: spacing.md,
    fontSize: 16
  }
});
