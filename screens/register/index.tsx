import { View, Text, TouchableOpacity  } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import { useNavigation } from '@react-navigation/native'

const RegisterScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={tailwind`flex-1 items-center justify-center`}>
      <Text>RegisterScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default RegisterScreen