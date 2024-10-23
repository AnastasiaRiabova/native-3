import { Feather } from "@expo/vector-icons";

type LogoutButtonProps = {
  onPress: () => void;
};
export const LogoutButton = ({ onPress }: LogoutButtonProps) => {
  return (
    <Feather
      name="log-out"
      size={24}
      onPress={onPress}
      style={{ color: "#BDBDBD", padding: 10 }}
    />
  );
};
