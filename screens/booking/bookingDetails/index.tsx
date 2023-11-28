import { Image, Pressable, Text, View } from "react-native";
import React, { FC } from "react";

import FIcon from "react-native-vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";
import tailwind from "twrnc";
import { useNavigation } from "@react-navigation/native";

interface SectionProps {
  title: string;
  text: string;
  icon: string;
  hasborder?: boolean;
  first?: boolean;
}

interface ListProps {
  title: string;
  text?: string;
  isblack?: boolean;
}

const SectionItem: FC<SectionProps> = ({
  title,
  text,
  icon,
  first = false,
  hasborder = false,
}) => {
  return (
    <View
      style={tailwind` ${
        hasborder ? "border-l border-r w-[32%]" : first ? " w-[19%]" : "w-[30%]"
      } text-center`}
    >
      <View style={tailwind`flex flex-row gap-x-2 items-center justify-center`}>
        <FIcon name={icon} color="black" size={18} />
        <Text style={tailwind`text-base font-bold`}>{title}</Text>
      </View>
      <Text style={tailwind`text-sm mt-1 text-gray-500 font-bold text-center`}>
        {text}
      </Text>
    </View>
  );
};

const ListItem: FC<ListProps> = ({ title, text, isblack = false }) => {
  return (
    <View
      style={tailwind`flex flex-row px-5 py-1.5 items-center justify-between`}
    >
      <Text
        style={tailwind`${
          isblack ? "text-black" : "text-gray-500"
        } text-base font-bold`}
      >
        {title}
      </Text>
      {text && (
        <Text
          style={tailwind`${
            isblack ? "text-black" : "text-gray-500"
          } text-base font-bold`}
        >
          {text}
        </Text>
      )}
    </View>
  );
};

const BookingDetailsScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tailwind`bg-[#F2F2F2] flex-1`}>
      <View style={tailwind`bg-[#ec589c] flex flex-row items-center p-5`}>
        <View style={tailwind`flex flex-row gap-x-4 items-center`}>
          <Pressable onPress={() => navigation.goBack()}>
            <FIcon name="arrow-left" color="white" size={24} />
          </Pressable>
          <Text style={tailwind`text-white text-lg font-bold`}>
            The big tease salon
          </Text>
        </View>
      </View>

      <View style={tailwind`bg-[#F2F2F2]flex-1`}>
        <View
          style={tailwind`bg-white min-h-[130px]  flex flex-row justify-between gap-x-2 px-4 py-3 my-4 shadow`}
        >
          <Image
            style={tailwind`h-full w-[30%] rounded-lg`}
            source={{ uri: "https://source.unsplash.com/user/c_v_r" }}
          />

          <View style={tailwind`py-4 w-[55%]`}>
            <Text style={tailwind`text-base font-bold text-black`}>
              Salon Iridescent
            </Text>
            {/* !TODO use react-native-ratings here*/}
            <View
              style={tailwind`flex w-[90%] mt-2  flex-row gap-x-1 items-center`}
            >
              <FIcon name="map-pin" style={tailwind`text-zinc-500`} size={15} />
              <Text style={tailwind`text-sm font-bold text-zinc-500`}>
                1901 Trowbidge cir. Shiloh
              </Text>
            </View>
          </View>

          <View style={tailwind`flex flex-col w-[10%] justify-between py-1.5`}>
            <Pressable
              style={tailwind`shadow-lg shadow-black px-2 py-2 bg-white rounded-full`}
            >
              <FIcon name="phone" color="black" size={18} />
            </Pressable>
            <Pressable
              style={tailwind`shadow-lg shadow-black px-2 py-2 bg-white rounded-full`}
            >
              <FIcon name="message-circle" color="black" size={18} />
            </Pressable>
          </View>
        </View>

        <View style={tailwind`flex flex-row justify-evenly my-4`}>
          <SectionItem title="Date" text="19 sep 2022" icon="calendar" first />
          <SectionItem
            title="Time"
            text="10:00 - 12:00 AM"
            icon="clock"
            hasborder
          />
          <SectionItem
            title="Phone number"
            text="+91(1234567891)"
            icon="phone"
          />
        </View>

        <View
          style={tailwind`border-b-2 border-gray-500 border-dashed pb-3 mb-2`}
        >
          <View style={tailwind`bg-[#ec589c] bg-opacity-15 py-1.5 mb-2`}>
            <ListItem title="Specialist" isblack />
          </View>
          <ListItem title="Darlene Robertson" />
          <ListItem title="(Haircutting specialist)" />
        </View>
        <ListItem title="Medium hair cut" text="$40" />
        <ListItem title="Partial highlight" text="$40" />
        <ListItem title="Coupon" text="-$10" />
        <ListItem title="Total pay" text="$70" isblack />
      </View>
    </SafeAreaView>
  );
};

export default BookingDetailsScreen;
