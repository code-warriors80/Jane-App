import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import FIcon from "react-native-vector-icons/Feather";
import Icon from 'react-native-vector-icons/AntDesign';
import { SafeAreaView } from 'react-native-safe-area-context';
import tailwind from 'twrnc';
import { useRoute } from '@react-navigation/native';
import style1 from '../../assets/hairstyles/cornrow.jpg'
import { TextInput } from 'react-native-gesture-handler';

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

const renderStars = (rating) => {

    const stars = [];
  
    for (let i = 0; i < 5; i++) {
      const isFilled = i < rating;
  
      stars.push(
        <Text key={i}>
          <Icon
            name={isFilled ? 'star' : 'staro'}
            color='#ec589c'
            size={10}
          />
        </Text>
      );
    }
  
    return stars;
  };

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

const CheckoutScreen = ({navigation}) => {
    const route = useRoute(); // Use useRoute to get the route object
    const { params } = route;
    const setOpenModal = params?.setOpenModal;
  
    const handleCheckoutClose = () => {
      // Close the Checkout screen
      navigation.goBack();
  
      // Reopen the modal
      if (setOpenModal) {
        setOpenModal(true);
      }
    };
  return (
    <SafeAreaView style={tailwind`z-50 flex-1`}>
        <View style={tailwind`bg-[#ec589c] py-5 px-4`}>
            <View style={tailwind`flex-row items-center gap-5`}>
                <TouchableOpacity onPress={handleCheckoutClose}>
                    <FIcon name='arrow-left' size={20} color='white' />
                </TouchableOpacity>
                <Text style={tailwind`text-white text-lg`}>Confirmation</Text>
            </View>
        </View>
              <View style={tailwind`bg-white flex-row items-start justify-between shadow  p-3 px-5 `}>
                    <View style={tailwind`flex-row items-start gap-3`}>
                            <Image source={style1} style={tailwind`w-15 h-15 rounded-xl`}/>
                            <View>
                            <Text style={tailwind`text-lg font-bold`}>Braids</Text>
                                <Text style={tailwind`text-xs text-gray-500`}>description</Text>
                                <View style={tailwind`flex-row items-center my-2`}>
                                    {renderStars(3)}
                                </View>
                            </View>
                    </View>
                    <View style={tailwind`flex-row items-center gap-3`}>
                        <TouchableOpacity style={tailwind`shadow-lg shadow-black bg-white p-2  rounded-full`}>
                            <FIcon name='phone' size={18} color='black' />
                        </TouchableOpacity>
                        <TouchableOpacity style={tailwind`shadow-lg shadow-black bg-white p-2 rounded-full`}>
                            <FIcon name='message-circle' size={18} color='black' />
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView>

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
                        style={tailwind` pb-3 mb-2`}
                      >
                        <View style={tailwind`bg-[#ec589c] bg-opacity-15 py-1.5 mb-2`}>
                          <ListItem title="Specialist" isblack />
                        </View>
                        <ListItem title="Darlene Robertson" />
                        <ListItem title="(Haircutting specialist)" />
                      </View>

                      <View
                        style={tailwind`border-b-2 border-gray-500 border-dashed pb-3 mb-2`}
                      >                    
                          <View style={tailwind`bg-[#ec589c] bg-opacity-15 py-1.5 mb-2`}>
                                  <ListItem title="Your notes" isblack />
                          </View>

                          <View style={tailwind`p-3`}>
                              <View style={tailwind`bg-white shadow rounded-lg p-4`}>
                                <TextInput
                                  placeholder='Write your special service here'
                                  style={tailwind`flex-1 h-20 flex-row `}
                                  textAlignVertical='top'  // Add this line
                                  multiline={true}  // or multiline={false}, depending on your preference
                                />
                              </View>
                          </View>
                      </View>

                      <ListItem title="Medium hair cut" text="$40" />
                      <ListItem title="Partial highlight" text="$40" />
                      <ListItem title="Coupon" text="-$10" />
                      <ListItem title="Total pay" text="$70" isblack />
                </ScrollView>
                <View style={tailwind`flex-row items-center justify-between p-5 py-2`}>
                          <View style={tailwind`flex-row items-center gap-3`}>
                            <Text style={tailwind`text-sm`}>Total pay - <Text style={tailwind`text-lg text-[#ec589c] font-bold`}>$ 80</Text></Text>
                          </View>
                          <TouchableOpacity style={tailwind`bg-[#ec589c] p-4 rounded-lg`}>
                            <Text style={tailwind`text-white`}>Confirm Booking</Text>
                          </TouchableOpacity>
                      </View>
    </SafeAreaView>
  )
}

export default CheckoutScreen