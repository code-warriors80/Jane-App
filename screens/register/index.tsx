import React, { useState } from 'react';
import { View,Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const RegisterScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleRegister = () => {
    if (fullName && email && phoneNumber) {
      // Successful registration
      Alert.alert('Registration Successful', 'Welcome!');
      // Navigate to the main app screen or perform further actions here
    } else {
      // Incomplete registration
      Alert.alert('Incomplete Registration', 'Please fill in all fields.');
    }
  };

  return (
    <View style={tw`flex-1 w-64 mt-20 mx-10 justify-center items-center`}>
      <Text style={tw`mt-10`}>Register</Text>
        <View style={tw`mt-20 w-60`}>
          <Image
          source={require('../../assets/logo/logo.png')}
          style={tw`w-64 h-64 mx-5 `}
          />
          <TextInput
            placeholder="Full Name"
            style={tw`border h-10 border-gray-400 w-80 justify-center px-4 py-2 mb-4  rounded`}
            onChangeText={(text) => setFullName(text)}
            value={fullName}
          />
          <TextInput
            placeholder="Email"
            style={tw`border h-10 border-gray-400 w-80 justify-center px-4 py-2 mb-4  rounded`}
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            placeholder="Phone Number"
            keyboardType="phone-pad"
            style={tw`border h-10 border-gray-400 w-80 justify-center px-4 py-2 mb-4  rounded`}
            onChangeText={(text) => setPhoneNumber(text)}
            value={phoneNumber}
          />
          <TouchableOpacity onPress={handleRegister} style={tw`bg-pink-600  h-10 w-80 justify-center  px-4 py-2 rounded mb-4 mx-auto`}>
            <Text style={tw`text-white font-bold text-center`}>Register</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default RegisterScreen;
