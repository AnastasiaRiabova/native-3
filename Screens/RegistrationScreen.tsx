import { useState } from "react";
import {
  View,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { screensStyles } from "@/Screens/screensStyles";
import { RoutesType } from "@/App";
import {Header, AddButton, PasswordInput, Input, Button} from "@/components";

type RegistrationScreenProps = {};

export default function RegistrationScreen({}: RegistrationScreenProps) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<StackNavigationProp<RoutesType>>();

  const handleSubmit = () => {
    if (
      username.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      alert("Усі поля мають бути заповнені");
      return;
    }
    Keyboard.dismiss();

    setUsername("");
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
            <Header style={screensStyles.header} title="Реєстрація" />
            <View style={screensStyles.formContainer}>
              <Input
                onChangeText={setUsername}
                value={username}
                autoComplete="username-new"
                placeholder="Логін"
              />
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
                <Button title="Зареєстуватися" onPress={handleSubmit} />
                <Button
                  onPress={() => navigation.navigate("login")}
                  variant="transparent"
                  title="Вже є акаунт?"
                  underLineTitle="Увійти"
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
