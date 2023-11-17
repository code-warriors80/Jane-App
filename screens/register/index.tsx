import { View, Text, Button  } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import { useNavigation } from '@react-navigation/native'

const RegisterScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={tailwind`flex-1 items-center justify-center`}>
      <Text>RegisterScreen</Text>
      <Button title='Go to user Login' onPress={() => navigation.navigate('LoginStack')} />
    </View>
  )
}

export default RegisterScreen