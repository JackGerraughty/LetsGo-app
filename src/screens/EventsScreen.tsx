import React, { useEffect, useState} from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Platform } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import MapView, { Region } from 'react-native-maps'
import Geolocation from 'react-native-geolocation-service';
import * as Location from 'expo-location'



const EventsScreen = ({ navigation }) => {
  const [region, setRegion] = useState<Region | null>(null);


  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      setRegion({
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      {region ? (
        <MapView style={styles.map} initialRegion={region} showsUserLocation={true} />
      ) : (
        <Text style={styles.loading}>Loading map...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  loading: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 18,
  },
});

export default EventsScreen;