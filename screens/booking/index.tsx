import { Image, Pressable, ScrollView, Text, View } from "react-native";
import React, { FC, useState } from "react";

import FIcon from "react-native-vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";
import tailwind from "twrnc";
import { useNavigation } from "@react-navigation/native";

interface TabProps {
  text: string;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}
interface CardProps {
  isActive: boolean;
}

const TabItem: FC<TabProps> = ({ text, activeTab, setActiveTab }) => {
  let isActive: boolean = text.toLowerCase() === activeTab.toLowerCase();

  return (
    <Pressable
      disabled={isActive}
      style={tailwind`w-1/2 rounded-lg py-2 ${
        isActive ? "bg-white" : "bg-transparent"
      }`}
      onPress={() => setActiveTab(text)}
    >
      <Text
        style={tailwind`${
          isActive ? "text-[#ec589c]" : "text-white "
        } text-center text-lg font-bold`}
      >
        {text}
      </Text>
    </Pressable>
  );
};

const CardItem: FC<CardProps> = ({ isActive }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={tailwind`bg-white flex flex-row gap-x-2 my-2 shadow rounded-lg`}
      // onPress={() => navigation.navigate("BookingDetailsStack")}
    >
      <Image
        style={tailwind`w-[34%] rounded-l-lg`}
        source={{ uri: "https://source.unsplash.com/user/c_v_r" }}
      />
      <View style={tailwind`py-2`}>
        <Text style={tailwind`text-lg font-bold text-[#ec589c]`}>
          Salon Iridescent
        </Text>
        {/* <View style={tailwind`flex flex-row gap-x-1 items-center`}>
          <FIcon name="map-pin" style={tailwind`text-zinc-500`} />
          <Text style={tailwind`text-sm text-zinc-500`}>
            1901 Trowbidge cir. Shiloh
          </Text>
        </View> */}
        <Text style={tailwind`text-xs font-bold text-zinc-500`}>
          26 June 2022 (9:00AM)
        </Text>
        {isActive ? (
          <View style={tailwind`flex mt-1 flex-row gap-x-2 items-center`}>
            <Pressable style={tailwind`shadow bg-white px-4  py-3 rounded-xl`} onPress={() => navigation.navigate("BookingDetailsStack")}>
              <Text style={tailwind`text-base font-bold text-[#ec589c]`}>
                Get direction
              </Text>
            </Pressable>
            <Pressable style={tailwind`shadow bg-white px-4 py-3 rounded-xl`}>
              <Text style={tailwind`text-base font-bold text-zinc-500`}>
                Cancel
              </Text>
            </Pressable>
          </View>
        ) : (
          <Pressable
            style={tailwind.style(
              `shadow bg-white  mt-1 px-4 py-3 rounded-xl`,
              { alignSelf: "flex-start" }
            )}
            onPress={() => navigation.navigate("BookingDetailsStack")}
          >
            <Text style={tailwind`text-base font-bold text-[#ec589c]`}>
              Get Detail
            </Text>
          </Pressable>
        )}
      </View>
    </Pressable>
  );
};

const BookingScreen = () => {
  const [activeTab, setActiveTab] = useState<string>("Ongoing");
  const Arr = new Array(15).fill(0);
  return (
    <SafeAreaView style={tailwind`flex-1 bg-[#F2F2F2]`}>
      <View style={tailwind`bg-[#ec589c] relative py-4 px-5`}>
        <View style={tailwind`mb-4`}>
          <Text style={tailwind`text-white text-xl font-bold`}>Booking</Text>
          <Text style={tailwind`text-white text-sm`}>
            See your upcoming booking
          </Text>
        </View>

        <View
          style={tailwind`flex flex-row gap-x-4 justify-between items-center`}
        >
          <TabItem
            text="Ongoing"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabItem
            text="History"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </View>
      </View>
      <ScrollView style={tailwind`flex-1 my-1 px-5`}>
        {Arr.map((_, index) => (
          <CardItem isActive={activeTab === "Ongoing"} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookingScreen;
