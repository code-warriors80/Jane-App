import { View, Text, Button  } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {

  const navigation = useNavigation()

  return (
    <View style={tailwind`flex-1 items-center justify-center`}>
      <Text>LoginScreen</Text>
      <Button title='Go to user Home' onPress={() => navigation.navigate('MainTab')} />
    </View>
  )
}

export default LoginScreen