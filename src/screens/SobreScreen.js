import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function SobreScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.conteudo}>
                <Text style={styles.titulo}>Sobre o CineBox</Text>

                <Text style={styles.descricao}>
                    O CineBox é um aplicativo desenvolvido para os amantes de filmes e séries,
                    oferecendo uma experiência completa para descobrir e explorar conteúdos
                    audiovisuais.
                </Text>

                <Text style={styles.subtitulo}>Características</Text>
                <View style={styles.caracte}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.textoCaracte}>Catálogo com filmes e séries</Text>
                </View>
                <View style={styles.caracte}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.textoCaracte}>Informações detalhadas de cada título</Text>
                </View>
                <View style={styles.caracte}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.textoCaracte}>Interface moderna e intuitiva</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141414'
    },
    conteudo: {
        padding: 20,
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#e50914',
    },
    descricao: {
        fontSize: 16,
        color: '#ccc',
        lineHeight: 24,
        marginBottom: 25,
    },
    subtitulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 15,
        marginTop: 10,
    },
    caracte: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    bullet: {
        fontSize: 18,
        color: '#e50914',
        marginRight: 10,
    },
    textoCaracte: {
        fontSize: 16,
        color: '#ccc'
    },
})