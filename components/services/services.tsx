import { View, Text, Image } from 'react-native'
import Reactfrom 'react'
import tailwind from 'twrnc'
import FIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import stylist1 from '../../assets/matheus-ferrero-W7b3eDUb_2I-unsplash.jpeg'

const renderStars = (rating) => {
    const stars = [];
  
    for (let i = 0; i < 5; i++) {
      // Determine whether the star should be filled or outlined based on the rating
      const isFilled = i < rating;
  
      // Push the appropriate star icon to the stars array
      stars.push(
        <Icon
          key={i}
          name={isFilled ? 'star' : 'staro'}
          color='#ec589c'
          size={12}
        />
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
    link: any
}

const ServicesList: React.FC<ServiceListProps> = ({image, name, description, price, rating, link}) => (
    <View>
        <View>
            <Image source={image} style={tailwind``}/>
            <View>
                <Text>{name}</Text>
                <Text>{description}</Text>
                <View style={tailwind`flex-row items-center my-1`}>
                    {renderStars(rating)}
                </View>
            </View>
        </View>
        <View>
            <Text>{price}</Text>
            <TouchableOpacity onPress={link}>
                <Text>Book Now</Text>
            </TouchableOpacity>
        </View>
    </View>
)

const Services = () => {
    const navigation = useNavigation()
  return (
    <View>
        <Text style={tailwind`mb-3 font-extrabold text-lg`}>Hair Specialists</Text>
        <View>
            <ServicesList image={stylist1} name='Braid' description='' rating={4} price={10} link={() => {}} />
        </View>
    </View>
  )
}

export default Services