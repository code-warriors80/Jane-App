import { View, Text,  ScrollView, Modal, Pressable, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import tailwind from "twrnc";
import FIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from "react-native-safe-area-context";
import dp from '../../assets/matheus-ferrero-W7b3eDUb_2I-unsplash.jpeg'
import { useNavigation } from "@react-navigation/native";

interface MenuListProps {
  icon: string;
  title: string;
  link: any
}

const MenuList: React.FC<MenuListProps> = ({ icon, title, link }) => (
  <TouchableOpacity style={tailwind`py-4`} onPress={link}>
    <View style={tailwind`flex-row items-center gap-3`}>
      <FIcon name={icon} size={20} color='black'/>
      <Text style={tailwind`flex-1`}>{title}</Text>
      <FIcon name='chevron-right' size={20} color='black'/>
    </View>
  </TouchableOpacity>
);

const ProfileScreen = () => {
  const navigation = useNavigation()
  const [modal, setModal] = useState(false);
  const [loved, setLoved] = useState(false)
  const Love = () =>{
      if(loved === false){
          setLoved(true)
      }else
      {
          setLoved(false)
      }
  }
  return (
    <SafeAreaView style={tailwind`flex-1 bg-white`}>
        <ScrollView style={tailwind`flex-1 px-6`}>
          <Modal
            animationType="none"
            transparent={true}
            visible={modal}
            onRequestClose={() => setModal(false)}
            style={tailwind`bg-red-300`}
          >
            <View style={tailwind`flex-1`}>
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

          <View  style={tailwind`flex-row items-start justify-between gap-3 pt-8 pb-4`}>
            <View>
              <Image source={dp} style={tailwind`w-17 h-17 rounded-xl mb-3`}/>
              <Text style={tailwind`text-2xl font-bold`}>Young Savage</Text>
            <Text style={tailwind`text-lg text-gray-500`}>muctarmohammed07@gmail.com</Text>
            </View>
                <View style={tailwind`flex-row gap-3`}>
                            <TouchableOpacity style={tailwind`border-2 border-gray-200 p-3 rounded-xl`}>
                                <FIcon name='bell' size={15} color='#f53488'/>
                            </TouchableOpacity>
                            <TouchableOpacity style={tailwind`border-2 border-gray-200 p-3 rounded-xl`} onPress={Love}>
                                {loved !== false ?  <Icon name='heart' size={15} color='#f53488'/> :  <FIcon name='heart' size={15} color='#f53488'/> }
                            </TouchableOpacity>
                  </View>
          </View>

          <View style={tailwind`flex-1`}>
            <MenuList icon='credit-card' title='Payment Method' link={() => navigation.navigate('EditDetailsStack')}/>
            <MenuList icon='message-circle' title='Chat'/>
            <MenuList icon='lock' title='Change Password'/>
            <MenuList icon='users' title='Invite Friends'/>
            <MenuList icon='users' title='FAQS'/>
            <MenuList icon='help-circle' title='About Us'/>
            <MenuList icon='log-out' title='Loggout' link={() => setModal(true)}/>
          </View>

        </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
