import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import FIcon from "react-native-vector-icons/Feather";
import Icon from 'react-native-vector-icons/AntDesign';
import { SafeAreaView } from 'react-native-safe-area-context';
import tailwind from 'twrnc';
import { useRoute } from '@react-navigation/native';
import style1 from '../../assets/hairstyles/cornrow.jpg'

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
    <SafeAreaView style={tailwind`bg-white z-50 flex-1`}>
        <View style={tailwind`bg-[#ec589c] py-5 px-4`}>
            <View style={tailwind`flex-row items-center gap-5`}>
                <TouchableOpacity onPress={handleCheckoutClose}>
                    <FIcon name='arrow-left' size={20} color='white' />
                </TouchableOpacity>
                <Text style={tailwind`text-white text-lg`}>Confirmation</Text>
            </View>
        </View>

        <View style={tailwind`flex-row items-start justify-between p-3 px-5 shadow`}>
            <View style={tailwind`flex-row items-center gap-3`}>
                    <Image source={style1} style={tailwind`w-15 h-15 rounded-xl`}/>
                    <View>
                        <Text>Braids</Text>
                        <View style={tailwind`flex-row items-center`}>
                            {renderStars(3)}
                        </View>
                    </View>
            </View>
            <View style={tailwind`flex-row items-center gap-3`}>
                <TouchableOpacity style={tailwind`shadow-lg p-2`}>
                    <FIcon name='phone' size={18} color='black' />
                </TouchableOpacity>
                <TouchableOpacity style={tailwind`shadow-lg p-2`}>
                    <FIcon name='message-circle' size={18} color='black' />
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default CheckoutScreen