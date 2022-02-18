
import React, { useState }  from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, View, Dimensions, Text, TextInput, Button } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

let _setMarker, postMarker

export const MapBoxForm = function(){    
    const [title, onChangeTitle] = useState("")
    const [description, onChangeDesc] = useState("")
    function handleSubmit(){
        postMarker(title, description)
    }
    return (
        <View style={styles.formBox}>
            <TextInput placeholder="Titulo" onChangeText={onChangeTitle} style={styles.input} />
            <TextInput placeholder="Descrição" onChangeText={onChangeDesc} style={styles.input} />
            <Button title="Adicionar" onPress={() => handleSubmit()}/>
        </View>
    )    
}

export default function MapBox ({navigation, defaultView=true}) {
    const token = "vv7oTsHdw0X9g5e7QbniP58j3iJY4h6AoOSxMIw2X8xjokSHjF";
    const [markers, setMarker] = useState([])
    const [coords, setCoords] = useState([0,0])
    const [formData, setFormData] = useState({"title":"", "description": ""})
    
    useFocusEffect(
        React.useCallback(() => {
            async function getData(){
                let ftc = await fetch("https://mobile.ect.ufrn.br:3003/markers", {headers: {"Authorization": `Bearer ${token}`}})
                let r = await ftc.json()
                setMarker(r)
            }
            _setMarker = setMarker
            getData()

            return () => {
                setMarker([])
            };
        }, [])
    );

    postMarker = function(title, desc){
        if(title.length < 2 || desc.length < 2){
            alert("Escreva um titulo e descrição válidos")
            return;
        }
        async function postReq(){
            let bdy = JSON.stringify({
                "latitude":  coords[0],
                "longitude": coords[1],
                "title": title,
                "description": desc
            })
            console.log("pre-req")
            console.log(bdy)
            let req = await fetch("https://mobile.ect.ufrn.br:3003/markers", {
                method: "POST",
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": 'application/json',
                    "Authorization": `Bearer ${token}`
                },
                body: bdy
            }).then(function(resp){
                if(resp.status == 200){
                    alert("Adicionado com sucesso")
                    navigation.navigate("HomeScreen")
                } else {
                    console.log(resp.status)
                    alert("Ocorreu algum erro")
                }
            })
        }
        postReq()
    }

    if(defaultView){
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
    } else {
        return (
            <View>
                <MapView style={styles.map}
                    onPress={(ev) => {
                        setCoords([ev.nativeEvent.coordinate.latitude, ev.nativeEvent.coordinate.longitude])
                    }}>
                    <Marker
                        coordinate={{latitude: coords[0], longitude: coords[1]}}
                        title={formData.title}
                        description={formData.description}
                    />
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#aff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formBox: {
        position: "absolute",
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: 150,
        bottom: 0
    },
    map: {
        width: Dimensions.get('window').width,
        height: "100%"
    },
    input: {
        height: 40,
        width: "70%",
        margin: 2,
        borderBottomWidth: 1,
    }
});