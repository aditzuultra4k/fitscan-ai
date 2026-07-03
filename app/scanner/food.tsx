import { useState } from "react";
import { ActivityIndicator, Image, StyleSheet, TextInput, View } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { Screen } from "@/components/Screen";
import { Text } from "@/components/Text";
import { colors, radius, spacing } from "@/constants/theme";
import { estimateFoodFromPhoto } from "@/services/ai";
import { useMeals } from "@/services/mealStore";
import { FoodScanResult } from "@/types";

export default function FoodScannerScreen() {
  const { addMeal } = useMeals();
  const [permission, requestPermission] = useCameraPermissions();
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [result, setResult] = useState<FoodScanResult | null>(null);
  const [loading, setLoading] = useState(false);

  async function pickAndAnalyze() {
    const picked = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, quality: 0.75 });
    if (picked.canceled) return;
    setPhotoUri(picked.assets[0].uri);
    setLoading(true);
    setResult(await estimateFoodFromPhoto(picked.assets[0].uri));
    setLoading(false);
  }

  async function mockCapture() {
    setLoading(true);
    setResult(await estimateFoodFromPhoto(photoUri ?? "camera-preview"));
    setLoading(false);
  }

  return (
    <Screen>
      <Header eyebrow="AI scanner" title="Food scan" subtitle="Take a meal photo, review the estimate, edit values, then save." />
      <View style={styles.cameraBox}>
        {permission?.granted ? (
          <CameraView style={StyleSheet.absoluteFill} facing="back" />
        ) : photoUri ? (
          <Image source={{ uri: photoUri }} style={StyleSheet.absoluteFill} />
        ) : (
          <View style={styles.cameraEmpty}>
            <Text muted>Camera preview requires permission.</Text>
            <Button title="Allow camera" icon="camera-outline" onPress={requestPermission} />
          </View>
        )}
      </View>
      <View style={styles.actions}>
        <Button title="Analyze photo" icon="sparkles-outline" onPress={mockCapture} style={styles.action} />
        <Button title="Choose photo" variant="secondary" icon="image-outline" onPress={pickAndAnalyze} style={styles.action} />
      </View>
      {loading ? <ActivityIndicator color={colors.orange} /> : null}
      {result ? (
        <Card style={styles.result}>
          <Text variant="subtitle">{result.name}</Text>
          <Text muted>{result.portion} · confidence {Math.round((result.confidence ?? 0) * 100)}%</Text>
          {(["calories", "protein", "carbs", "fats"] as const).map((field) => (
            <View key={field} style={styles.editRow}>
              <Text variant="caption" style={styles.field}>{field}</Text>
              <TextInput value={String(result[field])} onChangeText={(value) => setResult({ ...result, [field]: Number(value) || 0 })} keyboardType="numeric" style={styles.input} />
            </View>
          ))}
          <Text variant="caption" style={{ color: colors.green }}>Meal score {result.score}/100</Text>
          {result.alternatives.map((item) => <Text key={item} muted>{item}</Text>)}
          <Button title="Save meal" icon="checkmark" onPress={() => addMeal(result)} />
        </Card>
      ) : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  cameraBox: {
    height: 360,
    borderRadius: radius.xl,
    overflow: "hidden",
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border
  },
  cameraEmpty: { flex: 1, alignItems: "center", justifyContent: "center", gap: spacing.md, padding: spacing.md },
  actions: { flexDirection: "row", gap: spacing.sm },
  action: { flex: 1 },
  result: { gap: spacing.md },
  editRow: { flexDirection: "row", alignItems: "center", gap: spacing.md },
  field: { width: 74, textTransform: "capitalize" },
  input: {
    flex: 1,
    minHeight: 46,
    borderRadius: radius.md,
    backgroundColor: colors.surfaceElevated,
    color: colors.text,
    paddingHorizontal: spacing.md
  }
});
