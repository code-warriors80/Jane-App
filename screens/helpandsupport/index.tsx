import {
  Text,
  Pressable,
  TextInput,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import FIcon from "react-native-vector-icons/Feather";
import React, { FC } from "react";
import tailwind from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  title: string;
  placeholder: string;
  height: number;
}

const InputBlock: FC<Props> = (props) => {
  const { title, placeholder, height } = props;
  return (
    <View style={tailwind`mb-4`}>
      <Text style={tailwind`font-bold text-base`}>{title}</Text>
      <TextInput
        style={tailwind.style(
          `bg-white text-[#A9A9A9] text-base font-bold mt-3 py-2 px-4 shadow rounded-lg`,
          { textAlignVertical: height > 1 ? "top" : "center" }
        )}
        placeholder={placeholder}
        numberOfLines={height}
        multiline
      />
    </View>
  );
};

const HelpAndSupportScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tailwind`bg-white flex-1`}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={tailwind`bg-white flex-1`}>
        <View
          style={tailwind`bg-[#f53488] flex flex-row justify-between items-center relative p-5 p-5`}
        >
          <View style={tailwind`flex flex-row gap-x-4 items-center`}>
            <Pressable onPress={() => navigation.goBack()}>
              <FIcon name="arrow-left" color="white" size={24} />
            </Pressable>
            <Text style={tailwind`text-white text-lg font-bold`}>
              Help & support
            </Text>
          </View>
        </View>
        <View
          style={tailwind`bg-[#F2F2F2] flex-1 flex flex-col justify-between px-4 py-6`}
        >
          <View>
            <InputBlock title="Name" height={1} placeholder="Enter your name" />
            <InputBlock
              title="Email Address"
              height={1}
              placeholder="Enter your email address"
            />
            <InputBlock
              title="Message"
              height={6}
              placeholder="Write message here"
            />
          </View>

          <TouchableOpacity style={tailwind`bg-[#f53488] rounded-lg py-2`}>
            <Text style={tailwind`text-white text-center text-lg font-bold`}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default HelpAndSupportScreen;
