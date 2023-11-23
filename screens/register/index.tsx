import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,Image } from 'react-native';
import tailwind from 'twrnc';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const SignupScreen: React.FC = () => {
  const navigation = useNavigation()
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    // Handle signup logic here
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    // You might want to implement validation, API calls, etc.
  };

  return (
    <View style={tailwind`flex-1 justify-center p-8`}>

      <View style={tailwind`items-center`}>
        <Text style={tailwind`text-3xl`}>Register</Text>
        <Image
          source={require('../../assets/images/pic1.png')}
          style={tailwind`w-80 h-80`}
          resizeMode="contain"
        />
      </View>

      <View style={tailwind`mb-4`}>
        <View style={tailwind`flex-row items-center`}>
          <Icon name="person" size={20} style={tailwind`text-gray-400 mr-1`} /> 
          <TextInput
            style={tailwind`border rounded-3 px-3  border-gray-400 py-3 w-80`}
            value={fullName}
            onChangeText={setFullName}
            placeholder="Enter your full name"
          />
        </View>
      </View>

      <View style={tailwind`mb-4`}>
        <View style={tailwind`flex-row items-center`}>
          <Icon name="mail" size={20} style={tailwind`text-gray-400 mr-1`} /> 
          <TextInput
            style={tailwind`border rounded-3 px-3  border-gray-400 py-3 w-80`}
            value={fullName}
            onChangeText={setEmail}
            placeholder="example@gmail.com"
          />
        </View>
      </View>

      <View style={tailwind`mb-4`}>
        <View style={tailwind`flex-row items-center`}>
          <Icon name="call" size={20} style={tailwind`text-gray-400 mr-1`} /> 
          <TextInput
            style={tailwind`border rounded-3 px-3  border-gray-400 py-3 w-80`}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
          />
        </View>
      </View>

      <View style={tailwind`mb-4`}>
        <View style={tailwind`flex-row items-center`}>
          <Icon name="lock-closed" size={20} style={tailwind`text-gray-400 mr-1`} /> 
          <TextInput
            style={tailwind`border rounded-3 px-3  border-gray-400 py-3 w-80`}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry={true}
          />
        </View>
      </View>

      <View style={tailwind`mb-4`}>
        <View style={tailwind`flex-row items-center`}>
          <Icon name="lock-closed" size={20} style={tailwind`text-gray-400 mr-1`} /> 
          <TextInput
            style={tailwind`border rounded-3 px-3  border-gray-400 py-3 w-80`}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm your password"
            secureTextEntry={true}
          />
        </View>
      </View>

      <TouchableOpacity style={tailwind`bg-pink-500 py-3 w-80 h-14 mx-auto px-2 rounded-md justify-center items-center`} onPress={handleSignup}>
        <Text style={tailwind`text-white text-lg  font-semibold`}>Sign Up</Text>
      </TouchableOpacity>

      <View style={tailwind`flex-row items-center justify-center gap-2`}>
        <Text>Already Have An Account</Text>
        <TouchableOpacity onPress={() =>  navigation.navigate("LoginStack")}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;
