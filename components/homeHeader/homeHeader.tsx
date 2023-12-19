import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import FIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import dp from '../../assets/matheus-ferrero-W7b3eDUb_2I-unsplash.jpeg'
import tailwind from 'twrnc'

const HomeHeader = ({toggleNotification}) => {
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
        <View style={tailwind`px-5 pb-2 bg-[#ec589c]`}>
                <View style={tailwind`flex-row items-start justify-between pt-5 pb-4`}>
                    <Image source={dp} style={tailwind`w-13 h-13 rounded-xl`}/>
                    <View style={tailwind`flex-row gap-3`}>
                            <TouchableOpacity style={tailwind`bg-[#F4F8FC] flex-row items-center justify-center p-3 rounded-xl`} onPress={() => toggleNotification(true)}>
                                <FIcon name='bell' size={15} color='#ec589c'/>
                            </TouchableOpacity>

                            <TouchableOpacity style={tailwind`bg-[#F4F8FC] flex-row items-center justify-center p-3 rounded-xl`} onPress={Love}>
                                {loved !== false ?  <Icon name='heart' size={15} color='#ec589c'/> :  <FIcon name='heart' size={15} color='#ec589c'/> }
                            </TouchableOpacity>
                    </View>
                </View>
                <Text style={[tailwind`text-xl font-bold text-white`, {fontFamily: 'Font1'}]}>Hi, Young Savage</Text>
                <Text style={tailwind`text-base text-white`}>Location</Text>
        </View>
  )
}

export default HomeHeader;
