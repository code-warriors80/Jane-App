// AppNavigator.js
import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FIcon from 'react-native-vector-icons/Feather';


import LoginScreen from "../../screens/login";
import OnboardingScreen from "../../screens/onboarding";
import RegisterScreen from "../../screens/register";
import OtpScreen from "../../screens/otp/otp";
import ProductScreen from '../../screens/products/products';
import EditDetailsScreen from '../../screens/profile/Edit_Details';
import HomeScreen from '../../screens/home';
import ProfileScreen from '../../screens/profile';
import BookingScreen from '../../screens/booking';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="HomeStack" component={HomeScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const BookingStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="BookingStack" component={BookingScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="ProfileStack" component={ProfileScreen} options={{ headerShown: false }} />
    <Stack.Screen name="EditDetailsStack" component={EditDetailsScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const ProductStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="ProductStack" component={ProductScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="OnboardingStack" component={OnboardingScreen} options={{ headerShown: false }} />
    <Stack.Screen name="LoginStack" component={LoginScreen} options={{ headerShown: false }} />
    <Stack.Screen name="RegisterStack" component={RegisterScreen} options={{ headerShown: false }} />
    <Stack.Screen name="OtpStack" component={OtpScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="AuthStack"   screenOptions={{headerShown: false}}>
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
            case 'Home':
              iconName = focused ? 'home' : 'home';
              break;
            case 'Booking':
              iconName = focused ? 'calendar' : 'calendar';
              break;
            case 'Products':
              iconName = focused ? 'shopping-bag' : 'shopping-bag';
              break;
            case 'Profile':
              iconName = focused ? 'user' : 'user';
              break;

            default:
              break;
          }

          return <FIcon name={iconName} size={25} color={focused ? '#f53488' : '#A9A9A9'} />;
        },
        tabBarLabel: ({ focused }) => {
          return <Text style={{ color: focused ? '#f53488' : '#A9A9A9', fontWeight: focused ? 'bold' : 'normal' }}>{route.name}</Text>;
        },
        tabBarStyle: {
          height: 70, // Adjust the height as needed
          paddingVertical: 10, // Adjust the padding as needed
          paddingBottom: 12
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} options={{headerShown: false, }}/>
      <Tab.Screen name="Products" component={ProductStack} options={{headerShown: false}}/>
      <Tab.Screen name="Booking" component={BookingStack} options={{headerShown: false}}/>
      <Tab.Screen name="Profile"  component={ProfileStack} options={{headerShown: false, tabBarLabelStyle: { paddingVertical: 8 }}}/>
    </Tab.Navigator>
  );
};

export default AppNavigator;