import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import FIcon from 'react-native-vector-icons/Feather';
import dp from '../../assets/matheus-ferrero-W7b3eDUb_2I-unsplash.jpeg'
import tailwind from 'twrnc'

const HomeHeader = () => {
  return (
    <View style={tailwind`px-6`}>
            <View style={tailwind`flex-row items-center justify-between pt-8 pb-4`}>
                <Image source={dp} style={tailwind`w-10 h-10 rounded-xl`}/>
                <View style={tailwind`flex-row gap-3`}>
                        <TouchableOpacity style={tailwind`border-2 border-gray-200 p-3 rounded-xl`}>
                            <FIcon name='bell' size={15} color='black'/>
                        </TouchableOpacity>
                        <TouchableOpacity style={tailwind`border-2 border-gray-200 p-3 rounded-xl`}>
                            <FIcon name='heart' size={15} color='black'/>
                        </TouchableOpacity>
                </View>
            </View>
            <Text style={tailwind`text-3xl font-bold`}>Hi, Young Savage</Text>
            <Text style={tailwind`text-xl text-gray-500`}>Location</Text>
            <View style={tailwind`flex-row items-center justify-between gap-2 border-2 border-gray-200 px-3 py-2 rounded-xl mt-2`}>
                    <TouchableOpacity>
                    <FIcon name='search' size={18} color='gray' style={tailwind``}/>
                    </TouchableOpacity>
                    <TextInput placeholder='Search For Service' style={tailwind`flex-1`}/>
                    <TouchableOpacity>
                        <FIcon name='mic' size={18} color='gray'/>
                    </TouchableOpacity>
            </View>
    </View>
  )
}

export default HomeHeader