import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import tailwind from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeHeader from '../../components/homeHeader/homeHeader'

const HomeScreen = () => {

  const navigation = useNavigation()

  return (
    <SafeAreaView style={tailwind`flex-1 bg-white`}>
      <HomeHeader />
      <View style={tailwind`flex-1 items-center justify-center`}>
        <Text>Home</Text>
        <TouchableOpacity onPress={() => navigation.navigate(' AuthStack')}><Text>Login</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen