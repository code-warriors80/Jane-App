import {
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import FIcon from "react-native-vector-icons/Feather";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tailwind from "twrnc";
import { useNavigation } from "@react-navigation/native";

const ReferralScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tailwind`bg-[#F2F2F2] flex-1`}>
      <View style={tailwind`bg-[#ec589c] flex flex-row items-center p-5`}>
        <View style={tailwind`flex flex-row gap-x-4 items-center`}>
          <Pressable onPress={() => navigation.goBack()}>
            <FIcon name="arrow-left" color="white" size={24} />
          </Pressable>
          <Text style={tailwind`text-white text-lg font-bold`}>
            Invite friends
          </Text>
        </View>
      </View>

      <View style={tailwind`bg-[#F2F2F2] flex-1 py-6 px-5`}>
        <View style={tailwind`flex flex-row justify-center mb-4`}>
          <Image
            style={tailwind`h-[120px] w-[120px] rounded-full`}
            source={{ uri: "https://source.unsplash.com/user/c_v_r" }}
          />
        </View>
        <Text style={tailwind`text-center font-bold text-base`}>
          Invite more than 20 friends to install beauty app and you get discount
          coupon
        </Text>

        <View
          style={tailwind`my-4 flex flex-row justify-between items-center gap-x-2`}
        >
          <TextInput
            style={tailwind`bg-white w-[72%] text-black text-base font-bold h-full px-4 shadow rounded-lg`}
            value="HKT33635367he3"
            numberOfLines={1}
            editable={false}
          />
          <TouchableOpacity
            style={tailwind`flex flex-row items-center justify-center bg-[#ec589c]/20 py-3 px-6 rounded-lg`}
          >
            <Text style={tailwind`font-bold text-base text-[#ec589c] `}>
              Copy
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={tailwind`flex flex-row items-center justify-center bg-[#ec589c] py-2 mx-5 mt-7 rounded-lg`}
        >
          <Text style={tailwind`font-bold text-lg text-white `}>
            Send Invite
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ReferralScreen;
