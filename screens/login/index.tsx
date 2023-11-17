import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleLogin = () => {
    if (phoneNumber === '08011223344') {
      Alert.alert('Login Successful', 'Welcome!');
    } else {
      Alert.alert('Login Failed', 'Please check your credentials.');
    }
  };

  // const handleLoginFacebook = () => {
  //   // Logic to handle login with Facebook
  //   // Replace this with actual Facebook authentication logic
  //   // Example: You might integrate with Facebook SDK here
  // };

  // const handleLoginGmail = () => {
  //   // Logic to handle login with Gmail
  //   // Replace this with actual Gmail authentication logic
  //   // Example: You might integrate with Google Sign-In SDK here
  // };

  return (
    <View style={tw`flex-1 justify-center w-60 mt-20 mx-10`}>
      <View style={tw`mt-20 w-64`}>
      <Image
        source={require('../../assets/logo/logo.png')}
        style={tw`w-64 h-64 mx-5 `}
      />

        <TextInput
          placeholder="Phone Number"
          keyboardType="phone-pad"
          style={tw`border h-10 border-gray-400 w-80 justify-center px-4 py-2 mb-4  rounded`}
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
        />
        <TouchableOpacity onPress={handleLogin} style={tw`bg-pink-600  h-10 w-80 justify-center  px-4 py-2 rounded mb-4 mx-auto`}>
          <Text style={tw`text-white font-bold text-center`}>Login</Text>
        </TouchableOpacity>
        <Text style={tw`text-2xl text-center`}>Or</Text>
        <View style={tw`flex-row justify-center mt-20`}>
          <TouchableOpacity  style={tw`bg-blue-600 h-10 w-40  mx-16 px-12 py-2 rounded mb-2 mr-2`}>
            <Text style={tw`text-white font-bold`}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={tw`bg-red-600 h-10 w-40 px-6 py-2 rounded`}>
            <Text style={tw`text-white font-bold`}>Login with Gmail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
