import { Text, View } from 'react-native';
import Navigation from './navigation';
import tailwind from 'twrnc'

export default function App() {
  return (
    <View style={tailwind`flex-1`}>
      <Navigation />
    </View>
  );
}
