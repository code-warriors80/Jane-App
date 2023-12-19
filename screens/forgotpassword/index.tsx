import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import Icon from "react-native-vector-icons/Ionicons";
import tailwind from "twrnc";

const ForgotPassword = () => {
  const [emailConfirmed, setEmailConfirmed] = useState(false);
  return (
    <SafeAreaView style={tailwind` flex-1`}>
    <ScrollView style={tailwind` flex-1 px-8`}>
      <Text style={tailwind`text-center text-2xl font-bold mt-10`}>
        Forgot Password
      </Text>
      <View style={tailwind`mt-4 items-center`}>
        <Image
          source={require("../../assets/images/reset-password.png")}
          style={tailwind`w-40 h-40 mb-4`}
        />
      </View>

      <View style={tailwind`mt-5`}>
        <View style={tailwind`mb-4`}>
          <View
            style={tailwind`px-4 flex-row items-center gap-2 border border-gray-400 rounded-3`}
          >
            <Icon name="mail" size={20} style={tailwind`text-gray-400`} />
            <TextInput
              style={tailwind` px-3  py-3 w-80`}
              //   value={email}
              //   onChangeText={setEmail}
              placeholder="example@gmail.com"
            />
          </View>
        </View>

        {emailConfirmed && (
          <>
            <View style={tailwind`mb-4`}>
              <View
                style={tailwind`px-4 flex-row items-center gap-2 border border-gray-400 rounded-3`}
              >
                <Icon name="key" size={20} style={tailwind`text-gray-400`} />
                <TextInput
                  style={tailwind`py-3 flex-1`}
                  //   value={password}
                  //   onChangeText={setPassword}
                  maxLength={6}
                  placeholder="OTP code"
                  keyboardType="number-pad"
                />
              </View>
            </View>

            <View style={tailwind`mb-4`}>
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
                  //   value={password}
                  //   onChangeText={setPassword}
                  placeholder="Enter your password"
                  secureTextEntry={true}
                />
              </View>
            </View>

            <View style={tailwind`mb-4`}>
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
                  //   value={password}
                  //   onChangeText={setPassword}
                  placeholder="Confirm password"
                  secureTextEntry={true}
                />
              </View>
            </View>
          </>
        )}
      </View>
      <TouchableOpacity
        style={tailwind`bg-[#ec589c] py-3  px-3 rounded-md my-4`}
        onPress={() => setEmailConfirmed((prev) => !prev)}
      >
        <Text style={tailwind`text-white text-lg  font-semibold text-center`}>
          {emailConfirmed ? "Reset Password" : "Confirm"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
