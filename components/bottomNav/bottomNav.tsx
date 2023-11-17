// AppNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/home';
import ProfileScreen from '../../screens/profile';
import BookingScreen from '../../screens/booking';
import FIcon from 'react-native-vector-icons/Feather';
import LoginScreen from "../../screens/login";
import OnboardingScreen from "../../screens/onboarding";
import RegisterScreen from "../../screens/register";
import OtpScreen from "../../screens/otp/otp";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const BookingStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Booking" component={BookingScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Otp" component={OtpScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="AuthStack" headerMode="none">
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
            case 'HomeStack':
              iconName = focused ? 'home' : 'home';
              break;
            case 'BookingStack':
              iconName = focused ? 'calendar' : 'calendar';
              break;
            case 'ProfileStack':
              iconName = focused ? 'user' : 'user';
              break;

            default:
              break;
          }

          return <FIcon name={iconName} size={25} color={focused ? '#007AFF' : '#A9A9A9'} />;
        },
      })}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} options={{headerShown: false}}/>
      <Tab.Screen name="BookingStack" component={BookingStack} options={{headerShown: false}}/>
      <Tab.Screen name="ProfileStack" component={ProfileStack} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
};

export default AppNavigator;
