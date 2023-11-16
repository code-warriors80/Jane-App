import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import tailwind from 'twrnc'
import { TouchableOpacity } from 'react-native-gesture-handler'

const HomeScreen = () => {

  const navigation = useNavigation()

  return (
    <View style={tailwind`flex-1 items-center justify-center`}>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text>Login</Text></TouchableOpacity>
    </View>
  )
}

export default HomeScreen