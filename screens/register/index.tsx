import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
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
    <ScrollView style={tailwind`my-3`}>

      <View style={tailwind`items-center`}>
        <Text style={tailwind`text-3xl mt-10 `}>Register</Text>
        <Image
          source={require('../../assets/images/pic1.png')}
          style={tailwind`w-50 h-50`}
        />
      </View>

      <View style={tailwind`mx-5`}>
          <View style={tailwind`mb-4`}>
            <View style={tailwind`px-4 flex-row items-center gap-2 border border-gray-400 rounded-3`}>
              <Icon name="person" size={20} style={tailwind`text-gray-400`} /> 
              <TextInput
                style={tailwind`py-3 flex-1`}
                value={fullName}
                onChangeText={setFullName}
                placeholder="Enter your full name"
              />
            </View>
          </View>

          <View style={tailwind`mb-4`}>
            <View style={tailwind`px-4 flex-row items-center gap-2 border border-gray-400 rounded-3`}>
              <Icon name="mail" size={20} style={tailwind`text-gray-400`} /> 
              <TextInput
                style={tailwind`py-3 flex-1`}
                value={fullName}
                onChangeText={setEmail}
                placeholder="example@gmail.com"
              />
            </View>
          </View>

          <View style={tailwind`mb-4`}>
            <View style={tailwind`px-4 flex-row items-center gap-2 border border-gray-400 rounded-3`}>
              <Icon name="call" size={20} style={tailwind`text-gray-400`} /> 
              <TextInput
                style={tailwind`py-3 flex-1`}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholder="Enter your phone number"
                keyboardType="phone-pad"
              />
            </View>
          </View>

          <View style={tailwind`mb-4`}>
            <View style={tailwind`px-4 flex-row items-center gap-2 border border-gray-400 rounded-3`}>
              <Icon name="lock-closed" size={20} style={tailwind`text-gray-400`} /> 
              <TextInput
                style={tailwind`py-3 flex-1`}
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                secureTextEntry={true}
              />
            </View>
          </View>

          <View style={tailwind`mb-4`}>
            <View style={tailwind`px-4 flex-row items-center gap-2 border border-gray-400 rounded-3`}>
              <Icon name="lock-closed" size={20} style={tailwind`text-gray-400 mr-2`} /> 
              <TextInput
                style={tailwind`py-3 flex-1`}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Confirm your password"
                secureTextEntry={true}
              />
            </View>
          </View>

          <TouchableOpacity style={tailwind`bg-pink-500 py-3  px-3 rounded-md mb-3`} onPress={handleSignup}>
            <Text style={tailwind`text-white text-lg  font-semibold text-center`}>Sign Up</Text>
          </TouchableOpacity>

          <View style={tailwind`flex-row items-center justify-center gap-2`}>
            <Text>Already Have An Account</Text>
            <TouchableOpacity onPress={() =>  navigation.navigate("LoginStack")}>
              <Text style={tailwind`text-[#ec589c]`}>Login</Text>
            </TouchableOpacity>
          </View>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;
