import { View } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import tailwind from 'twrnc';

const Map = () => {
  return (
    <View style={tailwind`w-full h-64`}>
      <MapView
        style={tailwind`flex-1 rounded-lg`}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="Jahn Hairpire"
          description="Hair Salon"
        />
      </MapView>
    </View>
  );
};

export default Map;
