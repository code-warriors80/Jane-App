import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

import services from '../../data/services';

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
    image: ImageSourcePropType
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

const Services = ({setOpenModal}) => {
    const navigation = useNavigation()
    const handleBookService = (service) => {
      setOpenModal(true, { selectedService: service }); // Pass the selected service as a parameter
    };
  return (
    <View style={tailwind`px-3`}>
        <Text style={tailwind`mb-3 font-extrabold text-lg`}>Services</Text>
        <View>
          {services.map((service, index) => (
            <ServicesList key={index} image={service.image} name={service.name} description={service.description} rating={service.rating} ratingnum={service.ratingnum} price={service.price} link={() => handleBookService(service)} />
          ))}
        </View>
    </View>
  )
}

export default Services