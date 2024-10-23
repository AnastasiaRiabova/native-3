import { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  View,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { screensStyles } from "@/Screens/screensStyles";
import { Button, PasswordInput, AddButton, Input, Header } from "@/components";
import { RoutesType } from "@/App";

type LoginScreenProps = {};

export default function LoginScreen({}: LoginScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<StackNavigationProp<RoutesType>>();

  const handleSubmit = () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Усі поля мають бути заповнені");
      return;
    }
    Keyboard.dismiss();
    setEmail("");
    setPassword("");
    navigation.navigate("home");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={screensStyles.wrapper}>
        <Image
          source={require("@/assets/images/backgroundImage.jpg")}
          style={screensStyles.backgroundImage}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={screensStyles.container}>
            <View style={screensStyles.importImage}>
              <Image style={screensStyles.userIcon} />
              <AddButton
                onPress={() => console.log("Add")}
                style={screensStyles.addButton}
              />
            </View>
            <Header style={screensStyles.header} title="Увійти" />
            <View style={screensStyles.formContainer}>
              <Input
                onChangeText={setEmail}
                value={email}
                autoComplete="email"
                placeholder="Адреса електронної пошти"
                secureTextEntry={false}
              />
              <PasswordInput
                type="new-password"
                onChangeText={(item: string) => setPassword(item)}
                value={password}
              />
              <View style={screensStyles.signIn}>
                <Button title="Увійти" onPress={handleSubmit} />
                <Button
                  onPress={() => navigation.navigate("registration")}
                  variant="transparent"
                  title="Немає акаунту?"
                  underLineTitle={"Зареєструватися"}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
