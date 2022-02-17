
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function Header({navigation}) {
  return (
    <View style={styles.header}>
        <Text style={{color:"black"}}>DMaps</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: "#e0e0e0",
        height: 50,
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10
    },
    appLogo: {
        width: 32,
        height: 32
    }
});