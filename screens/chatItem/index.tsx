import {
  Text,
  Pressable,
  TextInput,
  FlatList,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import FIcon from "react-native-vector-icons/Feather";
import React, { FC } from "react";
import tailwind from "twrnc";
import { useNavigation } from "@react-navigation/native";

interface Props {
  index: number;
}

const ChatBlockItem: FC<Props> = ({ index }) => {
  const isOwner = index % 2 === 0;

  return (
    <View
      style={tailwind`${
        isOwner ? "bg-[#f53488] mr-2 self-end" : "bg-white ml-2"
      } shadow rounded-3xl w-[80%] my-1.5 px-4 py-3`}
    >
      <Text
        style={tailwind`${
          isOwner ? "text-white" : "text-black"
        } text-sm font-semibold`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae
      </Text>
      <Text
        style={tailwind`${
          isOwner
            ? "bg-[#f53488] mr-2 self-end text-white"
            : "bg-white text-[#c4c4c4]"
        } flex mt-1 text-xs font-semibold`}
      >
        2:{index} AM
      </Text>
    </View>
  );
};

const ChatItemScreen = () => {
  const navigation = useNavigation();
  const Arr = new Array(6).fill(0);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={tailwind`bg-white flex-1`}>
        <View
          style={tailwind`bg-[#f53488] h-[90px] flex flex-row justify-between items-center pt-10 relative px-5`}
        >
          <View style={tailwind`flex flex-row gap-x-4 items-center`}>
            <Pressable onPress={() => navigation.goBack()}>
              <FIcon name="arrow-left" color="white" size={24} />
            </Pressable>
            <Text style={tailwind`text-white text-lg font-bold`}>
              Wade Warren
            </Text>
          </View>
          <TouchableOpacity>
            <FIcon name="phone" color="white" size={21} />
          </TouchableOpacity>
        </View>
        <View style={tailwind`bg-[#F2F2F2] flex-1`}>
          <FlatList
            data={Arr.reverse()}
            renderItem={({ item, index }) => <ChatBlockItem index={index} />}
            keyExtractor={(item, index) => `${index}`}
            contentContainerStyle={tailwind`h-full flex flex-col justify-end pb-2`}
          />
          <View style={tailwind`relative`}>
            <TextInput
              style={tailwind`bg-white text-[#A9A9A9] text-base font-bold py-3 pl-7 pr-11 rounded-lg`}
              placeholder="Type your text here..."
              multiline
            />
            <FIcon
              name="send"
              color="#f53488"
              style={tailwind`absolute right-5 top-4`}
              size={21}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatItemScreen;
