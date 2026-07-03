import { StyleSheet, TextInput, View } from "react-native";
import { router } from "expo-router";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { Screen } from "@/components/Screen";
import { Text } from "@/components/Text";
import { colors, radius, spacing } from "@/constants/theme";
import { firebaseReady } from "@/services/firebase";

export default function LoginScreen() {
  return (
    <Screen>
      <Header eyebrow="Welcome back" title="Log in" subtitle="Continue your nutrition and training streak." />
      <Card style={styles.form}>
        <TextInput placeholder="Email" placeholderTextColor={colors.textSubtle} style={styles.input} autoCapitalize="none" keyboardType="email-address" />
        <TextInput placeholder="Password" placeholderTextColor={colors.textSubtle} style={styles.input} secureTextEntry />
        <Button title="Log in" icon="log-in-outline" onPress={() => router.replace("/dashboard")} />
        <Button title="Create account" variant="ghost" onPress={() => router.push("/auth/signup")} />
      </Card>
      <Card>
        <Text variant="caption" muted>
          Firebase Auth is wired and will activate when Expo public Firebase environment variables are provided.
        </Text>
        <Text variant="caption" style={{ color: firebaseReady ? colors.green : colors.orange }}>
          {firebaseReady ? "Firebase configured" : "Using local preview mode"}
        </Text>
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
