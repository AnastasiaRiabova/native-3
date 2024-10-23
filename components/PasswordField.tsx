import { View, TextInput, Text, ViewStyle, StyleSheet } from "react-native";
import { useState } from "react";
import { Input } from "@/components/Input";

type Props = {
  value: string;
  onChangeText: (item: string) => void;
  type: "new-password" | "current-password";
};

export const PasswordInput = ({ value = "", onChangeText, type }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Input
        value={value}
        onChangeText={onChangeText}
        placeholder="Пароль"
        secureTextEntry={!showPassword}
      />
      <Text
        style={styles.showPassword}
        onPress={() => setShowPassword(!showPassword)}
      >
        Показати
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { position: "relative", width: "100%" },
  showPassword: {
    position: "absolute",
    right: 16,
    top: 15,
  },
  input: {
    width: "100%",
    height: 50,
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    cursor: "pointer",
    position: "relative",
  },
});
