import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { CameraView, BarcodeScanningResult, useCameraPermissions } from "expo-camera";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { Screen } from "@/components/Screen";
import { Text } from "@/components/Text";
import { colors, radius, spacing } from "@/constants/theme";

export default function BarcodeScannerScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [code, setCode] = useState<string | null>(null);

  function onBarcodeScanned(result: BarcodeScanningResult) {
    setCode(result.data);
  }

  return (
    <Screen>
      <Header eyebrow="Packaged food" title="Barcode scanner" subtitle="Scan labels and attach verified nutrition data." />
      <View style={styles.cameraBox}>
        {permission?.granted ? (
          <CameraView style={StyleSheet.absoluteFill} barcodeScannerSettings={{ barcodeTypes: ["ean13", "ean8", "upc_a", "upc_e", "qr"] }} onBarcodeScanned={code ? undefined : onBarcodeScanned} />
        ) : (
          <View style={styles.empty}>
            <Text muted>Camera permission is needed to scan packaged foods.</Text>
            <Button title="Allow camera" icon="camera-outline" onPress={requestPermission} />
          </View>
        )}
      </View>
      <Card style={styles.card}>
        <Text variant="subtitle">Detected item</Text>
        <Text muted>{code ?? "Point the camera at a barcode."}</Text>
        {code ? <Button title="Scan again" variant="secondary" icon="refresh" onPress={() => setCode(null)} /> : null}
      </Card>
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
  empty: { flex: 1, alignItems: "center", justifyContent: "center", gap: spacing.md, padding: spacing.md },
  card: { gap: spacing.md }
});
