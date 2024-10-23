import { ActivityIndicator } from "react-native";
import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "@/Screens/RegistrationScreen";
import LoginScreen from "@/Screens/LoginScreen";
import Home from "@/Screens/Home";

export type RoutesType = {
  login: undefined;
  registration: undefined;
  home: undefined;
  PostsScreen: undefined;
  CreatePostsScreen: undefined;
  ProfileScreen: undefined;
};

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="login"
        screenOptions={{ headerShown: false }}
      >
        <MainStack.Screen name="registration" component={RegistrationScreen} />
        <MainStack.Screen name="login" component={LoginScreen} />
        <MainStack.Screen name="home" component={Home} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
