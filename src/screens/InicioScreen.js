import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function InicioScreen({ navigation }) {
    return (
        <ImageBackground source={require('../../assets/fundo.png')}
            style={styles.background}
            resizeMode='cover'>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
});
