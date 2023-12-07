import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import Icon from "react-native-vector-icons/Ionicons";
import tailwind from "twrnc";
import { useNavigation } from "@react-navigation/native";

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    // Handle signup logic here
    console.log("Email:", email);
    console.log("Password:", password);
    // You might want to implement validation, API calls, etc.
    navigation.navigate("MainTab");
  };

  return (
    <View>
      <View style={tailwind`mt-25 items-center`}>
        <Text style={tailwind` text-3xl`}>Login</Text>
        <Image
          source={require("../../assets/images/pic2.png")}
          style={tailwind`w-50 h-50 mb-4`}
        />
      </View>

      <View style={tailwind`mx-5`}>
        <View style={tailwind`mb-4`}>
          <View
            style={tailwind`px-4 flex-row items-center gap-2 border border-gray-400 rounded-3`}
          >
            <Icon name="mail" size={20} style={tailwind`text-gray-400`} />
            <TextInput
              style={tailwind` px-3  py-3 w-80`}
              value={email}
              onChangeText={setEmail}
              placeholder="example@gmail.com"
            />
          </View>
        </View>

        <View style={tailwind`mb-2`}>
          <View
            style={tailwind`px-4 flex-row items-center gap-2 border border-gray-400 rounded-3`}
          >
            <Icon
              name="lock-closed"
              size={20}
              style={tailwind`text-gray-400`}
            />
            <TextInput
              style={tailwind`py-3 flex-1`}
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              secureTextEntry={true}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("ForgotPasswordStack")}
          style={tailwind`rounded-md mb-2`}
        >
          <Text style={tailwind`text-lg text-right `}>forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tailwind`bg-[#ec589c] py-3  px-3 rounded-md mb-3`}
          onPress={handleSignup}
        >
          <Text style={tailwind`text-white text-lg  font-semibold text-center`}>
            Sign in
          </Text>
        </TouchableOpacity>

        <View style={tailwind`flex-row items-center justify-center gap-1`}>
          <Text>New To Our App</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterStack")}
          >
            <Text style={tailwind`text-[#ec589c]`}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
