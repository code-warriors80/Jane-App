import { Text, View } from 'react-native';
import tailwind from 'twrnc'
import AppNavigator from './components/bottomNav/bottomNav';

export default function App() {
  return (
    <View style={tailwind`flex-1`}>
          <AppNavigator />
    </View>
  );
}
