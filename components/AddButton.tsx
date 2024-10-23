import { Pressable, StyleSheet, ViewStyle } from "react-native";
import { Svg, Path, Circle } from "react-native-svg";

type AddButtonProps = {
  onPress: () => void;
  style?: ViewStyle;
};

export const AddButton = ({ onPress, style }: AddButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
        <Circle cx="12.5" cy="12.5" r="12" fill="white" stroke="#FF6C00" />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z"
          fill="#FF6C00"
        />
      </Svg>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 25,
    height: 25,
  },
});
