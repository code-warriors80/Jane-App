import { createStackNavigator } from "@react-navigation/stack";

// Screen
import HomeScreen from './screens/home';
import OnboardingScreen from './screens/onboarding';
import ProfileScreen from './screens/profile';
import LoginScreen from './screens/login';
import RegisterScreen from './screens/register';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="OnBoarding" component={OnboardingScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
  )
}

export default Navigation