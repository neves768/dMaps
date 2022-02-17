
import { StatusBar } from 'expo-status-bar';
import React,{ useEffect, useState }  from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import MapView, {Marker} from 'react-native-maps';

export default function MapBox ({navigation}) {
    const token = "vv7oTsHdw0X9g5e7QbniP58j3iJY4h6AoOSxMIw2X8xjokSHjF";
    const [markers, setMarker] = useState([])
    const [coords, setCoords] = useState([])
    
    useEffect(function(){
        async function getData(){
            const ftc = await fetch("https://mobile.ect.ufrn.br:3003/markers", {headers: {"Authorization": `Bearer ${token}`}})
            const r = await ftc.json()
            setMarker(r)
        }
        getData()
    }, [])
    return (
        <View>
            <MapView style={styles.map}>
                {
                markers.map((marker, id) => <Marker
                    key={id}
                    coordinate = {{latitude: marker.latitude, longitude: marker.longitude }}
                    title={marker.title}
                    description={marker.description}
                />)
                }
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#aff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
});