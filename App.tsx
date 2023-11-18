import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from 'react-native';
import tailwind from 'twrnc'
import AppNavigator from "./navigation/bottomNav/bottomNav";

export default function App() {
  return (
    <View style={tailwind`flex-1`}>
      <NavigationContainer>
          <AppNavigator />
      </NavigationContainer>
    </View>
  );
}
