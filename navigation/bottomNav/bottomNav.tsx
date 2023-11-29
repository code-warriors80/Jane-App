// AppNavigator.js

import BookingDetailsScreen from "../../screens/booking/bookingDetails";
import BookingScreen from "../../screens/booking";
import ChatItemScreen from "../../screens/chatItem";
import ChatsScreen from "../../screens/chats";
import EditDetailsScreen from "../../screens/profile/Edit_Details";
import FIcon from "react-native-vector-icons/Feather";
import HelpAndSupportScreen from "../../screens/helpandsupport";
import HomeScreen from "../../screens/home";
import LoginScreen from "../../screens/login";
import OnboardingScreen from "../../screens/onboarding";
import OtpScreen from "../../screens/otp/otp";
import ProductScreen from "../../screens/products/products";
import ProfileScreen from "../../screens/profile";
import React from "react";
import ReferralScreen from "../../screens/referral";
import RegisterScreen from "../../screens/register";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import AboutScreen from "../../screens/about";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeStack"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const BookingStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="BookingStack"
      component={BookingScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="BookingDetailsStack"
      component={BookingDetailsScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ProfileStack"
      component={ProfileScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="EditDetailsStack"
      component={EditDetailsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="HelpsupportStack"
      component={HelpAndSupportScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="AboutStack"
      component={AboutScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ReferralStack"
      component={ReferralScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const ChatStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ChatStack"
      component={ChatsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ChatItemStack"
      component={ChatItemScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="OnboardingStack"
      component={OnboardingScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="LoginStack"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="RegisterStack"
      component={RegisterScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="OtpStack"
      component={OtpScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="AuthStack"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{ animationEnabled: false }}
      />
    </Stack.Navigator>
  );
};

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home";
              break;
            case "Booking":
              iconName = focused ? "calendar" : "calendar";
              break;
            case "Chat":
              iconName = focused ? "message-circle" : "message-circle";
              break;
            case "Profile":
              iconName = focused ? "user" : "user";
              break;

            default:
              break;
          }

          return (
            <FIcon
              name={iconName}
              size={25}
              color={focused ? "#ec589c" : "#A9A9A9"}
            />
          );
        },
        tabBarLabel: ({ focused }) => {
          return (
            <Text
              style={{
                color: focused ? "#ec589c" : "#A9A9A9",
                fontWeight: focused ? "bold" : "normal",
              }}
            >
              {route.name}
            </Text>
          );
        },
        tabBarStyle: {
          height: 70, // Adjust the height as needed
          paddingVertical: 10, // Adjust the padding as needed
          paddingBottom: 12,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Booking"
        component={BookingStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          headerShown: false,
          tabBarLabelStyle: { paddingVertical: 8 },
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
