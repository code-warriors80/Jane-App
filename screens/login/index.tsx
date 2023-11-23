import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,Image } from 'react-native';
import tailwind from 'twrnc';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Handle signup logic here
    console.log('Email:', email);
    console.log('Password:', password);
    // You might want to implement validation, API calls, etc.
    navigation.navigate("MainTab")
  };

  return (
    <View style={tailwind` justify-center p-8`}>

      <View style={tailwind`items-center`}>
        <Text style={tailwind`text-3xl mt-10 `}>Login</Text>
        <Image
          source={require('../../assets/images/pic2.png')}
          style={tailwind`w-80 h-80 mb-4`}
          resizeMode="contain"
        />
      </View>

      <View style={tailwind`mb-4`}>
        <View style={tailwind`flex-row items-center`}>
          <Icon name="mail" size={20} style={tailwind`text-gray-400 mr-2`} /> 
          <TextInput
            style={tailwind`border rounded-3 px-3  border-gray-400 py-3 w-80`}
            value={email}
            onChangeText={setEmail}
            placeholder="example@gmail.com"
          />
        </View>
      </View>

      <View style={tailwind`mb-4`}>
        <View style={tailwind`flex-row items-center`}>
          <Icon name="lock-closed" size={20} style={tailwind`text-gray-400 mr-2`} /> 
          <TextInput
            style={tailwind`border rounded-3 px-3  border-gray-400 py-3 w-80`}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry={true}
          />
        </View>
      </View>

      <TouchableOpacity style={tailwind`bg-pink-500 py-3 w-80 h-14 mx-6 px-3 rounded-md items-center`} onPress={handleSignup}>
        <Text style={tailwind`text-white text-lg  font-semibold`}>Sign in</Text>
      </TouchableOpacity>

      <TouchableOpacity style={tailwind`py-3 px-6 ml-40 rounded-md mb-4`} >
        <Text style={tailwind`text-lg `}>forgot password?</Text>
      </TouchableOpacity>

      <View style={tailwind`flex-row items-center justify-center gap-2`}>
        <Text>New To Our App</Text>
        <TouchableOpacity onPress={() =>  navigation.navigate("RegisterStack")}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;