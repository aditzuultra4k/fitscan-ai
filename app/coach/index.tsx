import { useState } from "react";
import { ActivityIndicator, Pressable, StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { Screen } from "@/components/Screen";
import { Text } from "@/components/Text";
import { colors, radius, spacing } from "@/constants/theme";
import { askCoach } from "@/services/ai";

type Message = { role: "user" | "coach"; text: string };

export default function CoachScreen() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "coach", text: "Your weekly trend is solid. Ask me for a meal idea, workout adjustment, or plateau check." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!input.trim()) return;
    const prompt = input.trim();
    setMessages((current) => [...current, { role: "user", text: prompt }]);
    setInput("");
    setLoading(true);
    const response = await askCoach(prompt);
    setMessages((current) => [...current, { role: "coach", text: response }]);
    setLoading(false);
  }

  return (
    <Screen>
      <Header eyebrow="AI coach" title="Chat" subtitle="Fitness, nutrition, calories, workouts, plateaus, and daily motivation." />
      {messages.map((message, index) => (
        <Card key={`${message.role}-${index}`} style={[styles.bubble, message.role === "user" && styles.userBubble]}>
          <Text>{message.text}</Text>
        </Card>
      ))}
      {loading ? <ActivityIndicator color={colors.orange} /> : null}
      <View style={styles.composer}>
        <TextInput value={input} onChangeText={setInput} placeholder="Ask your coach" placeholderTextColor={colors.textSubtle} style={styles.input} />
        <Pressable onPress={send} style={styles.send}>
          <Ionicons name="send" size={18} color="#111" />
        </Pressable>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  bubble: { gap: spacing.sm },
  userBubble: { backgroundColor: colors.orangeSoft },
  composer: { flexDirection: "row", alignItems: "center", gap: spacing.sm },
  input: {
    flex: 1,
    minHeight: 54,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    color: colors.text,
    paddingHorizontal: spacing.md
  },
  send: { width: 54, height: 54, borderRadius: 18, backgroundColor: colors.orange, alignItems: "center", justifyContent: "center" }
});
