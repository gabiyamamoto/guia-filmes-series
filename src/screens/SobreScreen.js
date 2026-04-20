import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function SobreScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Sobre o CineBox</Text>

                <Text style={styles.description}>
                    O CineBox é um aplicativo desenvolvido para os amantes de filmes e séries,
                    oferecendo uma experiência completa para descobrir e explorar conteúdos
                    audiovisuais.
                </Text>

                <Text style={styles.subtitle}>Características</Text>
            </View>
        </ScrollView>
    )
}