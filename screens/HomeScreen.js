import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, Image, View, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import MapView from 'react-native-maps';

import MapBox from '../components/MapBox.js'
import Header from '../components/Header.js'

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
        <StatusBar style="auto"/>
        <Header navigation={navigation}/>
        <MapBox navigation={navigation}/>
        <Image
          source={require("../assets/addIcon.png")}
          style={styles.btnIcon}
          onStartShouldSetResponder={() => navigation.navigate("AddMarker", {})}
        />
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
