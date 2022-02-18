import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
import Constants from 'expo-constants';

import MapBox, {MapBoxForm} from '../components/MapBox.js'

export default function AddMarker({navigation}) {
  return (
    <View>
        <StatusBar style="auto"/>
        <MapBox navigation={navigation} defaultView={false} />
        <MapBoxForm/>
    </View>
  );
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    btnIcon: {
        position: 'absolute',
        width: 64,
        height: 64,
        right: 16,
        bottom: 16,
    }
});
