import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, Image, View, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import MapView from 'react-native-maps';

import MapBox from '../components/MapBox.js'

export default function AddMarker({navigation}) {
  return (
    <View>
        <StatusBar style="auto"/>
        <MapBox navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: Constants.statusBarHeight
    },
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
