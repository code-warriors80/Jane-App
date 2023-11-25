import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import FIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import stylist1 from '../../assets/hairstyles/lemonade.jpg'
import stylist2 from '../../assets/hairstyles/cornrow.jpg'
import stylist3 from '../../assets/hairstyles/knotless-box.jpg'
import stylist4 from '../../assets/hairstyles/triangle2.jpg'

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
interface ServiceListProps {
    image: any
    name: string
    description: string
    price: number
    rating: any
    ratingnum: string
    link: any
}

const ServicesList: React.FC<ServiceListProps> = ({image, name, description, price, rating, ratingnum, link}) => (
    <TouchableOpacity style={tailwind`mb-3`}>
        <View style={tailwind`flex-row items-center gap-3`}>
            <Image source={image} style={tailwind`w-18 h-18 rounded-xl`}/>
            <View style={tailwind`flex-1`}>
              <View style={tailwind`flex-row items-center justify-between`}>
                <Text style={tailwind`text-sm font-bold`}>{name}</Text>
                <Text style={tailwind`text-sm font-bold`}>$ {price}</Text>
              </View>
                <Text numberOfLines={1} style={tailwind`text-xs text-gray-500`}>{description}</Text>
                <View style={tailwind`flex-row items-center justify-between my-1`}>
                    <View style={tailwind`flex-row items-center mb-2`}>
                                {renderStars(rating)}
                                <Text style={tailwind`ml-2`}>{ratingnum}</Text>
                      </View>
                      <TouchableOpacity style={tailwind`bg-[#ec589c] py-2 px-6 rounded-lg`} onPress={link}>
                          <Text style={tailwind`text-white`}>Book</Text>
                      </TouchableOpacity>
                </View>
            </View>
        </View>
    </TouchableOpacity>
)

const Services = () => {
    const navigation = useNavigation()
  return (
    <View style={tailwind`px-3`}>
        <Text style={tailwind`mb-3 font-extrabold text-lg`}>Services</Text>
        <View>
            <ServicesList image={stylist1} name='Lemonade braids' description='this is a braid' rating={1} ratingnum='1.0' price={10} link={() => {}} />
            <ServicesList image={stylist2} name='Cornrows' description='this is a braid' rating={2} ratingnum='2.0' price={50.00} link={() => {}} />
            <ServicesList image={stylist3} name='Knotless braids' description='this is a braid' rating={5} ratingnum='5.0' price={80.00} link={() => {}} />
            <ServicesList image={stylist4} name='Triangle braids' description='this is a braid' rating={3} ratingnum='3.0' price={80.00} link={() => {}} />
        </View>
    </View>
  )
}

export default Services