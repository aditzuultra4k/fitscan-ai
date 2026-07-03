import { StyleSheet, View } from "react-native";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { Screen } from "@/components/Screen";
import { Text } from "@/components/Text";
import { colors, spacing } from "@/constants/theme";

const sections = [
  {
    title: "Data we collect",
    body: "FitScan AI stores account details, food logs, nutrition goals, workout entries, progress photos, habits, and app preferences when you choose to add them."
  },
  {
    title: "Camera and photos",
    body: "Camera access is used for meal scans, barcode scans, and progress photos. Food scan estimates are informational and may be edited before saving."
  },
  {
    title: "AI nutrition estimates",
    body: "Calories, macros, portions, meal scores, and coaching suggestions are estimates. They are not medical advice and should not replace guidance from a qualified professional."
  },
  {
    title: "Firebase services",
    body: "The app is prepared for Firebase Auth, Firestore, and Storage. When connected, your data can be synced securely to your account."
  },
  {
    title: "Your control",
    body: "You can edit or delete logged meals, reset daily nutrition data, and choose what information to add to your profile."
  }
];

export default function PrivacyPolicyScreen() {
  return (
    <Screen>
      <Header eyebrow="Legal" title="Privacy Policy" subtitle="How FitScan AI handles fitness, nutrition, camera, and account data." />
      <Card style={styles.notice}>
        <Text variant="subtitle">Preview policy</Text>
        <Text muted>This is an in-app draft. Add your final company/contact details and hosted URL before App Store submission.</Text>
      </Card>
      {sections.map((section) => (
        <Card key={section.title} style={styles.section}>
          <View style={styles.dot} />
          <Text variant="subtitle">{section.title}</Text>
          <Text muted>{section.body}</Text>
        </Card>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  notice: {
    gap: spacing.sm,
    borderColor: colors.orange
  },
  section: {
    gap: spacing.sm
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.blue
  }
});
