import { Feather } from "@expo/vector-icons";

type BackButtonProps = {
  onPress: () => void;
};
export const BackButton = ({ onPress }: BackButtonProps) => {
  return (
    <Feather
      name="arrow-left"
      size={24}
      onPress={onPress}
      style={{ padding: 10 }}
    />
  );
};
