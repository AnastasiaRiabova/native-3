import {StyleSheet, Text, TextStyle} from "react-native";

type TextVariantProps = {
  title: string;
  style: TextStyle
};

export const Header = ({  title, style }: TextVariantProps) => {
  return <Text style={[styles.header, style]}>{title}</Text>;
};

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
  },
});
