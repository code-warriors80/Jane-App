import {
  Image,
  ScrollView,
  Text,
  Pressable,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

import FIcon from "react-native-vector-icons/Feather";
import React from "react";
import tailwind from "twrnc";

import { useNavigation } from "@react-navigation/native";

const ChatItem = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ChatItemStack")}
      style={tailwind`flex flex-row justify-between items-start px-4 py-3`}
    >
      <View style={tailwind`flex flex-row gap-x-3 items-start`}>
        <Image
          style={tailwind`h-[52px] w-12 rounded-full`}
          source={{ uri: "https://source.unsplash.com/user/c_v_r" }}
        />
        <View>
          <Text style={tailwind`text-black text-base font-bold mb-1`}>
            Wade Warren
          </Text>
          <Text style={tailwind`text-[#A9A9A9] text-sm font-semibold`}>
            Oh so nice
          </Text>
        </View>
      </View>
      <Text style={tailwind`text-[#A9A9A9] text-sm font-semibold`}>2.00am</Text>
    </TouchableOpacity>
  );
};

const ChatsScreen = () => {
  const navigation = useNavigation();
  const Arr = new Array(15).fill(0);
  return (
    <View style={tailwind`bg-white flex-1`}>
      <View style={tailwind`bg-[#f53488] h-[170px] pt-15 relative px-5`}>
        <View style={tailwind`flex flex-row gap-x-4 items-center`}>
          <Pressable onPress={() => navigation.goBack()}>
            <FIcon name="arrow-left" color="white" size={24} />
          </Pressable>
          <Text style={tailwind`text-white text-xl font-bold`}>Chat</Text>
        </View>
        <View style={tailwind`mt-4 relative`}>
          <TextInput
            style={tailwind`bg-white text-[#A9A9A9] text-base font-bold py-2 px-10 rounded-lg`}
            placeholder="Search"
          />
          <FIcon
            name="search"
            color="#A9A9A9"
            style={tailwind`absolute left-2.5 top-3`}
            size={19}
          />
        </View>
      </View>
      <ScrollView style={tailwind`bg-[#F2F2F2] flex-1 pb-6`}>
        {Arr.map((_, index) => (
          <ChatItem key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ChatsScreen;
