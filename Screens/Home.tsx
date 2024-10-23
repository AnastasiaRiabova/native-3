import React, { useState } from "react";
import { View } from "react-native";
import PostsScreen from "@/Screens/PostsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { LogoutButton, BackButton } from "@/components";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RoutesType } from "@/App";
import CreatePostsScreen from "@/Screens/CreatePostsScreen";
import ProfileScreen from "@/Screens/ProfileScreen";

type IconType =
  | "grid"
  | "grid-outline"
  | "person"
  | "person-outline"
  | "search"
  | "add-outline";

const screenNames = {
  posts: "PostsScreen" as const,
  createPost: "CreatePostsScreen" as const,
  profile: "ProfileScreen" as const,
};
const Tabs = createBottomTabNavigator();

export default function Home() {
  const navigation = useNavigation<StackNavigationProp<RoutesType>>();
  const [currentTabIndex, setCurrentTabIndex] = useState(0); // Стан для зберігання поточного індексу вкладки
  const tabs: Array<keyof typeof screenNames> = [
    "posts",
    "createPost",
    "profile",
  ];

  const onLogout = () => navigation.navigate("login");
  const onBack = () => navigation.goBack();

  const switchToPreviousTab = () => {
    if (currentTabIndex === 0) {
      return onBack();
    }
    const previousIndex = (currentTabIndex - 1 + tabs.length) % tabs.length;
    const previousTabName = screenNames[tabs[previousIndex]];
    navigation.navigate(previousTabName);
  };

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: () => undefined,
        tabBarStyle: { paddingHorizontal: 50, paddingVertical: 20, height: 80 },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#212121",
        tabBarIcon: ({ focused, color }) => {
          let iconName: IconType = "search";
          if (route.name === "PostsScreen") {
            iconName = focused ? "grid" : "grid-outline";
          } else if (route.name === "CreatePostsScreen") {
            iconName = "add-outline";
          } else if (route.name === "ProfileScreen") {
            iconName = focused ? "person" : "person-outline";
          }
          return (
            <View
              style={{
                backgroundColor: focused ? "#FF6C00" : "transparent",
                width: 70,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
              }}
            >
              <Ionicons
                name={iconName}
                size={focused ? 28 : 24}
                color={color}
              />
            </View>
          );
        },
      })}
      screenListeners={{
        state: (e) => {
          const index = e.data.state.index;
          setCurrentTabIndex(index);
        },
      }}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          headerRight: () => <LogoutButton onPress={onLogout} />,
          headerLeft: () => <BackButton onPress={switchToPreviousTab} />,
          title: "Публікації",
        }}
      />
      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          headerLeft: () => <BackButton onPress={switchToPreviousTab} />,
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: "Профайл",
          headerLeft: () => <BackButton onPress={switchToPreviousTab} />,
        }}
      />
    </Tabs.Navigator>
  );
}
