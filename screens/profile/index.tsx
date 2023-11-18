import { View, Text, Image, ScrollView, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import tailwind from "twrnc";
import Icon from "react-native-vector-icons/FontAwesome";
import { background, base, baseStyle, priUtils, secUtils } from "../../utils";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const [modal, setModal] = useState(false);
  const navigation = useNavigation()
  return (
    <ScrollView style={tailwind`bg-white`}>
      <Modal
        animationType="none"
        transparent={true}
        visible={modal}
        onRequestClose={() => setModal(false)}
      >
        <View style={background}>
          <View
            style={tailwind`px-5 py-4 bg-white gap-4 rounded-md w-[240px] mx-auto my-auto`}
          >
            <View>
              <Text style={tailwind`font-bold text-[15px]`}>
                Are you sure you want to logout
              </Text>
            </View>

            <View>
              <View style={tailwind`flex flex-row justify-end gap-4`}>
                <Pressable onPress={() => setModal(false)}>
                  <Text style={tailwind`text-[#9ca3af] font-bold text-[15px]`}>
                    Cancel
                  </Text>
                </Pressable>
                <Text style={tailwind`font-bold text-[#f53488] text-[15px]`}>
                  Logout
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <View style={tailwind`pb-4`}>
        <View
          style={tailwind`bg-[#f53488] h-[205px] text-white pt-15 relative pl-5 rounded-bl-[30px] rounded-br-[30px]`}
        >
          <Text style={tailwind`text-white text-xl font-bold`}>Profile</Text>
          <Image
            source={require("../../assets/matheus-ferrero-W7b3eDUb_2I-unsplash.jpeg")}
            style={tailwind`h-[110px] w-[110px] rounded-full border-white border-[3px] absolute top-[37] left-[37%]`}
          />
        </View>

        <View style={tailwind`flex items-center`}>
          <View style={tailwind`mt-15 flex gap-1`}>
            <Text style={tailwind` text-center font-bold text-[17px]`}>
              Jane Wilson
            </Text>
            <Text style={tailwind` text-center text-[#9ca3af] text-[17px]`}>
              Janewilson@gmail.com
            </Text>
          </View>
        </View>

        <View style={tailwind`px-4 mt-6`}>
          <View style={base}>
            {priUtils.map((util) => (
              <Pressable key={util.text} onPress={() => navigation.navigate('EditDetailsStack')}>
                <View
                  style={tailwind`flex flex-row items-center gap-1`}
                >
                  <View style={tailwind`p-1`}>
                    <Icon
                      name={util.icon.name}
                      size={util.icon.size}
                      color={util.icon.color}
                    />
                  </View>
                  <View style={tailwind`flex-3`}>
                    <Text style={tailwind`font-bold`}>{util.text}</Text>
                  </View>
                  <View style={tailwind`p-1`}>
                    <Icon name={util.iconSec.name} size={util.iconSec.size} />
                  </View>
                </View>
              </Pressable>
            ))}
          </View>

          <View style={baseStyle}>
            {secUtils.map((util) => (
              <Pressable key={util.text} onPress={() => alert('man')}>
                <View
                  style={tailwind`flex flex-row items-center gap-1`}
                >
                  <View style={tailwind`p-1`}>
                    <Icon
                      name={util.icon.name}
                      size={util.icon.size}
                      color={util.icon.color}
                    />
                  </View>
                  <View style={tailwind`flex-3`}>
                    <Text style={tailwind`font-bold`}>{util.text}</Text>
                  </View>
                  <View style={tailwind`p-1`}>
                    <Icon name={util.iconSec.name} size={util.iconSec.size} />
                  </View>
                </View>
              </Pressable>
            ))}
          </View>

          <Pressable onPress={() => setModal(true)}>
            <View style={baseStyle}>
              <View style={tailwind`flex flex-row items-center gap-1`}>
                <View style={tailwind`p-1`}>
                  <Icon name="sign-out" size={20} color={"#f53488"} />
                </View>
                <View style={tailwind`flex-3`}>
                  <Text style={tailwind`font-bold`}>Logout</Text>
                </View>
              </View>
            </View>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
