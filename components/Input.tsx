import { Keyboard, StyleSheet, TextInput, TextInputProps } from "react-native";
import { useRef, useState } from "react";

type InputType = {
  placeholder?: string;
  autoComplete?: TextInputProps["autoComplete"];
  onChangeText: (v: string) => void;
  value: string;
  autoCorrect?: boolean;
  secureTextEntry?: boolean;
};

export const Input = ({
  placeholder,
  onChangeText,
  value,
  autoCorrect,
  secureTextEntry,
  autoComplete,
  ...rest
}: InputType) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <TextInput
      style={[styles.input, isFocused && styles.inputFocused]}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      autoCorrect={autoCorrect}
      secureTextEntry={secureTextEntry}
      autoComplete={autoComplete}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 50,
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },
  inputFocused: {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
  },
});
