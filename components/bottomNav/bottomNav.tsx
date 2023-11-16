// AppNavigator.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/home';
import ProfileScreen from '../../screens/profile';
import BookingScreen from '../../screens/booking';
import FIcon from 'react-native-vector-icons/Feather';

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
    </Stack.Navigator>
  );

const AppNavigator = () => {
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
                    break
                case 'Profile':
                  iconName = focused ? 'user' : 'user';
                  break;
                // Add more cases for additional tabs
  
                default:
                  break;
              }
  
              // Return the icon component
              return <FIcon name={iconName} size={25} color={focused ? '#007AFF' : '#A9A9A9'} />;
            },
          })}
        >
            <Tab.Screen name="Home" component={HomeStack}   
                options={{
                    tabBarLabel: 'Home', 
                    headerShown: false 
                }}
            />

            <Tab.Screen name="Booking" component={BookingStack} 
                            options={{
                                tabBarLabel: 'Booking', 
                                headerShown: false 
                            }}
            />

            <Tab.Screen name="Profile" component={ProfileStack} 
                            options={{
                                tabBarLabel: 'Profile',
                                headerShown: false 
                            }}
            />
        </Tab.Navigator>
  );
};

export default AppNavigator;
